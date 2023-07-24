import React from "react";
import CounterComponent from "./components/CounterComponent";
import ButtonComponent from "./components/ButtonComponent";
import DataFetchingComponent from "./components/DataFetchingComponent";
import './App.css';


const App = () => {
  const handleClick = () => {
    console.log("Button clicked!");
    alert('first task is completed');
    // Perform any specific action here
  };
  return (
    <div className="App">
      <h1>This is first task</h1>
      <ButtonComponent label="Click Me" onClickHandler={handleClick}/>
      <hr/>
      <h1>This is second task</h1>
      <CounterComponent />
      <hr/>
      <h1>This is third task</h1>
      <DataFetchingComponent/>
    </div>
  );
};

export default App;
