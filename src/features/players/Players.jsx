import React from "react";
import "../../index.css";
import {
  useFetchPlayersQuery,
  useDeletePlayerMutation,
} from "../../api/puppyBowlApi";
import { useNavigate } from "react-router-dom";
import PlayerForms from "./PlayerForms";
import SearchBar from "./SearchBar";

const Players = ({ foundPlayer, setFoundPlayer }) => {
  const { data = {}, error, isLoading } = useFetchPlayersQuery();
  const [deletePlayer] = useDeletePlayerMutation();
  const navigate = useNavigate();
  // Show a loading message while data is being fetched
  if (isLoading) {
    return <div>is Loading...</div>;
  }

  // Show an error message if the fetch failed
  if (error) {
    return <div>Error Occurred</div>;
  }

  return (
    <div className="player-container">
      <SearchBar foundPlayer={foundPlayer} setFoundPlayer={setFoundPlayer} />
      <PlayerForms />
      <div className="players">
        {foundPlayer
          ? foundPlayer.map((player) => (
              <div key={player.id} className="player-card">
                <div className="player-button">
                  <h2> {player.name} </h2>
                  <button
                    className="detailsButton"
                    onClick={() => navigate(`/players/${player.id}`)}
                  >
                    Player Details
                  </button>
                  <button
                    id="deleteButton"
                    onClick={() => deletePlayer(player.id)}
                  >
                    Delete Player
                  </button>
                </div>
              </div>
            ))
          : data.data.players.map((player) => (
              <div key={player.id} className="player-card">
                <div className="player-button">
                  <h2> {player.name} </h2>
                  <button
                    className="detailsButton"
                    onClick={() => navigate(`/players/${player.id}`)}
                  >
                    Player Details
                  </button>
                  <button
                    id="deleteButton"
                    onClick={() => deletePlayer(player.id)}
                  >
                    Delete Player
                  </button>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
};

export default Players;
