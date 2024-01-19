import { useState } from "react";
import React from "react";
import "../../index.css";
import { useFetchPlayersQuery } from "../../api/puppyBowlApi";

export default function SearchBar({ setFoundPlayer }) {
  const [searchName, setSearchName] = useState("");
  //   const [foundPlayer, setFoundPlayer] = useState();
  const { data = {}, error, isLoading } = useFetchPlayersQuery();

  function handleSubmit(event) {
    event.preventDefault();

    console.log(data.data.players);
    const player = data.data.players.filter((currentPlayer) => {
      //   console.log(currentPlayer.name, searchName);
      return currentPlayer.name.toLowerCase() === searchName.toLowerCase();
    });
    console.log(player);
    if (player.length > 0) {
      setFoundPlayer(player);
    } else {
      setFoundPlayer(data.data.players);
    }
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Search for Player:{" "}
          <input
            value={searchName}
            onChange={(e) => setSearchName(e.target.value)}
          />
        </label>
        <button>search</button>
      </form>
    </div>
  );
}
