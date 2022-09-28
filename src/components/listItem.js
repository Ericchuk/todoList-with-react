import pen from "./images/pen.png";
import bin from "./images/bin.png";
import Noitem from "./noItem";
import {v4 as uuidv4} from 'uuid'

function ListItems({ list, setList }) {

  function deleteitem({id}) {
    setList( list.filter((todo) => todo.id !== id));
    alert("Deleted all but i have a bug");

  }

  return (
    <div className="list">
      <h1>My To Do List</h1>
      <ul>
        {list.length > 0 ? list.map((todo) => {
          return (
            <li key={uuidv4()}>
              <span>
                <input type="checkbox" />
                <p>{todo}</p>
              </span>

              <span>
                <img src={pen} alt="pen" />
                <img src={bin} alt="bin" onClick={() => {deleteitem(todo)}} />
              </span>
            </li>
          );
        }) : <Noitem />}
      </ul>
      <footer className="list-footer">
        <section>
          <p>{list.length} item in List</p>
        </section>
      </footer>
    </div>
  );
}

export default ListItems;
