import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromPosts from '../../store/posts.reducer'
import * as PostsActions from '../../store/posts.action'
import { selectError, selectPosts } from '../../store/posts.selectors';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts$ = this.store.select(selectPosts)
  error$ = this.store.select(selectError)

  constructor(private readonly store: Store<fromPosts.State>) { }

  ngOnInit(): void {
    this.store.dispatch(PostsActions.loadAllPosts())
  }

}
