import { ADD_TO_FAVORITES, LOAD_RANDOM_QUOTES, QuoteActionTypes, REMOVE_FROM_FAVORITES } from '../types/ActionTypes';
import { QuoteState } from '../types/quote';

const initialState: QuoteState = {
  favorites: [],
  currentQuotes: [],
};

const quoteReducer = (state = initialState, action: QuoteActionTypes): QuoteState => {
  switch (action.type) {
    case LOAD_RANDOM_QUOTES:
      // replace randomQuotes and check for favorite
      return {
        ...state,
        currentQuotes: action.payload.map(quote => ({
          ...quote,
          isFavorite: state.favorites.some(fav => fav.id === quote.id),
        })),
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
        currentQuotes: state.currentQuotes.map(quote =>
          quote.id === action.payload.id ? { ...quote, isFavorite: true } : quote,
        ),
      };
    case REMOVE_FROM_FAVORITES:
      // remove by id
      return {
        ...state,
        favorites: state.favorites.filter(quote => quote.id !== action.payload),
        currentQuotes: state.currentQuotes.map(quote => (quote.id === action.payload ? { ...quote, isFavorite: false } : quote)),
      };
    default:
      return state;
  }
};

export default quoteReducer;
