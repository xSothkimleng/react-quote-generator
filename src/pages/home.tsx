import { useState } from 'react';
import Button from '../components/Button';
import QuoteCard from '../components/QuoteCard';
import { Quote } from '../types/quote';

const HomePage = () => {
  const [quote, setQuote] = useState<Quote[] | []>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchRandomQuote = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('https://dummyjson.com/quotes/random/10');
      if (!response.ok) {
        throw new Error('Failed to fetch quote');
      }
      const data = await response.json();
      setQuote(data);
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
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      {quote &&
        quote.length > 0 &&
        quote.map(quote => (
          <>
            <QuoteCard key={quote.id} id={quote.id} quote={quote.quote} author={quote.author} isFavorite={false} />
            <div style={{ width: '100%', padding: '0.01rem', background: 'lightgray' }}></div>
          </>
        ))}
    </div>
  );
};

export default HomePage;
