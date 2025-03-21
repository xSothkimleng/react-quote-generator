import { ADD_TO_FAVORITES, AddToFavoritesAction, REMOVE_FROM_FAVORITES, RemoveFromFavoritesAction } from '../types/ActionTypes';
import { Quote } from '../types/quote';

export const addToFavorites = (quote: Quote): AddToFavoritesAction => ({
  type: ADD_TO_FAVORITES,
  payload: quote,
});

export const removeFromFavorites = (id: number): RemoveFromFavoritesAction => ({
  type: REMOVE_FROM_FAVORITES,
  payload: id,
});
