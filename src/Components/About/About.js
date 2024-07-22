import React, { useRef, useState, useEffect } from "react";
import { Container, Typography, Box } from "@mui/material";
import Typed from "typed.js";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const aboutRef = useRef(null);
  const firstParaRef = useRef(null);
  const secondParaRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect(); // Stop observing after animation is triggered
          }
        });
      },
      {
        threshold: 0.1, // Trigger when 10% of the component is visible
      }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      const firstParaOptions = {
        strings: [
          "I am a passionate Frontend Developer with experience in creating dynamic and user-friendly web applications using modern frontend technologies. My skill set includes HTML, CSS, JavaScript, React.js, Redux, and Material-UI. I am dedicated to continuous learning and keeping up with the latest trends in web development to deliver the best possible solutions.",
        ],
        typeSpeed: 50,
        backSpeed: 0,
        showCursor: true,
        onComplete: () => {
          // Hide cursor after typing
          firstParaRef.current.nextElementSibling.style.display = "none";
          const secondParaOptions = {
            strings: [
              "I have worked on various projects that have honed my skills in responsive design, component-based architecture, and state management. I am committed to writing clean, maintainable code and creating seamless user experiences.",
            ],
            typeSpeed: 50,
            backSpeed: 0,
            showCursor: true,
            onComplete: () => {
              // Hide cursor after typing
              secondParaRef.current.nextElementSibling.style.display = "none";
            },
          };
          new Typed(secondParaRef.current, secondParaOptions);
        },
      };
      new Typed(firstParaRef.current, firstParaOptions);
    }
  }, [isVisible]);

  return (
    <Box
      id="about"
      ref={aboutRef}
      sx={{
        backgroundColor: "#111",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        color: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "10%", // Add padding to create some space
        textAlign: "center", // Center align text
      }}
    >
      <Container maxWidth="md"> {/* Restrict the container width */}
        <Box
          sx={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(50px)",
            transition: "opacity 1s ease-in-out, transform 1s ease-in-out",
          }}
        >
          <Typography
            variant="h3"
            gutterBottom
            sx={{
              fontWeight: "bold",
              marginBottom: "1rem",
              borderBottom: "3px solid #fff",
              display: "inline-block",
              fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem", lg: "3rem" }, // Adjust font size for different screen sizes
            }}
          >
            About Me
          </Typography>

          <Typography
            variant="h5"
            paragraph
            sx={{
              margin: "20px 0",
              fontSize: { xs: "0.875rem", sm: "1rem", md: "1.1rem", lg: "1.2rem" }, // Adjust font size for different screen sizes
              lineHeight: "1.6",
              textAlign: "justify", // Justify text for better readability
            }}
          >
            <span ref={firstParaRef}></span>
          </Typography>
          <Typography
            variant="h5"
            paragraph
            sx={{
              margin: "20px 0",
              fontSize: { xs: "0.875rem", sm: "1rem", md: "1.1rem", lg: "1.2rem" }, // Adjust font size for different screen sizes
              lineHeight: "1.6",
              textAlign: "justify", // Justify text for better readability
            }}
          >
            <span ref={secondParaRef}></span>
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default About;

