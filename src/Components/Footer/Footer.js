import React from "react";
import {
  Container,
  Grid,
  Typography,
  Link,
  Box,
  IconButton,
} from "@mui/material";
import { styled } from "@mui/system";
import { LinkedIn, GitHub } from "@mui/icons-material";

const FooterContainer = styled(Box)(({ theme }) => ({
  backgroundColor: "#111",
  color: "#FFFFFF",
  padding: theme.spacing(4, 0),
}));

const FooterGridContainer = styled(Grid)({
  justifyContent: "space-between",
  alignItems: "center",
});

const SocialIcons = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  "& > *": {
    margin: theme.spacing(1),
    color: "#ffffff",
    transition: "color 0.3s",
    "&:hover": {
      color: "#757ce8",
    },
  },
}));

const Footer = () => {
  return (
    <FooterContainer id="contact" component="footer" >
      <Container maxWidth="lg">
        <FooterGridContainer container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Hrishikesh Kukade
            </Typography>
            <Typography variant="body2">
              Frontend Developer | Passionate about building interactive,
              user-friendly web applications.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Contact
            </Typography>
            <Typography variant="body2">
              Email:{" "}
              <Link
                href="mailto:hrishikeshkukade6@gmail.com"
                color="inherit"
                underline="hover"
              >
                hrishikeshkukade6@gmail.com
              </Link>
            </Typography>
            <Typography variant="body2">
              Phone:{" "}
              <Link href="tel:+91 8275371550" color="inherit" underline="hover">
                +91 8275371550
              </Link>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <SocialIcons>
              <IconButton
                component="a"
                href="https://www.linkedin.com/in/hrishikesh-kukade-34676b27a/"
                target="_blank"
                aria-label="LinkedIn"
                sx={{color: "white"}}
              >
                <LinkedIn />
              </IconButton>
              <IconButton
                component="a"
                href="https://github.com/Hrishikeshkukade"
                target="_blank"
                aria-label="GitHub"
                sx={{color: "white"}}
              >
                <GitHub />
              </IconButton>
            </SocialIcons>
          </Grid>
        </FooterGridContainer>
        <Box textAlign="center" marginTop={4}>
          <Typography variant="body2">
            © {new Date().getFullYear()} Hrishikesh Kukade. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
