import React, { useEffect, useRef, useState } from "react";
import { Container, Typography, Box, Grid, Paper } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faJsSquare,
  faReact,
  faGithub,
  faGitAlt,
  faBootstrap,
} from "@fortawesome/free-brands-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { keyframes } from "@emotion/react"; // Import keyframes from @emotion/react
import styled from "@emotion/styled"; // Import styled from @emotion/styled
import './Skills.css'; // Import the CSS file

const skills = [
  { name: "HTML", icon: faHtml5, className: "icon-html" },
  { name: "CSS", icon: faCss3Alt, className: "icon-css" },
  { name: "JavaScript", icon: faJsSquare, className: "icon-js-square" },
  { name: "React.js", icon: faReact, className: "icon-react" },
  { name: "Redux", icon: faCode, className: "icon-redux" },
  { name: "Material-UI", icon: faCode, className: "icon-material-ui" },
  { name: "Bootstrap", icon: faBootstrap, className: "icon-bootstrap" },
  { name: "Git", icon: faGitAlt, className: "icon-git" },
  { name: "GitHub", icon: faGithub, className: "icon-github" },
  { name: "API Integration", icon: faCode, className: "icon-api-integration" },
  { name: "Responsive Design", icon: faCode, className: "icon-responsive-design" },
];

const fadeInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const AnimatedPaper = styled(Paper)(({ delay, isVisible }) => ({
  padding: "2rem",
  textAlign: "center",
  backgroundColor: "#333",
  color: "#fff",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  transition: "background-color 0.3s, transform 0.3s",
  animation: isVisible ? `${fadeInLeft} 0.8s ease-out forwards` : 'none',
  animationDelay: `${delay}s`,
  "&:hover": {
    cursor: "pointer",
    backgroundColor: "#444",
    transform: "scale(1.05)",
  },
}));

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const skillsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  return (
    <Box
      id="skills"
      ref={skillsRef}
      sx={{
        backgroundColor: "#222",
        color: "white",
        padding: "5%",
        minHeight: "100vh",
      }}
    >
      <Container maxWidth="md">
        <Typography
          variant="h3"
          gutterBottom
          sx={{
            fontWeight: "bold",
            borderBottom: "3px solid #fff",
            marginBottom: "2rem",
            textAlign: "center",
            display: "inline-block",
            fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
          }}
        >
          My Skills
        </Typography>
        <Grid container spacing={2}>
          {skills.map((skill, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <AnimatedPaper elevation={3} delay={index * 0.2} isVisible={isVisible}>
                <FontAwesomeIcon
                  icon={skill.icon}
                  className={`icon ${skill.className}`} // Apply the class
                />
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  {skill.name}
                </Typography>
              </AnimatedPaper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Skills;





