import { useState } from "react";
import teamData from "../data/Team.json";
import TeamCard from "./TeamCard";

const Team = () => {
  const [search, setSearch] = useState("");
  const [role, setRole] = useState("All");

  // Unique roles
  const roles = ["All", ...new Set(teamData.map((m) => m.role))];

  // Filter logic
  const filteredMembers = teamData.filter((member) => {
    return (
      member.name.toLowerCase().includes(search.toLowerCase()) &&
      (role === "All" || member.role === role)
    );
  });

  return (
    <div className="mt-12 px-4">

      <h3 className="text-4xl font-semibold text-black mb-6 text-center">
        OUR TEAM
      </h3>

      <div className="flex flex-col md:flex-row justify-center gap-4 mb-8">

        <input
          type="text"
          placeholder="Search by name..."
          className="border px-4 py-2 rounded-lg w-full md:w-64 focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="border px-4 py-2 rounded-lg w-full md:w-64 focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          {roles.map((r, index) => (
            <option key={index} value={r}>
              {r}
            </option>
          ))}
        </select>

      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredMembers.length > 0 ? (
          filteredMembers.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">
            No members found
          </p>
        )}
      </div>

    </div>
  );
};

export default Team;