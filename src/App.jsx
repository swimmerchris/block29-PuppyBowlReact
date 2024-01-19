import { Routes, Route } from "react-router-dom";
// import React from "react";
import { useState } from "react";
// Import the Players component, which we'll use to show a list of players
import Players from "./features/players/Players";
import PlayerDetails from "./features/players/PlayerDetails";
import PlayerForms from "./features/players/PlayerForms";
import SearchBar from "./features/players/SearchBar";

// Define the App component
function App() {
  const [foundPlayer, setFoundPlayer] = useState(null);
  return (
    <div className="App">
      <PlayerForms />
      <SearchBar foundPlayer={foundPlayer} setFoundPlayer={setFoundPlayer} />
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
