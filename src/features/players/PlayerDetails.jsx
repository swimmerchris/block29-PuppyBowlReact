import { useParams } from "react-router-dom";
import { useFetchPlayersQuery } from "../../api/puppyBowlApi";
import { useNavigate } from "react-router-dom";

export default function PlayerDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data = {}, error, isLoading } = useFetchPlayersQuery();

  const player = data.data.players.find((currentPlayer) => {
    return currentPlayer.id === parseInt(id);
  });

  return (
    <div key={player.id} className="player-details">
      {/* Display the player's image, with the player's name as alt text */}
      <div className="player-image-container">
        <img src={player.imageUrl} alt={player.name} className="player-image" />
      </div>
      <div className="player-details">
        <h2> {player.name} </h2>
        <p> {player.breed} </p>
        <p> {player.status} </p>
        <button onClick={() => navigate(`/`)} className="detailsButton">
          Back to Players List
        </button>
      </div>
    </div>
  );
}
