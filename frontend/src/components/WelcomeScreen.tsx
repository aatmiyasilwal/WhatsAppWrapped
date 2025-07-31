import React from 'react';
import { motion } from 'framer-motion';
import './WelcomeScreen.css';

interface WelcomeScreenProps {
  onSeeStats: () => void;
  showStats: boolean;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onSeeStats, showStats }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      y: -60,
      transition: {
        duration: 0.8,
        ease: [0.25, 1, 0.5, 1],
        staggerChildren: 0.1,
        staggerDirection: -1,
      },
    },
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 40,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.0,
        ease: [0.16, 1, 0.3, 1],
      },
    },
    exit: {
      opacity: 0,
      y: -40,
      transition: {
        duration: 0.6,
        ease: [0.25, 1, 0.5, 1],
      },
    },
  };

  const buttonVariants = {
    hidden: { 
      opacity: 0, 
      y: 40,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: [0.16, 1, 0.3, 1],
        delay: 0.3,
      },
    },
    exit: {
      opacity: 0,
      y: -40,
      scale: 0.9,
      transition: {
        duration: 0.6,
        ease: [0.25, 1, 0.5, 1],
      },
    },
    hover: {
      scale: 1.05,
      y: -2,
      transition: {
        duration: 0.3,
        ease: [0.16, 1, 0.3, 1],
      },
    },
    tap: {
      scale: 0.95,
      y: 0,
      transition: {
        duration: 0.15,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <div className="welcome-container">
      <motion.div
        className="welcome-content"
        variants={containerVariants}
        initial="hidden"
        animate={showStats ? "exit" : "visible"}
        exit="exit"
      >
        <motion.div className="welcome-header" variants={itemVariants}>
          <motion.h1 className="welcome-title">
            Welcome to your
          </motion.h1>
          <motion.h1 className="welcome-title-highlight">
            WhatsApp Wrapped
          </motion.h1>
        </motion.div>

        <motion.p className="welcome-subtitle" variants={itemVariants}>
          Discover your messaging patterns, favorite words, and chat insights
        </motion.p>

        <motion.button
          className="stats-button"
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
          onClick={onSeeStats}
        >
          See the stats
        </motion.button>
      </motion.div>

      {/* Background decorative elements */}
      <div className="background-decoration">
        <motion.div 
          className="decoration-circle circle-1"
          animate={{
            y: [0, -25, 0],
            opacity: [0.4, 0.7, 0.4],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: [0.16, 1, 0.3, 1],
          }}
        />
        <motion.div 
          className="decoration-circle circle-2"
          animate={{
            y: [0, 20, 0],
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: [0.16, 1, 0.3, 1],
            delay: 1.5,
          }}
        />
        <motion.div 
          className="decoration-circle circle-3"
          animate={{
            y: [0, -15, 0],
            opacity: [0.2, 0.5, 0.2],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: [0.16, 1, 0.3, 1],
            delay: 3,
          }}
        />
      </div>
    </div>
  );
};

export default WelcomeScreen;
