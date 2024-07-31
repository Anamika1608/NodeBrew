import React from 'react';
import { motion } from 'framer-motion';

const HackBrew = () => {
  return (
    <section className="mt-7 bg-coffee-50 min-h-screen py-20 px-6 text-coffee-900">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-5xl mx-auto text-center"
      >
        <h1 className="text-5xl font-bold mb-8 font-rocaThin ">
          HackBrew 2024
        </h1>
        <p className="text-lg mb-12 text-coffee-700">
          Join us for an immersive hackathon experience designed to push your limits and innovate in a collaborative environment.
        </p>
      </motion.div>

      <div className="relative max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 mt-16">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="relative p-10 bg-gradient-to-r from-blue-100 via-blue-50 to-green-100 rounded-lg shadow-xl"
        >
          <div className="absolute top-0 left-0 w-20 h-20 bg-coffee-600 text-coffee-50 font-bold text-3xl flex items-center justify-center rounded-full transform -translate-y-10 -translate-x-10 shadow-lg">
            48H
          </div>
          <h3 className="text-3xl font-semibold mb-4 text-blue-600">Non-stop Coding</h3>
          <p className="text-coffee-700">
            Dive into 48 hours of continuous coding and problem-solving. Collaborate with like-minded individuals to create innovative solutions.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="relative p-10 bg-gradient-to-r from-blue-100 via-blue-50 to-green-100 rounded-lg shadow-xl"
        >
          <div className="absolute top-0 left-0 w-20 h-20 bg-coffee-600  text-coffee-50 font-bold text-3xl flex items-center justify-center rounded-full transform -translate-y-10 -translate-x-10 shadow-lg">
          🖥️
          </div>
          <h3 className="text-3xl font-semibold mb-4 text-blue-600">Hands-On Workshops</h3>
          <p className="text-coffee-700">
            Gain practical skills through expert-led workshops designed to enhance your technical abilities and understanding.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="relative p-10 bg-gradient-to-r from-blue-100 via-blue-50 to-green-100 rounded-lg shadow-xl"
        >
          <div className="absolute top-0 left-0 w-20 h-20 bg-coffee-600  text-coffee-50 font-bold text-3xl flex items-center justify-center rounded-full transform -translate-y-10 -translate-x-10 shadow-lg">
          🤝
          </div>
          <h3 className="text-3xl font-semibold mb-4 text-blue-600">Networking</h3>
          <p className="text-coffee-700">
            Build connections with industry experts, mentors, and fellow participants, fostering collaboration and growth.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="relative p-10 bg-gradient-to-r from-blue-100 via-blue-50 to-green-100 rounded-lg shadow-xl"
        >
          <div className="absolute top-0 left-0 w-20 h-20 bg-coffee-600  text-coffee-50 font-bold text-3xl flex items-center justify-center rounded-full transform -translate-y-10 -translate-x-10 shadow-lg">
          🌟
          </div>
          <h3 className="text-3xl font-semibold mb-4 text-blue-600">Awards & Recognition</h3>
          <p className="text-coffee-700">
            Stand out with your innovation and creativity, and be recognized with exciting awards and prizes.
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
        className="text-center mt-20"
      >
        <a
          href="#"
          className="inline-block bg-green-600 text-coffee-50 px-8 py-4 rounded-lg text-lg font-semibold shadow-lg hover:bg-green-700 transition-all duration-300"
        >
          Register Now
        </a>
      </motion.div>
    </section>
  );
};

export default HackBrew;
