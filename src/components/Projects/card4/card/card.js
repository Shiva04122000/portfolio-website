import "./card.css";
import "./flip-transition.css";
import MoviePlayer from '../../../../images/MoviePlayer.png'

function Card({ onClick }) {
  return (
    <>
      <div className="card" onClick={onClick}>
        <div className="card-back">
          <h1 className="card-title">Movie Player </h1>
          <p>Created Using React.js.
            An Application where admin have Fetched the movies details from a open API using axios.
          </p>
          <div className="view-btns">
            <a target="_blank" href="https://github.com/Shiva04122000/Movie-Player"><button>Code</button></a>
            <a target="_blank" href="https://movie-player-info.netlify.app/"><button>Live</button></a>
          </div>
        </div>
        <div className="card-front">
          <img src={MoviePlayer} alt="" />
        </div>
      </div>
    </>

  );
}

export default Card;