import { isDevMode } from '@angular/core';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import {countNode, countReducer, CountState} from "./count/count.reducer";
import {CountActions} from "./count/count.actions";

export interface State {
  [countNode]: CountState;

}
export const reducers: ActionReducerMap<State, CountActions> = {
 [countNode]: countReducer
};


export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
