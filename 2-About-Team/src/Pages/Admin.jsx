import { useState, useEffect } from "react";
import teamData from "../data/team.json";

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
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen p-4 sm:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12 gap-6">
          <h2 className="text-center text-2xl lg:text-4xl font-bold">
            Admin Panel
          </h2>
          <button
            onClick={goBack}
            className="px-8 py-4 bg-gray-800 text-white font-semibold rounded-2xl shadow-xl hover:shadow-2xl hover:scale-3d hover:-translate-y-1 transition-all duration-300 border border-gray-700/50"
          >
            ← Back to About
          </button>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white/80 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border border-white/50 mb-12 grid md:grid-cols-2 gap-6"
        >
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Full Name"
            className="w-full p-3 border border-gray-200 rounded-2xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 text-lg placeholder-gray-400 bg-gray-50/50 hover:bg-white"
            required
          />

          <input
            name="role"
            value={form.role}
            onChange={handleChange}
            placeholder="Job Title"
            className="w-full p-3 border border-gray-200 rounded-2xl focus:ring-4 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all duration-300 text-lg placeholder-gray-400 bg-gray-50/50 hover:bg-white"
            required
          />

          <input
            name="image"
            value={form.image}
            onChange={handleChange}
            placeholder="Image URL"
            className="w-full p-3 border border-gray-200 rounded-2xl focus:ring-4 focus:ring-purple-500/20 focus:border-purple-500 transition-all duration-300 text-lg placeholder-gray-400 bg-gray-50/50 hover:bg-white"
          />

          <input
            name="linkedin"
            value={form.linkedin}
            onChange={handleChange}
            placeholder="LinkedIn URL"
            className="w-full p-3 border border-gray-200 rounded-2xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 text-lg placeholder-gray-400 bg-gray-50/50 hover:bg-white"
          />

          <input
            name="github"
            value={form.github}
            onChange={handleChange}
            placeholder="GitHub URL"
            className="w-full p-3 border border-gray-200 rounded-2xl focus:ring-4 focus:ring-gray-500/20 focus:border-gray-700 transition-all duration-300 text-lg placeholder-gray-400 bg-gray-50/50 hover:bg-white"
          />

          <textarea
            name="bio"
            value={form.bio}
            onChange={handleChange}
            placeholder="Short Bio"
            className="border border-gray-200 p-5 rounded-2xl md:col-span-2 focus:ring-4 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all duration-300 text-lg placeholder-gray-400 resize-vertical bg-gray-50/50 hover:bg-white min-h-[120px]"
            rows="3"
          />

          <button
            type="submit"
            className="md:col-span-2 bg-blue-700 hover:bg-gray-600  text-white py-3 px-12 rounded-3xl font-bold text-xl shadow-2xl hover:shadow-3xl hover:scale-3d hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-white/30"
          >
            {isEdit ? " Update Member" : " Add New Member"}
          </button>
        </form>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {team.map(member => (
            <div
              key={member.id}
              className="group bg-white/70 backdrop-blur-sm p-6 rounded-3xl shadow-xl hover:shadow-2xl hover:-translate-y-3 hover:scale-[1.02] transition-all duration-500 border border-white/60 overflow-hidden"
            >
              <img
                src={member.image || "https://via.placeholder.com/150"}
                className="w-20 h-20 rounded-3xl mx-auto mb-4 shadow-2xl group-hover:scale-110 group-hover:ring-4 group-hover:ring-blue-200/50 transition-all duration-500 object-cover"
                alt={member.name}
              />

              <h3 className="text-center font-black text-xl text-black transition-all">
                {member.name}
              </h3>
              
              <p className="text-center font-semibold text-lg text-blue-400 mb-6 px-3 py-1 inline-block rounded-full">
                {member.role}
              </p>

              <div className="flex gap-3 justify-center">
                <button
                  onClick={() => editMember(member)}
                  className="flex-1 bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-gray-900 font-semibold py-3 px-4 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 border border-yellow-300/50"
                >
                  Edit
                </button>

                <button
                  onClick={() => deleteMember(member.id)}
                  className="flex-1 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold py-3 px-4 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 border border-red-400/50"
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

export default Admin;