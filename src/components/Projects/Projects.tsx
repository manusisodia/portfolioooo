import React, { useState, useEffect } from 'react';
import './projects.scss';
import LazyLoad from 'react-lazyload';
import AnimatedLettersFast from '@components/AnimatedLettersFast/AnimatedLettersFast';

const Project = () => {
  const [letterClass, setLetterClass] = useState('text-animate-fast');
  const nameArray = [...'02. My Projects'];

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-fast-hover');
    }, 4000);
  });
  return (
    <div className='project' id='projects'>
      <span className='sectiontag'>&lt;section&gt;</span>
      <h1 className='about__headingPrimary'>
        <AnimatedLettersFast letterClass={letterClass} strArray={nameArray} idx={15} />
      </h1>

      {/* ----------------------------------------- for desktops -------------------------- */}

      <LazyLoad once height={400}>
        <section className='project__section'>
          <div className='project__left'>
            <img className='project__img' src='\images\project1.png' />
          </div>
          <div className='project__right'>
            <h3 className='project__headingTertiary'>Featured Project</h3>
            <a href='https://manusisodia.pythonanywhere.com/' target='_blank' rel='noreferrer' className='project__headingSecondary'><h2>CipherVault</h2></a>
            <div className='project__descriptionContainer'>
              <p className='project__description'>
              CipherVault is a secure and user-friendly password management application built using Django and Bootstrap. It focuses on both cybersecurity and usability, providing a comprehensive solution for storing and managing user passwords.              </p>
              <div className='project__tags'> HTML &nbsp; CSS &nbsp; JavaScript &nbsp; Python &nbsp; Django &nbsp; BootStrap</div>
              <div className='project__icons'>
                <a href='https://github.com/manusisodia/CipherVault' target='_blank' rel='noreferrer' style={{ marginRight: '1.6rem' }}>
                  <svg className='project__icon'>
                    <use href='icons/symbol-defs.svg#icon-github' />
                  </svg>
                </a>
                <a href='https://manusisodia.pythonanywhere.com/' target='_blank' rel='noreferrer'>
                  <svg className='project__icon'>
                    <use href='icons/symbol-defs.svg#icon-external-link' />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>
      </LazyLoad>
      <LazyLoad once height={400}>
        <section className='project__section'>
          <div className='project__left1'>
            <h3 className='project__headingTertiary'>Featured Project</h3>
            <a href='https://sketchbook-lake.vercel.app/' target='_blank' rel='noreferrer' className='project__headingSecondary'><h2>Sketch Book</h2></a>
            <div className='project__descriptionContainer project__descriptionContainer1'>
              <p className='project__description'>
              "Sketch Book" is a dynamic drawing tool designed with Next.js, offering users a seamless platform to create illustrations, diagrams, and sketches. It provides an intuitive interface for users to express their ideas visually. Whether sketching out concepts, brainstorming, or illustrating, "Sketch It" empowers users to bring their ideas to life effortlessly.
                {' '}

              </p>
              <div className='project__tags'>
                H HTML &nbsp;
                CSS &nbsp; JavaScript &nbsp; Next Js &nbsp; Node Js &nbsp;Redux &nbsp; WebSockets &nbsp;
                {' '}

              </div>
              <div className='project__icons project__icons1'>
                <a href='https://github.com/manusisodia/Sketchbook' target='_blank' rel='noreferrer' style={{ marginRight: '1.6rem' }}>
                  <svg className='project__icon'>
                    <use href='icons/symbol-defs.svg#icon-github' />
                  </svg>
                </a>
                <a href='https://sketchbook-lake.vercel.app/' target='_blank' rel='noreferrer'>
                  <svg className='project__icon'>
                    <use href='icons/symbol-defs.svg#icon-external-link' />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className='project__right'>
            <img className='project__img' src='\images\project2.png' />
          </div>
        </section>
      </LazyLoad>
      <LazyLoad once height={400}>
        <section className='project__section project__section3'>
          <div className='project__left'>
            <img className='project__img' src='\images\project3.png' />
          </div>
          <div className='project__right'>
            <h3 className='project__headingTertiary'>Featured Project</h3>
            <a href='https://cpshorts.vercel.app/' target='_blank' rel='noreferrer' className='project__headingSecondary'><h2>CP Shorts</h2></a>
            <div className='project__descriptionContainer'>
              <p className='project__description'>
              CP Shorts takes your parameters like problem rating range and problem tags into consideration and utilizes the Codeforces API to query for problems. Upon fetching all the problems which satisfy the parameters, It will randomly choose problems from the list.
                
              </p>
              <div className='project__tags'> HTML &nbsp; CSS &nbsp; JavaScript &nbsp; Next Js &nbsp;</div>
              <div className='project__icons'>
                <a href='https://github.com/manusisodia/cpshorts' target='_blank' rel='noreferrer' style={{ marginRight: '1.6rem' }}>
                  <svg className='project__icon'>
                    <use href='icons/symbol-defs.svg#icon-github' />
                  </svg>
                </a>
                <a href='https://cpshorts.vercel.app/' target='_blank' rel='noreferrer'>
                  <svg className='project__icon'>
                    <use href='icons/symbol-defs.svg#icon-external-link' />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>
      </LazyLoad>

      {/* --------------------------------------------------- for Mobiles ----------------------------------------------------------------- */}

      <ul className='projectResp__list'>
        <li className='projectResp__items projectResp__items1'>
          <div className='projectResp__card'>
            <div className='projectResp__cardTop'>
              <svg className='projectResp__cardFolder'>
                <use href='icons/symbol-defs.svg#icon-folder' />
              </svg>
              <div className='projectResp__cardLink'>
                <a href='https://github.com/manusisodia/CipherVault' target='_blank' rel='noreferrer' style={{ marginRight: '1.6rem' }}>
                  <svg className='projectResp__icon'>
                    <use href='icons/symbol-defs.svg#icon-github' />
                  </svg>
                </a>
                <a href='https://manusisodia.pythonanywhere.com/' target='_blank' rel='noreferrer'>
                  <svg className='projectResp__icon'>
                    <use href='icons/symbol-defs.svg#icon-external-link' />
                  </svg>
                </a>
              </div>
            </div>
            <div className='projectResp__cardBody'>
              <div className='projectResp__cardBodyHeading'>Master Vault</div>
              <p className='projectResp__cardBodyDescription'>
              Master Vault is a secure and user-friendly password management application built using Django and Bootstrap. It focuses on both cybersecurity and usability, providing a comprehensive solution for storing and managing user passwords.              </p>
              {' '}

            </div>
            <div className='projectResp__cardFooter'>
              <div className='projectResp__tags'> HTML &nbsp; CSS &nbsp; JavaScript &nbsp; Python &nbsp; Django &nbsp; BootStrap</div>
            </div>
          </div>
        </li>
        <li className='projectResp__items  projectResp__items2'>
          <div className='projectResp__card'>
            <div className='projectResp__cardTop'>
              <svg className='projectResp__cardFolder'>
                <use href='icons/symbol-defs.svg#icon-folder' />
              </svg>
              <div className='projectResp__cardLink'>
                <a href='https://github.com/manusisodia/Sketchbook' target='_blank' rel='noreferrer' style={{ marginRight: '1.6rem' }}>
                  <svg className='projectResp__icon'>
                    <use href='icons/symbol-defs.svg#icon-github' />
                  </svg>
                </a>
                <a href='https://sketchbook-lake.vercel.app/' target='_blank' rel='noreferrer'>
                  <svg className='projectResp__icon'>
                    <use href='icons/symbol-defs.svg#icon-external-link' />
                  </svg>
                </a>
              </div>
            </div>
            <div className='projectResp__cardBody'>
              <div className='projectResp__cardBodyHeading'>Sketch Book</div>
              <p className='projectResp__cardBodyDescription'>
              "Sketch Book" is a dynamic drawing tool designed with Next.js,Canvas API, offering users a seamless platform to create illustrations, diagrams, and sketches. It provides an intuitive interface for users to express their ideas visually. Whether sketching out concepts, brainstorming, or illustrating, "Sketch It" empowers users to bring their ideas to life effortlessly.

              </p>
            </div>
            <div className='projectResp__cardFooter'>
              <div className='projectResp__tags'>
                {' '}
                HTML &nbsp;
                CSS &nbsp; JavaScript &nbsp; Next Js &nbsp; Node Js &nbsp;Redux &nbsp; WebSockets &nbsp;

              </div>
            </div>
          </div>
        </li>
        <li className='projectResp__items projectResp__items3'>
          <div className='projectResp__card'>
            <div className='projectResp__cardTop'>
              <svg className='projectResp__cardFolder'>
                <use href='icons/symbol-defs.svg#icon-folder' />
              </svg>
              <div className='projectResp__cardLink'>
                <a href='https://cpshorts.vercel.app/' target='_blank' rel='noreferrer' style={{ marginRight: '1.6rem' }}>
                  <svg className='projectResp__icon'>
                    <use href='icons/symbol-defs.svg#icon-github' />
                  </svg>
                </a>
                <a href='https://github.com/manusisodia/cpshorts' target='_blank' rel='noreferrer'>
                  <svg className='projectResp__icon'>
                    <use href='icons/symbol-defs.svg#icon-codepen' />
                  </svg>
                </a>
              </div>
            </div>
            <div className='projectResp__cardBody'>
              <div className='projectResp__cardBodyHeading'>CP Shorts</div>
              <p className='projectResp__cardBodyDescription'>
              CP Shorts takes your parameters like problem rating range and problem tags into consideration and utilizes the Codeforces API to query for problems. Upon fetching all the problems which satisfy the parameters, It will randomly choose problems from the list.
              

              </p>
            </div>
            <div className='projectResp__cardFooter'>
              <div className='projectResp__tags'> HTML &nbsp; CSS &nbsp; JavaScript &nbsp; Next Js &nbsp; </div>
            </div>
          </div>
        </li>
      </ul>

      <span className='sectiontag'>&lt;/section&gt;</span>

    </div>
  );
};

export default Project;
