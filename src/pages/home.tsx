import { useState } from 'react';
import Button from '../components/Button';
import QuoteCard from '../components/QuoteCard';
import { QuoteState } from '../types/quote';
import { useDispatch, useSelector } from 'react-redux';
import { loadRandomQuotes } from '../redux/actions';
import { AnyAction } from 'redux';
import LoadingSpinner from '../components/LoadingSpinner';

const HomePage = () => {
  const dispatch = useDispatch();
  const quotes = useSelector((state: QuoteState) => state.currentQuotes);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchRandomQuote = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch('https://dummyjson.com/quotes/random/10');
      if (!response.ok) {
        throw new Error('Failed to fetch quote');
      }
      const data = await response.json();
      dispatch(loadRandomQuotes(data) as unknown as AnyAction);
    } catch (error) {
      setError(error instanceof Error ? error.message : 'An unknown error occurred');
    } finally {
      setLoading(false);
    }
  };

  const handleGenerateQuote = () => {
    fetchRandomQuote();
  };

  return (
    <div style={{ marginBottom: '0.5rem' }}>
      <div style={{ margin: '1rem 0' }}>
        <Button onClick={() => handleGenerateQuote()} text='Generate Quote' />
      </div>
      {loading && (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <LoadingSpinner />
        </div>
      )}

      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      {quotes &&
        quotes.length > 0 &&
        quotes.map(quote => (
          <div key={quote.id}>
            <QuoteCard id={quote.id} quote={quote.quote} author={quote.author} isFavorite={quote.isFavorite} />
            <div style={{ width: '100%', padding: '0.01rem', background: 'lightgray' }}></div>
          </div>
        ))}
    </div>
  );
};

export default HomePage;
