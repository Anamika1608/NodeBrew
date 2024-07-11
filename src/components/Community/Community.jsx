import React from 'react';
import { motion } from 'framer-motion';
import './Community.css';

const CommunitySection = () => {
  return (
    <section className="community-section">
      <div className="community-content">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="community-heading"
        >
          Join our Community
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="community-description"
        >
          We strive to bridge the gap in technology access and education for underrepresented communities, empowering them to achieve their goals. We would love to have you and help you build the future that you deserve.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="button-container"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="get-involved-button"
          >
            Get Involved
          </motion.button>
        </motion.div>
      </div>
      <div className="background-elements">
        <div className="circle circle-1"></div>
        <div className="circle circle-2"></div>
        <div className="circle circle-3"></div>
      </div>
    </section>
  );
};

export default CommunitySection;