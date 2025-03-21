import {
  ADD_TO_FAVORITES,
  AddToFavoritesAction,
  LOAD_RANDOM_QUOTES,
  LoadRandomQuotesAction,
  REMOVE_FROM_FAVORITES,
  RemoveFromFavoritesAction,
} from '../types/ActionTypes';
import { Quote } from '../types/quote';

export const loadRandomQuotes = (quotes: Quote[]): LoadRandomQuotesAction => ({
  type: LOAD_RANDOM_QUOTES,
  payload: quotes,
});

export const addToFavorites = (quote: Quote): AddToFavoritesAction => ({
  type: ADD_TO_FAVORITES,
  payload: quote,
});

export const removeFromFavorites = (id: number): RemoveFromFavoritesAction => ({
  type: REMOVE_FROM_FAVORITES,
  payload: id,
});
