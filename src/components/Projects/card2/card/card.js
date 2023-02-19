import "./card.css";
import "./flip-transition.css";
import workPlace from '../../../../images/WorkPlace.png'

function Card({ onClick }) {
  return (
    <>
      <div className="card" onClick={onClick}>
        <div className="card-back">
          <h1 className="card-title">Work Place</h1>
          <p>Create Using React.js and Firebase
            Where Client post a Job .
            And Candidate Applies for a Job.
            Once the client gets Connected with candidate then they
            can have a chat.
          </p>
          <div className="view-btns">
            <a target="_blank" href="https://github.com/accio-Test-Projects/work-place-FE"><button>Code</button></a>
            <a target="_blank" href="https://shiva-work-place.netlify.app/"><button>Live</button></a>
          </div>
        </div>
        <div className="card-front">
          <img src={workPlace} alt="" />
        </div>
      </div>
    </>

  );
}

export default Card;