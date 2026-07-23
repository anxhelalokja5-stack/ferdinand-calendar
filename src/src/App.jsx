import { useState } from "react";

const rooms = [
  1, 2, 3, 4, 5, 6,
  7, 8, 9, 10, 11, 12
];

function App() {
  const [login, setLogin] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  if (!login) {
    return (
      <div className="login">
        <h1>Ferdinand Residence</h1>
        <h2>Login</h2>

        <input
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={() => {
            if (
              username === "ferdinand.residence" &&
              password === "ferdinand12344"
            ) {
              setLogin(true);
            } else {
              alert("Login incorrect");
            }
          }}
        >
          Hyr
        </button>
      </div>
    );
  }

  return (
    <div className="dashboard">
      <h1>Ferdinand Residence Calendar</h1>

      <div className="calendar">
        {rooms.map((room) => (
          <div className="room" key={room}>
            <h3>Dhoma {room}</h3>
            <div className="empty">
              Rezervim i lirë
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
