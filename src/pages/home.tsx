import Button from '../components/Button';
import QuoteCard from '../components/QuoteCard';

const dummyData = {
  quote: 'The only way to get started is to quit talking and begin doing.',
  author: 'Walt Disney',
};

const HomePage = () => {
  return (
    <div style={{ marginBottom: '0.5rem' }}>
      <div style={{ margin: '1rem 0' }}>
        <Button text='Generate Quote' />
      </div>
      <QuoteCard quote={dummyData.quote} author={dummyData.author} />
    </div>
  );
};

export default HomePage;
