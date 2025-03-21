import { useSelector } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import { Quote, QuoteState } from '../types/quote';

const FavoritesPage = () => {
  const favorites = useSelector((state: QuoteState) => state.favorites);

  console.log(favorites);

  return (
    <div>
      <p style={{ margin: '1rem 0' }}>Saved Favorites</p>
      {favorites.length === 0 ? (
        <p>No favorite quotes saved yet.</p>
      ) : (
        <div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {favorites.map((quote: Quote) => (
              <div key={quote.id}>
                <QuoteCard id={quote.id} quote={quote.quote} author={quote.author} isFavorite={true} />
                <div style={{ width: '100%', padding: '0.01rem', background: 'lightgray' }}></div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default FavoritesPage;
