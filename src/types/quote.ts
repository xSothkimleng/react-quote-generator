export interface Quote {
  id: number;
  quote: string;
  author: string;
  isFavorite?: boolean;
}

export interface QuoteState {
  favorites: Quote[];
  randomQuotes: Quote[];
}
