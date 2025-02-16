import AnimatedLettersFast from '@components/AnimatedLettersFast/AnimatedLettersFast';
import React, { useState, useEffect } from 'react';
import './otherProjects.scss';

const OtherProjects = () => {
  const [letterClass, setLetterClass] = useState('text-animate-fast');
  const nameArray = [...'Coding Profiles '];

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-fast-hover');
    }, 4000);
  });

  return (
    <div className='other' id='other'>
      <span className='sectiontag'>&lt;section&gt;</span>
      <div className='other__container'>
        <h1 className='other__headingPrimary'>
          <AnimatedLettersFast letterClass={letterClass} strArray={nameArray} idx={15} />
        </h1>
      </div>

      <ul className='other__list'>
        <li className='other__items'>
          <div className='other__card'>
            <div className='other__cardTop'>

              <div className='other__cardLink'>

              </div>
            </div>
            <div className='other__cardBody'>
              <div className='other__cardBodyHeading'>LeetCode</div>
              <p className='other__cardBodyDescription'>

                Profile :<a href='https://leetcode.com/manusisodia5/' className='pl'>manusisodia5</a>
                <br />
                Rating :1868+  |  KNIGHT
                <br />
                Solved Problems: 1000+
                <br />
                Some Good Ranks in contest:
                <br />
                <ul className='li'>
                  <li> Global rank of 2119 in leetcode weekly 356</li>
                  <li>Global rank of 1644 in leetcode weekly 367</li>
                  <li>Global rank of 979  in leetcode biweekly 116</li>
                  <li>Global rank of 1958 in leetcode biweekly 117</li>
                </ul>
              </p>
            </div>
            <div className='other__cardFooter'>
              <div className='other__tags'> </div>
            </div>
          </div>
        </li>
        <li className='other__items'>
          <div className='other__card'>
            
            <div className='other__cardBody'>
              <div className='other__cardBodyHeading'>CodeForces</div>
              <p className='other__cardBodyDescription'>
              Profile :<a href='https://codeforces.com/profile/ThetechyGuy' className='pl'>ThetechyGuy</a>
                <br />
                Rating :1530  |  SPECIALIST
                <br />
                Solved Problems: 500+
                <br />
                Some Good Ranks in contest:
                <br />
                <ul className='li'>
                  <li> Global rank of 1110 in codeforces educational round 172</li>
                  <li>Global rank of 863 in codeforces round 1004</li>
                  
                </ul>

              </p>
            </div>
            
          </div>
        </li>
        <li className='other__items'>
          <div className='other__card'>
            
            <div className='other__cardBody'>
              <div className='other__cardBodyHeading'>HackerRank</div>
              <p className='other__cardBodyDescription'>
                <br/>
                
              Profile :<a href='https://www.hackerrank.com/manusisodia773?hr_r=1' className='pl'>manusisodia773</a>
                <br />
                <br/>
                Rating :5* at C++ and 4* at Problem Solving
                <br />
                <br/>
                Solved Problems: 100+
                <br />
                <br/>
              </p>
            </div>
           
          </div>
        </li>
        <li className='other__items'>
          <div className='other__card'>
           
            <div className='other__cardBody'>
              <div className='other__cardBodyHeading'>Geek For Geeks</div>
              <p className='other__cardBodyDescription'>
                <br />
                <br />
                
              Profile :<a href='https://auth.geeksforgeeks.org/user/manusisodia773/' className='pl'>manusisodia773</a>
                
                <br />
                <br />
                Solved Problems: 100+
              </p>
            </div>
            
          </div>
        </li>
        
      </ul>
      <span className='sectiontag'>&lt;/section&gt;</span>
    </div>
  );
};

export default OtherProjects;
