import React from 'react';
import './main2.css';
import codechef from './images/codechef1.png';
import github from './images/github.png';
import linked_in from './images/linked_in.png';
import { motion } from 'framer-motion';
import leetcodes from './images/leetcodes.png';
import profileImg from './images/image.png'; 
import './index.css';

const Main = () => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate="visible"
      transition={{
        duration: 0.6,
        delay: 0.2,
      }}
      className="Main"
      id="mainy"
    >
      <div className="main_left">
        <h3 className="it_is_me">Hey! It's Me</h3>
        <h2 className="names">Vraj Patel</h2>
        <p className="i_am_a">
          I am a&nbsp;<span className="typewriter"></span>
        </p>

        <div className="flex1">
          <p className="follow_me">follow me: </p>
          <div className="logos">
            <a href="https://www.codechef.com/users/gaggle_farm_84"
            target="_blank"
            rel="noreferrer"
            >
            <img src={codechef} alt="" />
            </a>
            <a
              href="https://github.com/VRAJPATEL-07"
              target="_blank"
              rel="noreferrer"
            >
              <img src={github} alt="" />
            </a>
            <a
              href="https://www.linkedin.com/in/vraj-patel-056081294/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={linked_in} alt="" />
            </a>
            <a
              href="https://leetcode.com/u/23dit056/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={leetcodes} alt="" />
            </a>
          </div>
        </div>
        <div className="flex1">
        <a href="mailto:vrajpatel21055@example.com?subject=Let's Connect&body=Hi Vraj, I saw your portfolio and wanted to reach out!">
        <button className="buttonc">E-Mail Me</button>
        </a>

          <button
            onClick={() =>
              window.open('https://drive.google.com/file/d/1mWIwOJOhjFxdLpMh6465kvRUxe_xzTdk/view?usp=sharing', '_blank')
            }
            className="buttonb"
          >
            Resume
          </button>
        </div>
      </div>
      <div className="right_main">
      <img
        className="profile_image_square"
        src={profileImg}
        alt="Vraj Patel"
      />
      </div>

    </motion.div>
  );
};

export default Main;
