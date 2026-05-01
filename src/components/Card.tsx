interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
}
export const Card = ({ title, description, imageUrl }: CardProps) => (
  <div className="card" style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
    <img src={imageUrl} alt={title} style={{ width: '150px' }} />
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);