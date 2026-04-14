import "./Card.css"

const Card = ({ image,title, description, buttonText }) => {
  return (
    <div className="card">
    <img src={image}  />
      <h2>{title}</h2>
      <p>{description}</p>
      <button className="btn">{buttonText}</button>
    </div>
  );
};

export default Card;