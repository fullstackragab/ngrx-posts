import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, of } from "rxjs";
import { PostsService } from "../services/posts.service";
import * as PostsActions from './posts.actions'

@Injectable()
export class PostsEffects {

    loadPosts$ = createEffect(() => this.actions$.pipe(
        ofType(PostsActions.loadAllPosts),
        mergeMap(() => this.postsService.getPosts()
            .pipe(
                map(posts => PostsActions.loadAllPostsSuccess({ posts })),
                catchError((error) => {
                    console.log(' error ')
                    return of(PostsActions.loadAllPostsFailure({ error }))
                })
            )))
    );

    constructor(
        private actions$: Actions,
        private postsService: PostsService
    ) { }
}




