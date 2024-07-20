import React, { useState } from "react";
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

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

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
        position="static"
        sx={{ bgcolor: "rgba(0, 0, 0, 0.9)", height: "70px" }}
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


