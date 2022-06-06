import { createFeatureSelector, createSelector } from "@ngrx/store";

import * as fromPosts from './posts.reducer'

export const selectFeature = createFeatureSelector<fromPosts.State>(fromPosts.featureKey)

export const selectPosts = createSelector(
    selectFeature,
    (state: fromPosts.State) => state.posts
)

export const selectError = createSelector(
    selectFeature,
    (state: fromPosts.State) => state.error
)