import InputSection from "./inputSection";
import ListItems from "./listItem";
import { useState } from "react";

function LandingPage() {
    const [inputValue, setInputValue] = useState("");
    const [list, setList] = useState([]);

    function sent(e){
        e.preventDefault();
        if(inputValue === "" || inputValue === " "){
            alert("Create an item")
            return
        }
        setInputValue("");
        setList((prev)=> [...prev, inputValue]);
        console.log(inputValue);
        
    }

  return (
    <article>
      <InputSection setInputValue={setInputValue} onClick={sent}/>
      <ListItems list={list} setList={setList} />
    </article>
  );
}

export default LandingPage;
