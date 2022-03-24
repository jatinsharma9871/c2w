import "./App.css";
import { Rentals } from "./Components/Rentals/Rentals";
import { AddHouse } from "./Components/AddHouse/AddHouse";
import { useState } from "react";

function App() {
  const [toggle,setToggle] = useState(false);
  const [name,setName]=useState("Add House");
  return (
    <div className="App">
      <button className="toggleForm" onClick={
        ()=>{
          if(toggle){
            setToggle(false)
            setName("Add House");
          }else{
            setToggle(true);
            setName("Show Rentals");
          } 
        }
      }>
        {/* Show text Add House or Show Rentals based on state */
        name
        }
      </button>
      {/* Show component based on state */
      (toggle) ? <AddHouse/> : <Rentals/>
      }
      <br />
    </div>
  );
}

export default App;
