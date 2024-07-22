import React, { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { Link } from "react-scroll"; // Import Link from react-scroll

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  // Update scrolled state based on window scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const drawer = (
    <Box
      sx={{
        width: 250,
        bgcolor: "black",
        height: "100%",
        color: "white",
        transition: "transform 0.5s ease",
      }}
      role="presentation"
      onClick={handleDrawerToggle}
      onKeyDown={handleDrawerToggle}
    >
      <List>
        {["Home", "About", "Skills", "Project", "Contact"].map((text) => (
          <ListItem
            button
            key={text}
            sx={{
              color: "white",
              textDecoration: "none",
              marginRight: "6px",
              padding: "8px",
              borderRadius: "4px",
              transition: "all 0.5s ease",
              "&:hover": {
                color: "#000",
                backgroundColor: "#fff",
              },
            }}
          >
            <Link
              to={text.toLowerCase()}
              smooth={true}
              duration={500}
              style={{ width: "100%", display: "block", cursor: "pointer" }} // Add cursor: pointer
            >
              <ListItemText primary={text} />
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="sticky"
        sx={{
          bgcolor: "#000",
          height: "70px",
          boxShadow: scrolled ? "0px 4px 6px rgba(255, 255, 255, 0.2)" : "none",
          transition: "box-shadow 0.6s ease-in-out, background-color 0.6s ease-in-out",
        }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, fontWeight: "bold", color: "#fff" }}
          >
            <Link
              to="home"
              smooth={true}
              duration={500}
              style={{
                color: "#fff",
                textDecoration: "none",
                marginRight: "16px",
                cursor: "pointer", // Add cursor: pointer
              }}
            >
              {/* Your logo or text */}
            </Link>
          </Typography>
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              justifyContent: "space-between",
              width: "50%",
            }}
          >
            {["Home", "About", "Skills", "Project", "Contact"].map((text) => (
              <Link
                key={text}
                to={text.toLowerCase()}
                smooth={true}
                duration={500}
                style={{
                  color: "#fff",
                  textDecoration: "none",
                  marginRight: "6px",
                  padding: "8px",
                  borderRadius: "4px",
                  transition: "all 0.5s ease",
                  cursor: "pointer", // Add cursor: pointer
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.color = "#000";
                  e.currentTarget.style.backgroundColor = "#fff";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.color = "#fff";
                  e.currentTarget.style.backgroundColor = "transparent";
                }}
              >
                {text}
              </Link>
            ))}
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              color="inherit"
              aria-label="menu"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={handleDrawerToggle}
        sx={{ transition: "transform 1s ease" }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Header;








