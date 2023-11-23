/* eslint-disable react/prop-types */
import emptyStarImg from "../img/Star.svg";
import starImg from "../img/Star_fill.svg";
import "./item.css";

export default function Item({ item }) {
  return (
    <div className="item">
      <div className="img-div">
        {item.popular ? <p>Pupular</p> : null}
        <img src={item.image} alt="" />
      </div>
      <div className="name-price">
        <h4>{item.name}</h4>
        <p>{item.price}</p>
      </div>
      <div className="rating-vote-avaliable">
        <div className="rating-vote">
          {item.rating ? (
            <img src={starImg} alt="Star" />
          ) : (
            <img src={emptyStarImg} alt="Star" />
          )}
          <p className="rating">{item.rating}</p>
          <p className="vote">({item.votes} votes)</p>
        </div>
        {!item.available ? <p className="sold-out">Sold out</p> : ""}
      </div>
    </div>
  );
}
