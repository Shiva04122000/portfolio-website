import "./card.css";
import "./flip-transition.css";
import MusicPlayer from '../../../../images/MusicPlayer.png'

function Card({ onClick }) {
  return (
    <>
      <div className="card" onClick={onClick}>
        <div className="card-back">
          <h1 className="card-title">Music Player</h1>
          <p>Created Using Html ,Css and javaScript.
            A Music Player Where User can enjoy the music Which also has control to the Volume.
          </p>
          <div className="view-btns">
            <a target="_blank" href="https://github.com/Shiva04122000/MusicPlayer"><button>Code</button></a>
            <a target="_blank" href="https://music-enchancer.netlify.app/"><button>Live</button></a>
          </div>
        </div>
        <div className="card-front">
          <img src={MusicPlayer} alt="" />
        </div>
      </div>
    </>

  );
}

export default Card;