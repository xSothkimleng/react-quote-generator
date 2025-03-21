import { useDispatch } from 'react-redux';
import Button from '../Button';
import { Quote } from '../../types/quote';
import { addToFavorites, removeFromFavorites } from '../../redux/actions';
import { AnyAction } from 'redux';

interface QuoteCardProps {
  quote: string;
  author: string;
  id: number;
  isFavorite?: boolean;
}

const QuoteCard: React.FC<QuoteCardProps> = ({ quote, author, id, isFavorite = false }) => {
  const dispatch = useDispatch();

  const handleSaveQuote = () => {
    const quoteObject: Quote = {
      id,
      quote,
      author,
      isFavorite: true,
    };
    dispatch(addToFavorites(quoteObject) as unknown as AnyAction);
  };

  const handleDeleteQuote = () => {
    dispatch(removeFromFavorites(id) as unknown as AnyAction);
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '0.5rem',
        padding: '1rem',
      }}>
      <div style={{ flex: 4 }}>
        <p style={{ fontSize: '20px' }}>&quot;{quote}&quot;</p>
        <p style={{ fontSize: '16px', color: 'gray' }}>by {author}</p>
      </div>
      <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
        {isFavorite ? (
          <Button text='Delete Quote' onClick={handleDeleteQuote} />
        ) : (
          <Button text='Save Quote' onClick={handleSaveQuote} />
        )}
      </div>
    </div>
  );
};

export default QuoteCard;
