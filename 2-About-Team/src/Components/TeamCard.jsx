import { FaLinkedin, FaGithub } from "react-icons/fa";

const TeamCard = ({ member }) => {
  return (
    <div className="group text-center bg-gradient-to-br from-white to-gray-50 p-8 rounded-3xl shadow-xl hover:shadow-2xl hover:-translate-y-3 hover:scale-[1.02] transition-all duration-500 border border-white/50 backdrop-blur-sm relative overflow-hidden max-w-sm mx-auto">
      <img
        src={member.image}
        alt={member.name}
        className="w-28 h-28 mx-auto rounded-3xl ring-4 ring-gray-100/50 shadow-2xl group-hover:shadow-white/30 group-hover:ring-blue-200/70 group-hover:scale-105 transition-all duration-500 object-cover"
        loading="lazy"
      />

      <h3 className="font-black text-center text-2xl bg-gradient-to-r from-gray-900 via-gray-800 to-blue-900 bg-clip-text text-transparent mt-6 mb-2 group-hover:from-blue-600 group-hover:to-emerald-600 transition-all duration-500">
        {member.name}
      </h3>
      
      <p className="font-bold text-center text-lg bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent px-4 py-2 inline-block rounded-full shadow-lg mb-4 border border-blue-200/50">
        {member.role}
      </p>
      
      <p className="text-gray-600 text-center leading-relaxed text-base mb-6 line-clamp-3 px-2">
        {member.bio}
      </p>

      <div className="flex justify-center gap-6 pt-6 border-t border-gray-100/70">
        <a
          href={member.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="group/link w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-2xl shadow-xl hover:shadow-2xl hover:scale-110 hover:rotate-3 flex items-center justify-center transition-all duration-300 backdrop-blur-sm border border-blue-400/40 hover:border-blue-500/60"
          aria-label={`LinkedIn - ${member.name}`}
        >
          <FaLinkedin className="w-7 h-7 drop-shadow-md" />
        </a>

        <a
          href={member.github}
          target="_blank"
          rel="noopener noreferrer"
          className="group/link w-14 h-14 bg-gradient-to-br from-gray-800 to-gray-900 hover:from-gray-900 hover:to-black text-white rounded-2xl shadow-xl hover:shadow-2xl hover:scale-110 hover:rotate-3 flex items-center justify-center transition-all duration-300 backdrop-blur-sm border border-gray-700/50 hover:border-gray-800/70"
          aria-label={`GitHub - ${member.name}`}
        >
          <FaGithub className="w-7 h-7 drop-shadow-md" />
        </a>
      </div>
    </div>
  );
};

export default TeamCard;