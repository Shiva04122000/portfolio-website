import "./card.css";
import "./flip-transition.css";
import cryptoTracker from '../../../../images/CryptoTracker.png'

function Card({ onClick }) {
  return (
    <>
      <div className="card" onClick={onClick}>
        <div className="card-back">
          <h1 className="card-title">Crypto Tracker</h1>
          <p>Created Using React.js, Material Ui and Chart.js.
            For Animation Framer Motion is used.
            Api used from coingecko.com
            A Platform where user can keep a track of top 100
            cryptocurrency.
            Also can Compare the currencies using Chart
          </p>
          <div className="view-btns">
            <a target="_blank" href="https://github.com/Shiva04122000/Crypto-Tracker"><button>Code</button></a>
            <a target="_blank" href="https://shiva-crypto-tracker.netlify.app/"><button>Live</button></a>
          </div>
        </div>
        <div className="card-front">
          <img src={cryptoTracker} alt="" />
        </div>
      </div>
    </>

  );
}

export default Card;