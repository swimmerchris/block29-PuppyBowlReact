import React from "react";
import "../../index.css";
import { useFetchPlayersQuery } from "../../api/puppyBowlApi";
import { useNavigate } from "react-router-dom";

const Players = ({ foundPlayer, setFoundPlayer }) => {
  const { data = {}, error, isLoading } = useFetchPlayersQuery();
  const navigate = useNavigate();
  // Show a loading message while data is being fetched
  if (isLoading) {
    return <div>is Loading...</div>;
  }

  // Show an error message if the fetch failed
  if (error) {
    return <div>Error Occurred</div>;
  }

  // Show the fetched data after it has arrived
  return (
    <div className="players">
      {foundPlayer
        ? foundPlayer.map((player) => (
            <div key={player.id} className="player-card">
              <div className="player-button">
                <h2> {player.name} </h2>
                <button onClick={() => navigate(`/players/${player.id}`)}>
                  Player Details
                </button>
              </div>
            </div>
          ))
        : data.data.players.map((player) => (
            <div key={player.id} className="player-card">
              <div className="player-button">
                <h2> {player.name} </h2>
                <button onClick={() => navigate(`/players/${player.id}`)}>
                  Player Details
                </button>
              </div>
            </div>
          ))}
    </div>
  );
};

export default Players;
