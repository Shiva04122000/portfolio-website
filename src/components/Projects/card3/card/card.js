import "./card.css";
import "./flip-transition.css";
import ShoppingCart from '../../../../images/ShoppingCart.png'

function Card({ onClick }) {
  return (
    <>
      <div className="card" onClick={onClick}>
        <div className="card-back">
          <h1 className="card-title">Ecommerce Cart </h1>
          <p>Create a Ecommerce Store showing the products Using React.js and FireBase
            Where admin have stored the user Signup information in
            firebase.
            Also made a Cart where user can add and remove
            Products.
          </p>
          <div className="view-btns">
            <a target="_blank" href="https://github.com/Shiva04122000/Shopping-store"><button>Code</button></a>
            <a target="_blank" href="https://resin-arts.netlify.app/"><button>Live</button></a>
          </div>
        </div>
        <div className="card-front">
          <img src={ShoppingCart} alt="" />
        </div>
      </div>
    </>

  );
}

export default Card;