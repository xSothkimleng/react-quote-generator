import { ADD_TO_FAVORITES, LOAD_RANDOM_QUOTES, QuoteActionTypes, REMOVE_FROM_FAVORITES } from '../types/ActionTypes';
import { QuoteState } from '../types/quote';

const initialState: QuoteState = {
  favorites: [],
  randomQuotes: [],
};

const quoteReducer = (state = initialState, action: QuoteActionTypes): QuoteState => {
  switch (action.type) {
    case LOAD_RANDOM_QUOTES:
      // replace randomQuotes
      return {
        ...state,
        randomQuotes: action.payload,
      };
    case ADD_TO_FAVORITES:
      {
        // Check for duplication
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
      // remove by id
      return {
        ...state,
        favorites: state.favorites.filter(quote => quote.id !== action.payload),
      };
    default:
      return state;
  }
};

export default quoteReducer;
