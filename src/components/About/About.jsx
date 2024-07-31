import React, { useState } from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const [activeSection, setActiveSection] = useState(0);

  const sections = [
    {
      title: "Our Blend",
      content: "We mix passion, skills, and opportunity to create a perfect brew for women in tech.",
      icon: "☕"
    },
    {
      title: "Tech Flavors",
      content: "From coding sprints to tech talks, we serve a rich menu of hands-on experiences.",
      icon: "🖥️"
    },
    {
      title: "Community Perks",
      content: "Join a vibrant network of mentors and peers, your personal tech support system.",
      icon: "🤝"
    }
  ];

  return (
    <div className="mt-20 bg-gradient-to-br from-amber-50 via-blue-50 to-amber-100 min-h-screen p-8">
      <motion.h1 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-5xl font-bold text-coffee-800 mb-12 text-center"
      >
        Brewing Tech Opportunities
      </motion.h1>
      
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              className={`bg-white rounded-lg shadow-xl p-6 cursor-pointer ${activeSection === index ? 'ring-4 ring-coffee-300' : ''}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveSection(index)}
            >
              <div className="text-4xl mb-4">{section.icon}</div>
              <h3 className="text-xl font-semibold text-coffee-700 mb-2">{section.title}</h3>
              <p className="text-coffee-600">{section.content}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          key={activeSection}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-lg shadow-xl p-8 mb-12"
        >
          <h2 className="text-3xl font-bold text-coffee-800 mb-4">{sections[activeSection].title}</h2>
          <p className="text-coffee-700 text-lg leading-relaxed">{sections[activeSection].content}</p>
        </motion.div>

        <div className="text-center">
          <motion.a
            href="#"
            className="inline-block bg-gradient-to-r from-coffee-600 to-coffee-400 text-white font-semibold py-3 px-8 rounded-full text-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            animate={{
              boxShadow: [
                "0 0 0 0 rgba(149, 120, 98, 0.7)",
                "0 0 0 10px rgba(149, 120, 98, 0)",
                "0 0 0 0 rgba(149, 120, 98, 0)"
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "loop"
            }}
          >
            Pour Yourself Into Tech
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default About;