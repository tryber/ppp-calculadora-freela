import './ResultCard.css';

type ResultCardProps = {
  children: React.ReactNode;
};
function ResultCard({ children }: ResultCardProps) {
  return (
    <div className="result">
      <div className="result__content">
        {children}
      </div>
    </div>
  );
}

export default ResultCard;
