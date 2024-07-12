import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const NewsletterSection = styled.section`
  padding: 60px 20px;
  overflow: hidden;
  position: relative;
  margin-top : 100px;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
`;

const Content = styled.div`
  max-width: 600px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
  text-align: center;
`;

const Heading = styled(motion.h2)`
  font-size: 2.2rem;
  margin-bottom: 20px;
  color: #2c3e50;
  font-weight: bold;
`;

const Description = styled(motion.p)`
  font-size: 1.1rem;
  margin-bottom: 30px;
  color: #34495e;
`;

const Form = styled(motion.form)`
  display: flex;
  gap: 10px;
  justify-content: center;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;


const Input = styled(motion.input)`
  flex-grow: 1;
  max-width: 300px;
  padding: 12px 15px;
  font-size: 1rem;
  border: 2px solid #3498db;
  border-radius: 25px;
  outline: none;
  background: white;
  color: #2c3e50;
  &::placeholder {
    color: #95a5a6;
  }
`;

const SubmitButton = styled(motion.button)`
  padding: 12px 25px;
  font-size: 1.1rem;
  color: black;
  font-weight-400;
  background: #a0d9ef;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  
`;

const FloatingShape = styled(motion.div)`
  position: absolute;
  background-color: rgba(52, 152, 219, 0.1);
  border-radius: 50%;
`;

const MadeBy = styled(motion.p)`
  font-size: 1rem;
  color: #34495e;
  margin-top: 15px;
`;

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted email:', email);
    setEmail('');
  };

  return (
    <NewsletterSection>
      <Content>
        <Heading
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Get to know what we're doing, first
        </Heading>
        <Description
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Subscribe to our newsletter to stay updated with our latest events and news.
        </Description>
        <Form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Input
            type="email"
            placeholder="Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            whileFocus={{ scale: 1.05 }}
          />
          <SubmitButton
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Subscribe
          </SubmitButton>
        </Form>
        <MadeBy
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          Made with ❤️ by Anamika
        </MadeBy>
      </Content>
    </NewsletterSection>
  );
};

export default Newsletter;