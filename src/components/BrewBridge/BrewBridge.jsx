import React from 'react';
import { motion } from 'framer-motion';

const BrewBridge = () => {
  const features = [
    { icon: "🌉", title: "Bridge to Industry", description: "Connect directly with tech leaders and real-world projects." },
    { icon: "🧠", title: "Deep Dive Learning", description: "Immerse yourself in tech with our comprehensive curriculum." },
    { icon: "👥", title: "Peer Programming", description: "Collaborate with fellow developers on challenging projects." },
    { icon: "🏆", title: "Skill Challenges", description: "Regular coding challenges to sharpen your problem-solving skills." },
    { icon: "🎙️", title: "Tech Talks", description: "Engage with industry leaders in exclusive webinar sessions." },
    { icon: "🚀", title: "Launch Your Career", description: "Get career support and job placement assistance upon completion." },
  ];

  return (
    <div className="mt-20 min-h-screen bg-gradient-to-br from-coffee-100 to-blue-100 p-4 sm:p-8">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto"
      >
        <div className="relative overflow-hidden rounded-3xl shadow-2xl mb-12">
          <div className="absolute inset-0 bg-coffee-800 opacity-80"></div>
          <div className="relative z-10 p-8 sm:p-12 text-white">
            <motion.h1 
              className="text-4xl sm:text-6xl font-bold mb-4"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              BrewBridge
            </motion.h1>
            <motion.p
              className="text-xl sm:text-2xl mb-8"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              Bridging the gap between Tech Skills and industry demand.
            </motion.p>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <a 
                href="#" 
                className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300"
              >
                Join the Bridge
              </a>
            </motion.div>
          </div>
          <div className="absolute top-0 right-0 -mt-20 -mr-20">
            <motion.div 
              className="w-64 h-64 bg-coffee-400 rounded-full opacity-50"
              animate={{ scale: [1, 1.2, 1], rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            ></motion.div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * index, duration: 0.5 }}
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-coffee-800 mb-2">{feature.title}</h3>
              <p className="text-coffee-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
        >
          <a 
            href="#" 
            className="inline-block bg-gradient-to-r from-coffee-200 to-blue-200 text-black font-bold py-4 px-10 rounded-full text-xl shadow-lg hover:shadow-xl transition duration-300"
          >
            Start Your Journey
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default BrewBridge;