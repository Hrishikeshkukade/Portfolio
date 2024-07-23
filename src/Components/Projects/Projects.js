import React, { useState } from "react";
import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  CardActions,
  Button,
  Modal,
  Backdrop,
  Fade,
  Grid,
  IconButton,
} from "@mui/material";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CloseIcon from "@mui/icons-material/Close";
import { useInView } from "react-intersection-observer";

const projects = [
  {
    name: "Password Generator and Manager",
    description:
      "A secure application to generate and manage complex passwords, ensuring users' online accounts remain safe from unauthorized access. Includes features like password strength analysis, storage, and retrieval.",
    technologies: ["React", "Material-UI", "Firebase", "Redux"],
    link: "https://password-generator-and-manager.netlify.app",
    repo: "https://github.com/Hrishikeshkukade/Password-Generator-and-manager",
    screenshots: [
      "./pg.png",
      "./pg2.png",
      "./pg3.png",
      "./pg4.png",
      "./pg5.png",
      "./pg6.png",
      "./pg7.png",
      "./pg8.png",
      "./pg9.png",
    ], // Replace with actual screenshot URLs
  },
  {
    name: "Quiz Website",
    description:
      "An interactive quiz platform that allows users to take quizzes on various topics. Features include timed quizzes, score tracking, and detailed explanations for each question to enhance learning.",
    technologies: ["React", "Bootstrap", "Firebase", "Context-api"],
    link: "https://quizknowledge.netlify.app/",
    repo: "https://github.com/Hrishikeshkukade/Quiz-App",
    screenshots: [
      "./q2.png",
      "./q3.png",
      "./q4.png",
      "./q5.png",
      "./q6.png",
      "./q7.png",
      "./q8.png",
      "./q9.png",
      "./q10.png",
      "./q11.png",
      "./q12.png",
      "./q13.png",
      "./q14.png",
      "./q15.png",
      "./q16.png",
      "./q17.png",
      "./q18.png",
      "./q19.png",
      "./q20.png",
    ], // Replace with actual screenshot URLs
  },
  {
    name: "Weather Application",
    description:
      "A user-friendly weather application that provides current weather information and forecasts for various locations. Features include temperature, humidity, wind speed, and weather conditions display.",
    technologies: ["React", "CSS", "OpenWeatherMap API"],
    link: "https://reactweatherandforecast.netlify.app",
    repo: "https://github.com/Hrishikeshkukade/Weather",
    screenshots: ["./w1.png", "./w2.png","./w3.png","./w4.png","./w5.png"], // Replace with actual screenshot URLs
  },
];

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

const StyledCard = styled(Card)`
  animation: ${riseUp} 2s ease-out forwards;
  margin: 20px 0;
  background-color: #333;
  color: white;
  border-radius: 15px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
  }
`;

const StyledButton = styled(Button)`
  color: white;
  border: 1px solid white;
  margin-right: 10px;

  &:hover {
    background-color: #555;
    border-color: #555;
  }
`;

const StyledCardContent = styled(CardContent)`
  color: white;
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

const Projects = () => {
  const [open, setOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const { ref: titleRef, inView: titleInView } = useInView({
    triggerOnce: true, // Animation should trigger only once
    threshold: 0.1, // Adjust the threshold as needed
  });

  const { ref, inView } = useInView({
    triggerOnce: true, // Animation should trigger only once
    threshold: 0.1, // Adjust the threshold as needed
  });

  const handleOpen = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedProject(null);
  };

  const handlePrevImage = (event) => {
    event.stopPropagation(); // Prevent modal from closing
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? selectedProject.screenshots.length - 1 : prevIndex - 1
    );
  };

  const handleNextImage = (event) => {
    event.stopPropagation(); // Prevent modal from closing
    setCurrentImageIndex((prevIndex) =>
      prevIndex === selectedProject.screenshots.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <Box
      id="project"
      sx={{
        backgroundColor: "#000",
        animation: `${backgroundAnimation} 15s ease infinite`,
        minHeight: "100vh",
        color: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "5%",
      }}
    >
      <Container maxWidth="md">
      <Typography
          ref={titleRef}
          variant="h3"
          gutterBottom
          sx={{
            fontWeight: "bold",
            marginBottom: "2rem",
            borderBottom: "3px solid #fff",
            display: "inline-block",
            opacity: titleInView ? 1 : 0,
            transform: titleInView ? "translateY(0)" : "translateY(50px)",
            transition: "opacity 1s ease-out, transform 1s ease-out",
            "@media (max-width: 600px)": {
              fontSize: "2rem",
            },
          }}
        >
          Projects
        </Typography>
        <Box
          ref={ref}
          sx={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(50px)",
            transition: "opacity 1s ease-out, transform 1s ease-out",
          }}
        >
          {projects.map((project, index) => (
            <StyledCard
              sx={{ cursor: "pointer" }}
              key={index}
              onClick={() => handleOpen(project)}
            >
              <StyledCardContent>
                <Typography variant="h5" component="div">
                  {project.name}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ marginTop: "10px", marginBottom: "10px" }}
                >
                  {project.description}
                </Typography>
                <Typography variant="body2">
                  <strong>Technologies:</strong> {project.technologies.join(", ")}
                </Typography>
              </StyledCardContent>
              <CardActions>
                <StyledButton
                  size="small"
                  variant="outlined"
                  href={project.link}
                  target="_blank"
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                >
                  View Project
                </StyledButton>
                <StyledButton
                  size="small"
                  variant="outlined"
                  href={project.repo}
                  target="_blank"
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                >
                  GitHub Repo
                </StyledButton>
              </CardActions>
            </StyledCard>
          ))}
        </Box>
      </Container>

      {selectedProject && (
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "80%",
                bgcolor: "#333",
                color: "white",
                borderRadius: 1,
                boxShadow: 24,
                
                p: 4,
                outline: "none",
              }}
              onClick={(event) => event.stopPropagation()} // Prevent modal from closing when clicking inside
            >
              <Grid container spacing={2}>
                <Grid
                  item
                  xs={12}
                  sm={6}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <IconButton onClick={handlePrevImage} sx={{ color: "white" }}>
                    <ArrowBackIcon />
                  </IconButton>
                  <img
                    src={selectedProject.screenshots[currentImageIndex]}
                    alt={`Screenshot ${currentImageIndex + 1}`}
                    style={{ width: "90%", borderRadius: "5px", }}
                  />
                  <IconButton onClick={handleNextImage} sx={{ color: "white" }}>
                    <ArrowForwardIcon />
                  </IconButton>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography
                    id="transition-modal-title"
                    variant="h5"
                    component="h2"
                    gutterBottom
                  >
                    {selectedProject.name}
                  </Typography>
                  <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                    {selectedProject.description}
                  </Typography>
                  <Typography variant="body2" sx={{ marginTop: "10px" }}>
                    <strong>Technologies:</strong>{" "}
                    {selectedProject.technologies.join(", ")}
                  </Typography>
                  <StyledButton
                    size="small"
                    variant="outlined"
                    href={selectedProject.link}
                    target="_blank"
                    sx={{ marginTop: "10px" }}
                  >
                    View Project
                  </StyledButton>
                  <StyledButton
                    size="small"
                    variant="outlined"
                    href={selectedProject.repo}
                    target="_blank"
                    sx={{ marginTop: "10px" }}
                  >
                    GitHub Repo
                  </StyledButton>
                </Grid>
              </Grid>
              <IconButton
                onClick={handleClose}
                sx={{
                  color: "white",
                  position: "absolute",
                  top: 10,
                  right: 10,
                }}
              >
                <CloseIcon />
              </IconButton>
            </Box>
          </Fade>
        </Modal>
      )}
    </Box>
  );
};

export default Projects;




