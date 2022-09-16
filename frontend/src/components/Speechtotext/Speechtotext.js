import React from "react";
import mic from "../../images/mic.png";
import Fab from "@mui/material/Fab";
import { pink } from "@mui/material/colors";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import Container from "@mui/material/Container";
import "./SpeechtoText.css";

const Pink = pink[500];

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.9),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 1.1),
  },
  marginTop: "50px",
  width: "100%",
  height: "40px",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),

    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const Speechtotext = () => {
  return (
    <div className="mb-5">
      <Fab color={Pink} aria-label="SpeechIcon">
        <img className="speechIcon" src={mic} alt="" />
      </Fab>
      <h5 className="text-light mt-5">Please Command your Buddy</h5>
      <Container fixed  className="marginExtra text-dark">
        <Search align="center" variant="white" marginTop="40px">
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Say to search...."
            inputProps={{ "aria-label": "search" }}
          />
        </Search>
      </Container>

    </div>
  );
};

export default Speechtotext;
