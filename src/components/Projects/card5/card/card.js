import "./card.css";
import "./flip-transition.css";
import TodoApp from '../../../../images/TodoApp.png'

function Card({ onClick }) {
  return (
    <>
      <div className="card" onClick={onClick}>
        <div className="card-back">
          <h1 className="card-title">Todo App</h1>
          <p>Created Using React.js, FireBase and Bootstrap.
            A simple Application where User needs to first signup to use the Application .
            And Performed Crud Operation where User can Add todos which can also be Updated and Deleted.
          </p>
          <div className="view-btns">
            <a target="_blank" href="https://github.com/Shiva04122000/Todo-App"><button>Code</button></a>
            <a target="_blank" href="https://shiva-todo-app.netlify.app/"><button>Live</button></a>
          </div>
        </div>
        <div className="card-front">
          <img src={TodoApp} alt="" />
        </div>
      </div>
    </>

  );
}

export default Card;