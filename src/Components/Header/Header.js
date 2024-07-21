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
            component="a"
            href={`/${text.toLowerCase()}`}
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
            <ListItemText primary={text} />
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
          transition: "box-shadow 0.6s ease-in-out, background-color 0.6s ease-in-out"
        }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, fontWeight: "bold", color: "#fff" }}
          >
            <a
              href="/"
              style={{
                color: "#fff",
                textDecoration: "none",
                marginRight: "16px",
              }}
            >
              {/* Your logo or text */}
            </a>
          </Typography>
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              justifyContent: "space-between",
              width: "50%",
            }}
          >
            {["Home", "About", "Skills", "Project", "Contact"].map((text) => (
              <a
                key={text}
                href={`/${text.toLowerCase()}`}
                style={{
                  color: "#fff",
                  textDecoration: "none",
                  marginRight: "6px",
                  padding: "8px",
                  borderRadius: "4px",
                  transition: "all 0.5s ease",
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
              </a>
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






