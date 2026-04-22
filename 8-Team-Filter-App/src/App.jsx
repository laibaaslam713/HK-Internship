import React, { useEffect, useState } from "react";
import { getTeamData } from "./api/teamapi";
import TeamCard from "./components/TeamCard";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [role, setRole] = useState("All");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getTeamData().then((res) => {
      setData(res);
      setLoading(false);
    });
  }, []);

  const filteredData = data.filter((member) => {
    const matchSearch =
      member.name.toLowerCase().includes(search.toLowerCase()) ||
      member.role.toLowerCase().includes(search.toLowerCase()) ||
      member.skills.toLowerCase().includes(search.toLowerCase());

    const matchRole = role === "All" || member.role === role;

    return matchSearch && matchRole;
  });

  return (
    <div className="app">

      <nav className="navbar">
        <h2>👥 TEAM DIRECTORY</h2>
      </nav>

      <h1>Our Amazing Team</h1>

      <div className="controls">

        <input
          type="text"
          placeholder="🔍 Search by name, role or skills..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="filters">
          {["All", "Developer", "Designer", "Manager"].map((item) => (
            <button
              key={item}
              className={role === item ? "active-btn" : ""}
              onClick={() => setRole(item)}
            >
              {item}
            </button>
          ))}
        </div>

        <button className="clear-btn" onClick={() => {
          setSearch("");
          setRole("All");
        }}>
          Clear Filters
        </button>
      </div>


      {loading ? (
        <p>Loading...</p>
      ) : filteredData.length === 0 ? (
        <p>No team members found</p>
      ) : (
        <div className="grid">
          {filteredData.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </div>
      )}

    </div>
  );
}

export default App;