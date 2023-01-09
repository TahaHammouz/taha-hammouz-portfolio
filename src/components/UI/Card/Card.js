import "./Card.css";
const Card = ({ icon, title, description }) => {
  return (
    <div className="card">
      <div className="icon">
        <i className={"fa-solid fa-" + icon} />
      </div>
      <div className="info">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};
export default Card;
