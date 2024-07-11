import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import './TestimonialWall.css';

const ImpactHeading = () => (
  <motion.h2 
    className="impact-heading"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
  >
    Brewing Success, One Story at a Time
    <motion.span 
      className="impact-subheading"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
    >
      Real Voices, Real Impact
    </motion.span>
  </motion.h2>
);

const TestimonialWall = () => {
  const testimonials = [
    { id: 1, text: "This program changed my career trajectory completely!", author: "Simran" },
    { id: 2, text: "I've never felt more empowered and confident in my skills.", author: "Anamika" },
    { id: 3, text: "The mentorship I received was invaluable. Truly life-changing.", author: "Drishya" },
    { id: 4, text: "From noob to pro, the journey was incredible.", author: "Anushree" },
    { id: 5, text: "The hands-on experience prepared me for real-world challenges.", author: "Harshita" },
  ]; 
  
  const scrollRef = useRef(null);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const element = scrollRef.current;
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          controls.start({ opacity: 1, scale: 1 });
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [controls]);

  return (
    <section className="testimonial-section" ref={scrollRef}>
      <ImpactHeading />
      <motion.div 
        className="testimonial-wall"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={controls}
        transition={{ duration: 0.5 }}
      >
        {testimonials.map((testimonial) => (
          <motion.div
            key={testimonial.id}
            className="testimonial-bubble"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: testimonial.id * 0.1 }}
            whileHover={{ boxShadow: "0 8px 25px rgba(0,0,0,0.2)" }}
          >
            <p>{testimonial.text}</p>
            <span className="author">- {testimonial.author}</span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default TestimonialWall;