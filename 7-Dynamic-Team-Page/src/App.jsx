import React, { useEffect, useState } from "react";
import TeamCard from "./components/TeamCard";
import "./App.css";

function App() {
  const [team, setTeam] = useState([]);
  const [search, setSearch] = useState("");
  const [role, setRole] = useState("All");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://69e6fb2468208c1debe81b62.mockapi.io/api/team/Team-Data")
      .then((res) => {
        if (!res.ok) throw new Error("Error fetching data");
        return res.json();
      })
      .then((data) => {
        setTeam(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load data");
        setLoading(false);
      });
  }, []);

  const uniqueRoles = ["All", ...new Set(team.map((member) => member.role))];

  const filteredTeam = team.filter((member) =>
    member.name.toLowerCase().includes(search.toLowerCase()) &&
    (role === "All" || member.role === role)
  );

  const showNotFound = !loading && !error && filteredTeam.length === 0 && search !== "";


  return (
    <div className="app">
      <h1>Our Team</h1>

      <div className="controls">
        <input
          type="text"
          placeholder="Search by name..."
          onChange={(e) => setSearch(e.target.value)}
        />
        <select onChange={(e) => setRole(e.target.value)} value={role}>
          {uniqueRoles.map((r, index) => (
            <option key={index} value={r}>{r}</option>
          ))}
        </select>
      </div>

      {loading && <p>Loading team...</p>}
      {error && <p className="error">{error}</p>}

      <div className="container">
        {filteredTeam.length > 0 ? (
          filteredTeam.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))
        ) : (
          showNotFound && (
            <div className="not-found">
              <p>🔍 No team members found matching "{search}"</p>
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default App;