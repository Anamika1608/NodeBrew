import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsersCog, faChalkboardTeacher, faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import './Feature.css';

const FeatureCard = ({ icon, title, content }) => {
  return (
    <motion.div 
      className="feature-card"
      whileHover="hover"
      initial="rest"
      animate="rest"
    >
      <motion.div className="card-content">
        <motion.div 
          className="icon-container"
          variants={{
            hover: { y: -30, scale: 0.9 }, 
            rest: { y: 0, scale: 1 }
          }}
        >
          <motion.div
            variants={{
              hover: { rotateY: 180 },
              rest: { rotateY: 0 }
            }}
            transition={{ duration: 0.3 }}
          >
            <FontAwesomeIcon icon={icon} size="3x" />
          </motion.div>
        </motion.div>
        <motion.h3
          variants={{
            hover: { y: -20 }, 
            rest: { y: 0 }
          }}
        >
          {title}
        </motion.h3>
        <motion.div 
          className="card-details"
          variants={{
            hover: { opacity: 1, y: 0 },
            rest: { opacity: 0, y: 50 }
          }}
          transition={{ duration: 0.3 }}
        >
          {content}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

const FeatureDisplay = () => {
  const features = [
    {
      icon: faUsersCog,
      title: "Learn with Peers & Mentors",
      content: "Connect with like-minded individuals and industry experts to accelerate your growth."
    },
    {
      icon: faChalkboardTeacher,
      title: "Attend Technical Sessions",
      content: "Immerse yourself in cutting-edge topics and expand your technical knowledge."
    },
    { 
      icon: faLaptopCode,
      title: "Hands-On Programs",
      content: (
        <>
          <p> Gain practical skills through guided, interactive sessions and Hackathon</p>
        </>
      )
    }
  ];

  return (
    <div className="feature-container">
      {features.map((feature, index) => (
        <FeatureCard
          key={index}
          icon={feature.icon}
          title={feature.title}
          content={feature.content}
        />
      ))}
    </div>
  );
};

export default FeatureDisplay;