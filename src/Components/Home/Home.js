import React, { useRef, useState, useEffect } from "react";
import { Container, Typography, Button, Box } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import Typed from "typed.js";

const Home = () => {
  const [showFrontend, setShowFrontend] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const [showButtons, setShowButtons] = useState(false);
  const typedRef1 = useRef(null);
  const typedRef2 = useRef(null);
  const typedRef3 = useRef(null);

  useEffect(() => {
    const options1 = {
      strings: ["Hi, I'm Hrishikesh Kukade!"],
      typeSpeed: 50,
      showCursor: true,
      onComplete: () => {
        typedRef1.current.nextElementSibling.style.display = 'none'; // Hide cursor after typing
        setShowFrontend(true);
      }
    };

    const typed1 = new Typed(typedRef1.current, options1);

    return () => {
      typed1.destroy();
    };
  }, []);

  useEffect(() => {
    if (showFrontend) {
      const options2 = {
        strings: ["Frontend Developer"],
        typeSpeed: 50,
        showCursor: true,
        onComplete: () => {
          typedRef2.current.nextElementSibling.style.display = 'none'; // Hide cursor after typing
          setShowInfo(true);
        }
      };

      const typed2 = new Typed(typedRef2.current, options2);

      return () => {
        typed2.destroy();
      };
    }
  }, [showFrontend]);

  useEffect(() => {
    if (showInfo) {
      const options3 = {
        strings: ["I specialize in creating interactive, user-friendly web applications using modern frontend technologies."],
        typeSpeed: 50,
        showCursor: true,
        onComplete: () => {
          typedRef3.current.nextElementSibling.style.display = 'none'; // Hide cursor after typing
          setTimeout(() => setShowButtons(true), 1000); // Show buttons after a delay
        }
      };

      const typed3 = new Typed(typedRef3.current, options3);

      return () => {
        typed3.destroy();
      };
    }
  }, [showInfo]);

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

  const backgroundAnimation = keyframes`
    0% {
      background-color: #000000; /* Black */
    }
    50% {
      background-color: #000002; /* Very subtle violet */
    }
    100% {
      background-color: #000000; /* Black */
    }
  `;

  const AnimatedButton = styled(Button)`
    animation: ${riseUp} 2s ease-out forwards;
  `;

  return (
    <Box
      id="home"
      sx={{
        backgroundColor: "#000",
        animation: `${backgroundAnimation} 15s ease infinite`,
        height: "100vh",
        color: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        paddingLeft: "10%",
      }}
    >
      <Container maxWidth="sm">
        <Typography
          variant="h2"
          gutterBottom
          sx={{
            fontWeight: "bold",
            fontSize: { xs: "1.5rem", sm: "2.5rem", md: "3.5rem", lg: "4rem" },
          }}
        >
          <span ref={typedRef1}></span>
        </Typography>
        {showFrontend && (
          <Typography
            variant="h4"
            gutterBottom
            sx={{
              fontSize: { xs: "1rem", sm: "1.5rem", md: "2rem", lg: "2.5rem" },
            }}
          >
            <span ref={typedRef2}></span>
          </Typography>
        )}
        {showInfo && (
          <Typography
            variant="h6"
            paragraph
            sx={{
              fontSize: {
                xs: "0.75rem",
                sm: "1rem",
                md: "1.25rem",
                lg: "1.5rem",
              },
            }}
          >
            <span ref={typedRef3}></span>
          </Typography>
        )}
        {showButtons && (
          <Box display="flex" flexDirection="row" justifyContent="center">
            <AnimatedButton
              variant="contained"
              sx={{
                backgroundColor: "white",
                color: "black",
                marginRight: "10px",
                borderRadius: 0,
                padding: { xs: "8px 16px", sm: "10px 20px", md: "12px 24px" },
                fontSize: { xs: "0.875rem", sm: "1rem", md: "1.1rem" },
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.9)",
                },
              }}
            >
              Get Started
            </AnimatedButton>
            <AnimatedButton
              variant="contained"
              sx={{
                backgroundColor: "transparent",
                color: "white",
                padding: { xs: "6px 12px", sm: "8px 16px", md: "10px 20px" },
                fontSize: { xs: "0.75rem", sm: "0.875rem", md: "1rem" },
                display: "flex",
                alignItems: "center",
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                },
              }}
              startIcon={
                <DownloadIcon
                  sx={{ fontSize: { xs: "1.5rem", sm: "1.75rem", md: "2rem" } }}
                />
              }
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


