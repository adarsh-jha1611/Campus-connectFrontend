import React from 'react';
import home from '../../assets/images/home.png';
import './home.css';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom'; // Import useNavigate instead of useHistory



const Home = () => {
  const highlightStyle = { color: '#5271FF' };
  const buttonStyle = { backgroundColor: '#5271FF', color: '#fff' };
  const navigate = useNavigate();;

  return (
    <>
    <section>
    <div className="hero__content">
      <div className="hero__text">
        <h1>
          Welcome to Campus.<span style={highlightStyle}>Connect</span>
        </h1>
        <p>
          Campus Connect is a platform designed to connect students, faculty, and events in an educational institution. It aims to provide a centralized hub for information sharing, collaboration, and engagement within the campus community.
        </p>
        <p>
          With Campus Connect, students can easily access their course materials, communicate with their peers and instructors, and stay updated on campus events and announcements. Faculty members can use the platform to manage their courses, interact with students, and share important resources.
        </p>
        <p>
          In addition, Campus Connect offers a comprehensive events section where students and faculty can discover and participate in various campus activities, workshops, seminars, and more.
        </p>
        <p>
          We hope that Campus Connect enhances the learning experience and fosters a sense of community within your institution. Enjoy exploring the platform and make the most out of your campus life!
        </p>
      </div>
      <div className="hero__image">
        <img src={home} alt="Campus Connect" />
      </div>

    
    </div>
    </section>
     <section>
     <div className='button__container'>
   <h2>
     Let's take a look into the events!
   </h2>
   <Button variant="contained"  style={buttonStyle} onClick={navigate('/events')}>Events</Button>
 </div>
   </section>
   
   </>
   
  );
};

export default Home;
