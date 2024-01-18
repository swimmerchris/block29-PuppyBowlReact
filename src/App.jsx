import { Routes, Route } from "react-router-dom";
import React from "react";
// Import the Players component, which we'll use to show a list of players
import Players from "./features/players/Players";
import PlayerDetails from "./features/players/PlayerDetails";
import PlayerForms from "./features/players/PlayerForms";

// Define the App component
function App() {
  return (
    <div className="App">
      <PlayerForms />
      <Routes>
        <Route path="/" element={<Players />}></Route>
        <Route path="/players/" element={<Players />}></Route>
        <Route path="/players/:id" element={<PlayerDetails />}></Route>
      </Routes>
    </div>
  );
}

export default App;
