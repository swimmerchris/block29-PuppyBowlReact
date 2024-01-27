import { useState } from "react";
import Select from "react-select";
import "../../index.css";
import { useAddPlayerMutation } from "../../api/puppyBowlApi";

export default function PlayerForms() {
  const [playerName, setPlayerName] = useState("");
  const [playerBreed, setPlayerBreed] = useState("");
  const [playerStatus, setPlayerStatus] = useState("");
  const [playerImage, setPlayerImage] = useState("");
  const [playerTeam, setPlayerTeam] = useState("");
  const [error, setError] = useState(null);
  const [addPlayer, result] = useAddPlayerMutation();

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const body = {
        name: playerName,
        breed: playerBreed,
        status: playerStatus,
        imageUrl: playerImage,
        teamId: playerTeam,
      };
      addPlayer(body);

      setPlayerName("");
      setPlayerBreed("");
      setPlayerImage("");
      setPlayerStatus("");
      setPlayerTeam("");
    } catch (error) {
      setError(error);
    }
  }

  const statusOptions = [
    { value: "field", label: "field" },
    { value: "bench", label: "bench" },
  ];

  const teamOptions = [
    { value: 9, label: "Fluff" },
    { value: 10, label: "Ruff" },
  ];

  return (
    <div className="signup">
      <h2>Sign Up</h2>
      {error && <p>{console.log(error)}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Player Name:{" "}
          <input
            value={playerName}
            onChange={(e) => setPlayerName(e.target.value)}
          />
        </label>
        <label>
          Player Breed:{" "}
          <input
            value={playerBreed}
            onChange={(e) => setPlayerBreed(e.target.value)}
          />
        </label>
        <label>
          Player Image:{" "}
          <input
            value={playerImage}
            onChange={(e) => setPlayerImage(e.target.value)}
          />
        </label>
        <label className="form-label">Player Status</label>
        <Select
          className="form-select"
          options={statusOptions}
          onChange={(choice) => setPlayerStatus(choice.value)}
        />
        <label className="form-label">Player Team</label>
        <Select
          className="form-select"
          options={teamOptions}
          onChange={(choice) => {
            return setPlayerTeam(choice.value);
          }}
        />
        <button id="formButton">Submit</button>
      </form>
    </div>
  );
}
