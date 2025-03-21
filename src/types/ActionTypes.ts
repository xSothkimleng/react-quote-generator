import { Action } from 'redux';
import { Quote } from './quote';

export const LOAD_RANDOM_QUOTES = 'LOAD_RANDOM_QUOTES';
export const ADD_TO_FAVORITES = 'ADD_TO_FAVORITES';
export const REMOVE_FROM_FAVORITES = 'REMOVE_FROM_FAVORITES';

export interface LoadRandomQuotesAction extends Action<typeof LOAD_RANDOM_QUOTES> {
  payload: Quote[];
}
export interface AddToFavoritesAction extends Action<typeof ADD_TO_FAVORITES> {
  payload: Quote;
}
export interface RemoveFromFavoritesAction extends Action<typeof REMOVE_FROM_FAVORITES> {
  payload: number;
}

export type QuoteActionTypes = AddToFavoritesAction | RemoveFromFavoritesAction | LoadRandomQuotesAction;
