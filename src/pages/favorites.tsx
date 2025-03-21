import QuoteCard from '../components/QuoteCard';

const dummyData = {
  quote: 'The only way to get started is to quit talking and begin doing.',
  author: 'Walt Disney',
};

const FavoritesPage = () => {
  return (
    <div>
      <p style={{ margin: '1rem 0' }}>Saved Favorites</p>
      <div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <QuoteCard quote={dummyData.quote} author={dummyData.author} />
          <div style={{ width: '100%', padding: '0.01rem', background: 'lightgray' }}></div>
        </div>
      </div>
    </div>
  );
};

export default FavoritesPage;
