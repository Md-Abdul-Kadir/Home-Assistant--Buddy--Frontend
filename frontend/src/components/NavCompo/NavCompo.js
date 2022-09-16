import React from "react";
import "./NavCompo.css";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { purple } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: purple[500],
    },
    secondary: {
      // This is green.A700 as hex.
      main: '#001278',
    },
  },
});

const NavCompo = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppBar color="secondary">
        <Container fixed>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h5"
              noWrap
              component="div"
              sx={{ display: { xs: "none", sm: "block" } }}
            >
              Buddy
            </Typography>

            <Box marginLeft="auto">
              <Button color="inherit">Login</Button>
              <Button color="inherit">Signin</Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      </ThemeProvider>
    
  );
};

export default NavCompo;
