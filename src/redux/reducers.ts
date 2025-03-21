import { ADD_TO_FAVORITES, QuoteActionTypes, REMOVE_FROM_FAVORITES } from '../types/ActionTypes';
import { QuoteState } from '../types/quote';

// Initial state
const initialState: QuoteState = {
  favorites: [],
};

// Reducer function
const quoteReducer = (state = initialState, action: QuoteActionTypes): QuoteState => {
  switch (action.type) {
    case ADD_TO_FAVORITES:
      {
        // Check if quote already exists in favorites
        const exists = state.favorites.some(quote => quote.id === action.payload.id);
        if (exists) {
          return state;
        }
      }
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    case REMOVE_FROM_FAVORITES:
      return {
        ...state,
        favorites: state.favorites.filter(quote => quote.id !== action.payload),
      };
    default:
      return state;
  }
};

export default quoteReducer;
