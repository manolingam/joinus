import React, { useContext } from 'react';
import { motion } from 'framer-motion';

import { AppContext } from '../context/AppContext';

import rg__crest from '../assets/rg__crest.png';

const HeadsUp = () => {
  const context = useContext(AppContext);
  return (
    <div className='grid-container'>
      <div></div>
      <div className='headsup-container'>
        <motion.img
          id='rg-crest'
          src={rg__crest}
          alt='raidguild crest'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        />

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          Apply to Join RaidGuild
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          Humans wanted for hazardous journey into the ether. Smol wages to
          start, but a lifetime of rewards. Bitter cold winters to build,
          glorious summers to reap. Long months of navigating the dark forest.
          Constant danger lurking in the mempool. Safe return to normalcy
          doubtful. Great honor and recognition in case of success.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          Your path is marked by this first command - fill this form to apply to
          RaidGuild firsthand. Pledges are studied by our counsel forth. Last,
          not least, we'll invite you to join a training cohort in due course.
        </motion.p>
      </div>
      <div></div>
      <motion.button
        id='next-stage-button'
        initial={{ x: '100vw' }}
        animate={{ x: 0 }}
        transition={{ delay: 1.3 }}
        onClick={() => {
          context.updateStage('next');
        }}
      >
        Start
      </motion.button>
    </div>
  );
};

export default HeadsUp;
