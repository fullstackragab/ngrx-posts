import { createAction, props } from "@ngrx/store";
import { Post } from "../models/post.model";

export const loadAllPosts = createAction(
    '[Posts Page] Load all posts'
);

export const loadAllPostsSuccess = createAction(
    '[Posts Page] Load all posts success',
    props<{ posts: Post[] }>()
);

export const loadAllPostsFailure = createAction(
    '[Posts Page] Load all posts failure',
    props<{ error: any }>()
);