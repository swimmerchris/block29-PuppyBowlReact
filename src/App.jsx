import { Routes, Route } from "react-router-dom";
// import React from "react";
import { useState } from "react";
// Import the Players component, which we'll use to show a list of players
import Players from "./features/players/Players";
import PlayerDetails from "./features/players/PlayerDetails";
import "./index.css";

// Define the App component
function App() {
  const [foundPlayer, setFoundPlayer] = useState(null);
  return (
    <div className="App">
      <h1 id="header">Puppy Bowl</h1>
      <Routes>
        <Route
          path="/"
          element={
            <Players
              foundPlayer={foundPlayer}
              setFoundPlayer={setFoundPlayer}
            />
          }
        ></Route>
        <Route
          path="/players/"
          element={
            <Players
              foundPlayer={foundPlayer}
              setFoundPlayer={setFoundPlayer}
            />
          }
        ></Route>
        <Route path="/players/:id" element={<PlayerDetails />}></Route>
      </Routes>
    </div>
  );
}

export default App;
