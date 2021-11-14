import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Button = (props) => {
  // your code here
  //const handleClick = () => console.log("reset");

  return(
    <button onClick={props.onClick}>{props.buttonText}</button>
  );
};

const Application = () => {

  // your code here
  const [name, setName] = useState("");

  const reset = () => setName("");

  return (
    <main>
      <input 
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Type your name"
      />
      <Button onClick={reset} buttonText="Reset" />
      {name && <h1>Hello {name}</h1>}
    </main>
  );
};

ReactDOM.render(<Application />, document.getElementById("root"));
