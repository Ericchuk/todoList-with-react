import pen from "./images/pen.png";
import bin from "./images/bin.png";
import Noitem from "./noItem";

function ListItems({ list, setList }) {
 

  function edit(){
    
  }
  function deleteitem({id}) {
    // if(e.target.checked){
    // console.log(e);
    // }
    setList( list.filter((todo) => todo !== id));
    alert("Deleted all but i have a bug");

  }

  return (
    <div className="list">
      <h1>My To Do List</h1>
      <ul>
        {list.length > 0 ? list.map((todo, index) => {
          return (
            <li key={index}>
              <span>
                <input type="checkbox" />
                <p>{todo}</p>
              </span>

              <span>
                <img src={pen} alt="pen" onClick={edit}/>
                <img src={bin} alt="bin" onClick={deleteitem} />
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
