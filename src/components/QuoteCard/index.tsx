import Button from '../Button';

interface QuoteCardProps {
  quote: string;
  author: string;
}

const QuoteCard: React.FC<QuoteCardProps> = ({ quote, author }) => {
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
        <Button text='Delete Quote' />
      </div>
    </div>
  );
};

export default QuoteCard;
