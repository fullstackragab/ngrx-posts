import { createFeatureSelector, createSelector } from "@ngrx/store";
import { adapter, State } from "./posts.reducer";
import * as fromPosts from './posts.reducer'

export const selectFeature = createFeatureSelector<fromPosts.State>(fromPosts.featureKey)

const {
    selectAll,
    selectEntities,
    selectIds,
    selectTotal
} = adapter.getSelectors()


export const selectPosts = createSelector(
    selectFeature,
    selectAll
)

export const selectError = createSelector(
    selectFeature,
    (state: fromPosts.State) => state.error
)






                                                                                                                    