import React from "react";
import Nav from "./Nav";
import CardList from "./CardList";
import hogs from "../porkers_data";

function App() {
  return (
    <div className="App">
      	<Nav />
      	<CardList hogs={hogs} />
    </div>
  );
}

export default App;
