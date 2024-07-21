import React, { useState, useEffect } from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import Typical from 'react-typical';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react'; // Import keyframes from @emotion/react

const Home = () => {
  const [showFrontend, setShowFrontend] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const [showButtons, setShowButtons] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setShowFrontend(true);
    }, 2000); // Delay before showing the second line

    const timer2 = setTimeout(() => {
      setShowInfo(true);
    }, 4000); // Delay before showing the third line

    const timer3 = setTimeout(() => {
      setShowButtons(true);
    }, 11000); // Delay before showing the buttons

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  const riseUp = keyframes`
    from {
      opacity: 0;
      transform: translateY(50px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  `;

  const AnimatedButton = styled(Button)`
    animation: ${riseUp} 2s ease-out forwards;
  `;

  return (
    <Box
      style={{
        backgroundColor: "#000",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingLeft: '10%', 
      }}
    >
      <Container maxWidth="sm"> {/* Restrict the container width */}
        <Typography variant="h2" gutterBottom style={{ fontWeight: 'bold' }}>
          <Typical
            steps={['Hi, I\'m Hrishikesh Kukade!', 1000]}
            wrapper="span"
            style={{ whiteSpace: 'pre', display: 'inline-block',  }}
          />
        </Typography>
        {showFrontend && (
          <Typography variant="h4" gutterBottom>
            <Typical
              steps={['Frontend Developer', 1000]}
              wrapper="span"
              style={{ whiteSpace: 'pre', display: 'inline-block' }}
            />
          </Typography>
        )}
        {showInfo && (
          <Typography variant="h6" paragraph>
            <Typical
              steps={['I specialize in creating interactive, user-friendly web applications using modern frontend technologies.', 1000]}
              wrapper="span"
              style={{ whiteSpace: 'pre', display: 'inline-block' }}
            />
          </Typography>
        )}
        {showButtons && (
          <Box display="flex" flexDirection="row" justifyContent="center">
            <AnimatedButton
              variant="contained"
              sx={{
                backgroundColor: 'white',
                color: 'black',
                marginRight: '10px',
                borderRadius: 0, 
                padding: '12px 24px', 
                fontSize: '1.1rem', 
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.9)', 
                },
              }}
            >
              Get Started
            </AnimatedButton>
            <AnimatedButton
              variant="contained"
              sx={{
                backgroundColor: 'transparent', 
                color: 'white', 
                padding: '10px 20px', 
                fontSize: '1rem', 
                display: 'flex',
                alignItems: 'center',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                },
              }}
              startIcon={<DownloadIcon style={{ fontSize: '2rem' }} />} 
            >
              Download Resume
            </AnimatedButton>
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default Home;













