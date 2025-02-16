import React, { useEffect, useState } from 'react';
import AnimatedLettersFast from '../AnimatedLettersFast/AnimatedLettersFast';
import './about.scss';

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate-fast');
  const nameArray = [...'01. About Me'];

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-fast-hover');
    }, 4000);
  });
  return (
    <div className='about' id='about'>
      <div className='about__left'>
        <span className='sectiontag'>&lt;section&gt;</span>
        <h1 className='about__headingPrimary'>
          <AnimatedLettersFast letterClass={letterClass} strArray={nameArray} idx={15} />
        </h1>
        <div className='about__description'>
          Hello! My name is
          {' '}
          <span className='about__link'>Manu&nbsp;Sisodia</span>
          {' '}
          and I’m a Full-Stack Developer located in India and i have a serious passion for Compuer Science, Data Structure and Algorithms, Web Devlopment.
          {/* <br />
          <br /> */}
          {' '}
          Well-organised person, problem solver, focused student at
          {' '}
          <a href='https://nitrr.ac.in/' target='_blank' rel='noreferrer' className='intro__link'>National Institute Of Technology, Raipur</a>
          {' '}
          with high attention to detail. Fan of Gaming esports, outdoor activities, TV series and Japanese anime.
          <br />
          <br />
          Here are the few technologies that I&apos;have been working recently:
          {' '}
          <br />
          <ul className='about__skillsList'>
            <li className='about__skillsItems'>HTML and CSS</li>
            <li className='about__skillsItems'>Javascript</li>
            <li className='about__skillsItems'>Python</li>
            <li className='about__skillsItems'>Scss / Sass</li>
            <li className='about__skillsItems'>Nodejs</li>
            <li className='about__skillsItems'>Expressjs</li>
            <li className='about__skillsItems'>React.js & Redux</li>
            <li className='about__skillsItems'>Django</li>
            <li className='about__skillsItems'>Next.js</li>
            <li className='about__skillsItems'>Web Sockets</li>
            <li className='about__skillsItems'>SQL</li>
            <li className='about__skillsItems'>DSA</li>
            <li className='about__skillsItems'>Bootstrap</li>
            <li className='about__skillsItems'>TailWind</li>
            <li className='about__skillsItems'>TypeScript</li>
          </ul>
        </div>
        <span className='sectiontag'>&lt;/section&gt;</span>
      </div>
      <div className='about__right'>
        <div className='stage-cube-cont'>
          <div className='cubespinner'>
            <div className='face1'>
              <svg className='about__icon'>
                <use href='icons/symbol-defs.svg#icon-python' />
              </svg>
            </div>
            <div className='face2'>
              <svg className='about__icon'>
                <use href='icons/symbol-defs.svg#icon-css3' />
              </svg>
            </div>
            <div className='face3'>
              <svg className='about__icon'>
                <use href='icons/symbol-defs.svg#icon-javascript' />
              </svg>
            </div>
            <div className='face4'>
              <svg className='about__icon'>
                <use href='icons/symbol-defs.svg#icon-mongodb' />
              </svg>
            </div>
            <div className='face5'>
              <svg className='about__icon'>
                <use href='icons/symbol-defs.svg#icon-node-dot-js' />
              </svg>
            </div>
            <div className='face6'>
              <svg className='about__icon'>
                <use href='icons/symbol-defs.svg#icon-react' />
              </svg>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;
