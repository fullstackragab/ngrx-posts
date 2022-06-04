import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";
import { createReducer, on } from "@ngrx/store";
import { Post } from "../models/post.model";
import * as PostsActions from './posts.action'

export const featureKey = 'feature';

export interface State extends EntityState<Post> {
    error: any
}

export const adapter: EntityAdapter<Post> = createEntityAdapter<Post>()

export const initialState: State = adapter.getInitialState({
    error: undefined
})

export const postsReducer = createReducer(
    initialState,
    on(
        PostsActions.loadAllPostsSuccess, 
        (state, { posts }) => adapter.setAll(posts, state)
    ),
    on(
        PostsActions.loadAllPostsFailure, 
        (state, { error }) => ({...state, error })
    ),
)


