import React from "react";
import "./App.css";

function App() {
  fetch("/user")
    .then((res) => res.json())
    .then((data) => console.log(data));
  return (
    <div className="container">
      <div className="jumbotron">
        <header className="title">
          <h1>Hello from React App!</h1>
        </header>
      </div>
    </div>
  );
}

export default App;
