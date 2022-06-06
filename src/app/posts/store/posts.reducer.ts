import { createReducer, on } from '@ngrx/store';

import { Post } from "../models/post.model";
import * as PostsActions from './posts.actions'

export const featureKey = 'feature';

export interface State {
    posts: Post[],
    error: any
}

export const initialState: State = {
    posts: [],
    error: undefined
}

export const postsReducer = createReducer(
    initialState,
    on(
        PostsActions.loadAllPostsSuccess, 
        (state, { posts }) => ({...state, posts})
    ),
    on(
        PostsActions.loadAllPostsFailure, 
        (state, { error }) => ({...state, error })
    ),
)