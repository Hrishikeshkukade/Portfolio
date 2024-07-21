import React, { useState, useEffect } from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import Typical from 'react-typical';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const Home = () => {
  const [showFrontend, setShowFrontend] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const [showButtons, setShowButtons] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setShowFrontend(true);
    }, 2000);

    const timer2 = setTimeout(() => {
      setShowInfo(true);
    }, 4000);

    const timer3 = setTimeout(() => {
      setShowButtons(true);
    }, 11000);

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
      <Container maxWidth="sm">
        <Typography
          variant="h2"
          gutterBottom
          sx={{
            fontWeight: 'bold',
            fontSize: { xs: '1.5rem', sm: '2.5rem', md: '3.5rem', lg: '4rem' }, // Responsive font sizes
          }}
        >
          <Typical
            steps={['Hi, I\'m Hrishikesh Kukade!', 1000]}
            wrapper="span"
            style={{ whiteSpace: 'pre', display: 'inline-block' }}
          />
        </Typography>
        {showFrontend && (
          <Typography
            variant="h4"
            gutterBottom
            sx={{
              fontSize: { xs: '1rem', sm: '1.5rem', md: '2rem', lg: '2.5rem' }, // Responsive font sizes
            }}
          >
            <Typical
              steps={['Frontend Developer', 1000]}
              wrapper="span"
              style={{ whiteSpace: 'pre', display: 'inline-block' }}
            />
          </Typography>
        )}
        {showInfo && (
          <Typography
            variant="h6"
            paragraph
            sx={{
              fontSize: { xs: '0.75rem', sm: '1rem', md: '1.25rem', lg: '1.5rem' }, // Responsive font sizes
            }}
          >
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
                padding: { xs: '8px 16px', sm: '10px 20px', md: '12px 24px' }, // Responsive padding
                fontSize: { xs: '0.875rem', sm: '1rem', md: '1.1rem' }, // Responsive font sizes
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
                padding: { xs: '6px 12px', sm: '8px 16px', md: '10px 20px' }, // Responsive padding
                fontSize: { xs: '0.75rem', sm: '0.875rem', md: '1rem' }, // Responsive font sizes
                display: 'flex',
                alignItems: 'center',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                },
              }}
              startIcon={<DownloadIcon sx={{ fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' } }} />} // Responsive icon size
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














