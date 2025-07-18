import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaAws, FaGithub, FaCloud, FaUsers, FaTools, FaCheckCircle, FaCodeBranch, FaServer } from "react-icons/fa";

function App() {
  return (
    <main className="min-h-screen bg-gradient-to-tr from-[#0f0c29] via-[#302b63] to-[#24243e] text-white flex flex-col items-center justify-center font-sans px-4">
      {/* Header Section */}
      <motion.header className="text-center py-8" initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
          DevOps Mentor Hub
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
          Learn modern CI/CD workflows with AWS — Shresth Sahai, Coding Blocks, Garvit Doehere
        </p>
      </motion.header>

      {/* Project Overview Section */}
      <motion.section className="max-w-4xl w-full mx-auto p-6 md:p-8 bg-black/30 backdrop-blur-xl rounded-xl shadow-lg border border-white/10 mb-8" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4, duration: 0.6 }}>
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">Project Overview</h2>
        <p className="mb-4 text-gray-300">A clean, production-optimized static React site that visually explains the CI/CD process using AWS. Designed to be lightweight for fast S3 hosting and minimal storage.</p>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <li className="p-4 rounded-lg bg-gradient-to-br from-purple-700 to-pink-600 flex items-center gap-3"><FaReact size={20} /> React + Tailwind + Framer Motion</li>
          <li className="p-4 rounded-lg bg-gradient-to-br from-indigo-700 to-purple-600 flex items-center gap-3"><FaAws size={20} /> Automated AWS CI/CD Pipeline</li>
          <li className="p-4 rounded-lg bg-gradient-to-br from-green-700 to-teal-600 flex items-center gap-3"><FaGithub size={20} /> Mentored by Shresth, Coding Blocks, Garvit</li>
          <li className="p-4 rounded-lg bg-gradient-to-br from-yellow-600 to-red-500 flex items-center gap-3"><FaCloud size={20} /> Deployed on S3 + CloudFront</li>
        </ul>
      </motion.section>

      {/* Learning Journey Section */}
      <motion.section className="max-w-5xl w-full mx-auto p-6 md:p-8 bg-black/20 backdrop-blur-xl rounded-xl shadow-lg border border-white/10" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7, duration: 0.6 }}>
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center">Learning Journey</h2>
        <div className="flex flex-col md:flex-row items-center justify-around gap-6">
          {"Git & CodeCommit,CodeBuild,CodePipeline,S3 Hosting".split(",").map((step, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className={`w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center font-bold text-lg md:text-xl ${i === 0 ? 'bg-purple-600' : i === 1 ? 'bg-pink-600' : i === 2 ? 'bg-red-600' : 'bg-green-600'}`}>{i + 1}</div>
              <p className="mt-2 text-xs md:text-sm text-center">{step}</p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Why Choose Us Section */}
      <motion.section className="max-w-4xl w-full mx-auto p-6 md:p-8 bg-black/20 backdrop-blur-xl rounded-xl shadow-lg border border-white/10 mt-8" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 0.6 }}>
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center">Why Choose Us</h2>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <li className="p-4 rounded-lg bg-gradient-to-br from-blue-700 to-indigo-600 flex items-center gap-3"><FaUsers size={20} /> Community-Driven Mentorship</li>
          <li className="p-4 rounded-lg bg-gradient-to-br from-teal-700 to-green-600 flex items-center gap-3"><FaTools size={20} /> Real-World DevOps Tools</li>
          <li className="p-4 rounded-lg bg-gradient-to-br from-pink-700 to-red-600 flex items-center gap-3"><FaCheckCircle size={20} /> Practical, Proven Workflows</li>
        </ul>
      </motion.section>

      {/* How to Create This Project Section */}
      <motion.section className="max-w-4xl w-full mx-auto p-6 md:p-8 bg-black/30 backdrop-blur-xl rounded-xl shadow-lg border border-white/10 mt-8" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9, duration: 0.6 }}>
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center">How to Create This Project</h2>
        <ol className="list-decimal list-inside text-gray-300 space-y-2">
          <li>Initialize a React project using Vite or Create React App</li>
          <li>Set up Tailwind CSS and Framer Motion for styling and animations</li>
          <li>Design static pages: Overview, Learning Journey, Why Choose Us</li>
          <li>Commit code to AWS CodeCommit repository</li>
          <li>Create AWS CodeBuild project for building React app</li>
          <li>Set up AWS CodePipeline connecting CodeCommit → CodeBuild → S3</li>
          <li>Configure S3 static hosting + optional CloudFront for CDN</li>
          <li>Test full CI/CD pipeline by pushing changes to CodeCommit</li>
        </ol>
      </motion.section>

      {/* Architecture Diagram - Live Rendered Section */}
      <motion.section className="max-w-4xl w-full mx-auto p-6 md:p-8 bg-black/30 backdrop-blur-xl rounded-xl shadow-lg border border-white/10 mt-8 flex flex-col items-center" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1, duration: 0.6 }}>
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center">Architecture Flow</h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <div className="flex flex-col items-center">
            <FaCodeBranch size={36} className="mb-2" />
            <p className="text-center">Developer Push</p>
          </div>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-600 via-pink-500 to-red-500"></div>
          <div className="flex flex-col items-center">
            <FaGithub size={36} className="mb-2" />
            <p className="text-center">GitHub / CodeCommit</p>
          </div>
          <div className="w-16 h-1 bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500"></div>
          <div className="flex flex-col items-center">
            <FaServer size={36} className="mb-2" />
            <p className="text-center">CodePipeline + CodeBuild</p>
          </div>
          <div className="w-16 h-1 bg-gradient-to-r from-yellow-500 via-green-500 to-teal-500"></div>
          <div className="flex flex-col items-center">
            <FaCloud size={36} className="mb-2" />
            <p className="text-center">Deploy to S3</p>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <motion.footer className="mt-10 py-4 text-gray-400 text-xs md:text-sm" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>
        © 2025 DevOps Mentor Hub. Fast. Lightweight. Optimized.
      </motion.footer>
    </main>
  );
}

export default App;
