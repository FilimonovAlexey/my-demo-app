import './Card.css';

function Card({ title, author, src, alt }) {
  return (
    <div className="Card">
      <img className="Card-image" alt={alt} src={src} />
      <p className="Card-title">{title || alt}</p>
      <p className="Card-subtitle">{author}</p>
    </div>
  );
}

export default Card;
