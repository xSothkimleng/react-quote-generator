export interface Quote {
  id: number;
  quote: string;
  author: string;
}

export interface QuoteState {
  favorites: Quote[];
}
