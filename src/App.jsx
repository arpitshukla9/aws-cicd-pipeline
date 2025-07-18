import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaAws, FaGithub, FaCloud } from "react-icons/fa";

function App() {
  return (
    <main className="min-h-screen bg-gradient-to-tr from-[#0f0c29] via-[#302b63] to-[#24243e] text-white flex flex-col items-center justify-center font-sans">
      <motion.header
        className="text-center p-8"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
          DevOps Mentor Hub
        </h1>
        <p className="text-xl text-gray-300 max-w-xl mx-auto">
          Empowering Developers with CI/CD Knowledge — Shresth Sahai, Coding Blocks, Garvit Doehere
        </p>
      </motion.header>
      <motion.section
        className="max-w-4xl mx-auto p-8 bg-black/30 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/10 mb-10"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <h2 className="text-3xl font-semibold mb-6">Project Overview</h2>
        <p className="mb-6 text-gray-300 leading-relaxed">
          A next-level static React website designed for professional DevOps mentoring and portfolio showcase. Fully optimized for modern CI/CD workflows using AWS CodePipeline, CodeBuild, CodeCommit, and S3.
        </p>
        <ul className="grid gap-4 grid-cols-1 sm:grid-cols-2">
          <li className="p-4 bg-gradient-to-r from-purple-800 via-pink-600 to-red-500 rounded-xl shadow-lg flex items-center gap-4">
            <FaReact size={24} /> 🚀 Built with React + Tailwind CSS + Framer Motion
          </li>
          <li className="p-4 bg-gradient-to-r from-indigo-800 via-blue-600 to-purple-500 rounded-xl shadow-lg flex items-center gap-4">
            <FaAws size={24} /> 🔥 Fully Automated AWS CI/CD Pipeline
          </li>
          <li className="p-4 bg-gradient-to-r from-green-800 via-emerald-600 to-teal-500 rounded-xl shadow-lg flex items-center gap-4">
            <FaGithub size={24} /> ✅ Mentors: Shresth Sahai, Coding Blocks, Garvit Doehere
          </li>
          <li className="p-4 bg-gradient-to-r from-yellow-800 via-orange-600 to-red-400 rounded-xl shadow-lg flex items-center gap-4">
            <FaCloud size={24} /> 🎯 Deployed on AWS S3 + CloudFront
          </li>
        </ul>
      </motion.section>
      <motion.section
        className="max-w-6xl mx-auto p-8 bg-black/20 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <h2 className="text-3xl font-semibold mb-6 text-center">Learning Journey</h2>
        <div className="relative w-full h-40 flex items-center justify-between">
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 rounded-full bg-purple-600 flex items-center justify-center text-xl font-bold">1</div>
            <p className="mt-2 text-sm">Git & CodeCommit</p>
          </div>
          <div className="flex-grow h-1 bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 mx-2"></div>
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 rounded-full bg-pink-600 flex items-center justify-center text-xl font-bold">2</div>
            <p className="mt-2 text-sm">CodeBuild</p>
          </div>
          <div className="flex-grow h-1 bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 mx-2"></div>
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 rounded-full bg-red-600 flex items-center justify-center text-xl font-bold">3</div>
            <p className="mt-2 text-sm">CodePipeline</p>
          </div>
          <div className="flex-grow h-1 bg-gradient-to-r from-yellow-500 via-green-500 to-teal-500 mx-2"></div>
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 rounded-full bg-green-600 flex items-center justify-center text-xl font-bold">4</div>
            <p className="mt-2 text-sm">S3 Hosting</p>
          </div>
        </div>
      </motion.section>
      <motion.footer
        className="mt-12 text-gray-400 text-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        © 2025 DevOps Mentor Hub. All rights reserved.
      </motion.footer>
    </main>
  );
}

export default App;
