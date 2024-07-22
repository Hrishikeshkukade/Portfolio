import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const About = () => {
  return (
    <Box
      id="about"
      style={{
        backgroundColor: "#111",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '10%', // Add padding to create some space
        textAlign: 'center', // Center align text
      }}
    >
      <Container maxWidth="md"> {/* Restrict the container width */}
        <Typography 
          variant="h3" 
          gutterBottom 
          style={{ 
            fontWeight: 'bold', 
            marginBottom: '1rem', // Add margin bottom for spacing
            borderBottom: '3px solid #fff', // Add bottom border for underline effect
            display: 'inline-block', // Make underline fit the text width
          }}
        >
          About Me
        </Typography>
        <Typography 
          variant="h5" 
          paragraph 
          style={{
            margin: '20px 0',
            fontSize: '1.2rem',
            lineHeight: '1.6',
            textAlign: 'justify', // Justify text for better readability
          }}
        >
          I am a passionate Frontend Developer with experience in creating dynamic and user-friendly web applications using modern frontend technologies. My skill set includes HTML, CSS, JavaScript, React.js, Redux, and Material-UI. I am dedicated to continuous learning and keeping up with the latest trends in web development to deliver the best possible solutions.
        </Typography>
        <Typography 
          variant="h5" 
          paragraph 
          style={{
            margin: '20px 0',
            fontSize: '1.2rem',
            lineHeight: '1.6',
            textAlign: 'justify', // Justify text for better readability
          }}
        >
          I have worked on various projects that have honed my skills in responsive design, component-based architecture, and state management. I am committed to writing clean, maintainable code and creating seamless user experiences.
        </Typography>
      </Container>
    </Box>
  );
};

export default About;

