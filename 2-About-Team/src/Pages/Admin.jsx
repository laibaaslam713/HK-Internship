import { useState, useEffect } from "react";
import teamData from "../data/Team.json";

const Admin = ({goBack}) => {

  const [team, setTeam] = useState([]);
  const [form, setForm] = useState({
    id: null,
    name: "",
    role: "",
    image: "",
    bio: "",
    linkedin: "",
    github: ""
  });

  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("team"));
    setTeam(stored || teamData);
  }, []);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (isEdit) {
      const updated = team.map(m => m.id === form.id ? form : m);
      setTeam(updated);
      localStorage.setItem("team", JSON.stringify(updated));
      setIsEdit(false);
    } else {
      const newMember = { ...form, id: Date.now() };
      const updated = [...team, newMember];
      setTeam(updated);
      localStorage.setItem("team", JSON.stringify(updated));
    }

    setForm({
      id: null,
      name: "",
      role: "",
      image: "",
      bio: "",
      linkedin: "",
      github: ""
    });
  }

  function deleteMember(id) {
    const updated = team.filter(m => m.id !== id);
    setTeam(updated);
    localStorage.setItem("team", JSON.stringify(updated));
  }

  function editMember(member) {
    setForm(member);
    setIsEdit(true);
  }
  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="max-w-5xl mx-auto">

        <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Admin Panel</h2>

        <button
          onClick={goBack}
          className="bg-gray-800 text-white px-4 py-2 rounded"
        >
          Back
        </button>
      </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-xl shadow-sm mb-8 grid md:grid-cols-2 gap-4"
        >
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Name"
            className="border p-2 rounded"
            required
          />

          <input
            name="role"
            value={form.role}
            onChange={handleChange}
            placeholder="Role"
            className="border p-2 rounded"
            required
          />

          <input
            name="image"
            value={form.image}
            onChange={handleChange}
            placeholder="Image URL"
            className="border p-2 rounded"
          />

          <input
            name="linkedin"
            value={form.linkedin}
            onChange={handleChange}
            placeholder="LinkedIn URL"
            className="border p-2 rounded"
          />

          <input
            name="github"
            value={form.github}
            onChange={handleChange}
            placeholder="GitHub URL"
            className="border p-2 rounded"
          />

          <textarea
            name="bio"
            value={form.bio}
            onChange={handleChange}
            placeholder="Bio"
            className="border p-2 rounded md:col-span-2"
          />

          <button
            type="submit"
            className="bg-blue-600 text-white py-2 rounded md:col-span-2"
          >
            {isEdit ? "Update Member" : "Add Member"}
          </button>
        </form>

        {/* Team List */}
        <div className="grid md:grid-cols-3 gap-4">
          {team.map(member => (
            <div
              key={member.id}
              className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition"
            >
              <img
                src={member.image}
                className="w-16 h-16 rounded-full mx-auto mb-2"
              />

              <h3 className="text-center font-semibold">{member.name}</h3>
              <p className="text-center text-blue-500 text-sm">{member.role}</p>

              <div className="flex justify-center gap-2 mt-3">
                <button
                  onClick={() => editMember(member)}
                  className="bg-yellow-400 px-3 py-1 rounded text-sm"
                >
                  Edit
                </button>

                <button
                  onClick={() => deleteMember(member.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded text-sm"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default Admin