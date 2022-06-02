import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { PostsComponent } from './components/posts/posts.component';
import { PostsService } from './services/posts.service';
import { StoreModule } from '@ngrx/store';
import { featureKey, postsReducer } from './store/posts.reducer';
import { EffectsModule } from '@ngrx/effects';
import { PostsEffects } from './store/posts.effects';


@NgModule({
  declarations: [
    PostsComponent
  ],
  imports: [
    CommonModule,
    PostsRoutingModule,
    StoreModule.forFeature(featureKey, postsReducer),
    EffectsModule.forFeature([PostsEffects])
  ],
  providers: [
    PostsService
  ]
})
export class PostsModule { }






