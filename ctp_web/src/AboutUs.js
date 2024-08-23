import React, { useState } from 'react';
import './AboutUs.css';
import pic1 from './pic1.png';
import pic2 from './pic2.png';
import pic3 from './pic3.png';
import pic4 from './pic4.jpeg';

function AboutUs() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const members = [
    { 
      name: 'Pretam Chowdhury', 
      role: 'Full Stack Developer', 
      image: pic1, 
      bio: 'Hi, I’m Pretam Chowdhury, a rising senior at CUNY City College. For this hackathon, I took on the role of a Full Stack Developer, where I handled both the front-end and back-end of our project. On the front-end, I worked with React to create a user-friendly interface, making sure everything looked good and was easy to use. On the back-end, I set up the server using Node.js and Express, and managed our data with SQL. This experience let me connect both the design and functionality of the project, ensuring everything worked together smoothly.' 
    },
    { 
      name: 'Adam Albaghali', 
      role: 'Front-End Developer', 
      image: pic2, 
      bio: 'Hi, I’m Adam, and I’m a senior at Brooklyn College. This is my second hackathon, and I’m really excited to work with you all. For this project, I took on the role of front-end developer, where I was responsible for creating a visually appealing and user-friendly interface. I worked with various front-end technologies to ensure that our design was both functional and engaging. This role allowed me to contribute significantly to the overall user experience, ensuring that our ideas were effectively translated into an interactive and aesthetically pleasing interface.' 
    },
    { 
      name: 'Gabriel Menkoff', 
      role: 'Back-End Developer', 
      image: pic3, 
      bio: 'Hi everyone! I’m Gabriel, a senior at Brooklyn College, and I am mainly focused on learning data science. This is my third hackathon. For this event, I primarily worked on the backend, developing my skills with SQL, Node.js, Express, and related tools to handle our data management. I was responsible for setting up the backend server files as well as setting up HTTP requests so the survey (front end) could seamlessly communicate to the server, and so that on the Analysis page we could easily get all the data on the server, which I then manipulated to tell the user the significance of survey results.' 
    },
    { 
      name: 'Carlo Ace Sagad', 
      role: 'Front-End Developer', 
      image: pic4, 
      bio: 'Hi everyone! I’m Carlo Ace Sagad, a senior Computer Science student at CUNY Queens College, specializing in Web Development. This is my first hackathon, and I’m excited to be here. For this project, I’m focusing on the front end, where I’m working on refining the CSS to ensure a polished and user-friendly interface. My goal is to enhance the overall design and functionality of our application, making sure everything looks great and operates smoothly.' 
    }
  ];

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div>
      {/* Bootstrap CSS */}
      <link
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
        rel="stylesheet"
      />

      {/* Custom Styles */}
      <style>
        {`
          .nav-color {
            background: #73937E;
          }
          body {
            background: #fcfefe;
          }
          .nav-link {
            color: aliceblue;
          }
          .custom-border-top {
            border-top: 0.5px solid #4c4b4b; /* Change to your desired color */
          }
          .footer-color {
            background: #f76b8a;
          }
        `}
      </style>

      {/* Nav Bar */}
      <section id="Header" className="nav-color fixed-top">
        <div className="container">
          <header className="d-flex justify-content-center py-3">
            <ul className="nav nav-pills">
              <li className="nav-item">
                <a href="/" className="nav-link">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="/discussion" className="nav-link">
                  Discussion
                </a>
              </li>
              <li className="nav-item">
                <a href="/about" className="nav-link active">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a href="/survey" className="nav-link">
                  Survey
                </a>
              </li>
              <a href="/analysis" className="nav-link">
                  Analysis
                </a>
            </ul>
          </header>
        </div>
      </section>

      <div className="about-us" style={{ marginTop: '80px' }}>
        <h1>✨Meet the Members!✨</h1>
        {members.map((member, index) => (
          <div 
            key={index} 
            className={`about-us-item ${expandedIndex === index ? 'expanded' : ''}`}
            onClick={() => toggleExpand(index)}
          >
            <img src={member.image} alt={member.name} className="about-us-image" />
            <div className="about-us-text">
              <h2>{member.name}</h2>
              <p>{member.role}</p>
              {expandedIndex === index && <p className="about-us-bio">{member.bio}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AboutUs;
