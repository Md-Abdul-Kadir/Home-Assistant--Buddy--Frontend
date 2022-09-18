import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import musicCover from "../../images/mcover.jpg";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import Grid from "@mui/material/Unstable_Grid2";
import "./MusicSlide.css";

const MusicSlide = () => {
  return (
    <div className="container my-5">
      <p className="text-light mt-5 ms-4 text-start">Recommended Music</p>
      <div className="">
        <Grid
          container
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          marginBottom="50px"
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          <Card
            className="mx-auto my-5"
            xs={2}
            sm={4}
            md={4}
            sx={{ display: "flex", Color: "Primary", maxWidth: 360 }}
          >
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <CardContent sx={{ flex: "1 0 auto" }}>
                <Typography component="div" variant="h5">
                  Live From Space
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                >
                  Mac Miller
                </Typography>
              </CardContent>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  pl: 1,
                  pb: 1,
                  color: "primary",
                }}
              >
                <IconButton aria-label="previous">
                  <SkipPreviousIcon />
                </IconButton>
                <IconButton aria-label="play/pause">
                  <PlayArrowIcon sx={{ height: 38, width: 38 }} />
                </IconButton>
                <IconButton aria-label="next">
                  <SkipNextIcon />
                </IconButton>
              </Box>
            </Box>
            <CardMedia
              component="img"
              sx={{ width: 151 }}
              image={musicCover}
              alt="Live from space album cover"
            />
          </Card>
          <Card
            className="mx-auto my-5"
            sx={{ display: "flex", Color: "Primary",maxWidth: 360 }}
          >
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <CardContent sx={{ flex: "1 0 auto" }}>
                <Typography component="div" variant="h5">
                  Live From Space
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                >
                  Mac Miller
                </Typography>
              </CardContent>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  pl: 1,
                  pb: 1,
                  color: "primary",
                }}
              >
                <IconButton aria-label="previous">
                  <SkipPreviousIcon />
                </IconButton>
                <IconButton aria-label="play/pause">
                  <PlayArrowIcon sx={{ height: 38, width: 38 }} />
                </IconButton>
                <IconButton aria-label="next">
                  <SkipNextIcon />
                </IconButton>
              </Box>
            </Box>
            <CardMedia
              component="img"
              sx={{ width: 151 }}
              image={musicCover}
              alt="Live from space album cover"
            />
          </Card>
          <Card
            className="mx-auto my-5"
            sx={{ display: "flex", Color: "Primary" ,maxWidth: 360}}
          >
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <CardContent sx={{ flex: "1 0 auto" }}>
                <Typography component="div" variant="h5">
                  Live From Space
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                >
                  Mac Miller
                </Typography>
              </CardContent>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  pl: 1,
                  pb: 1,
                  color: "primary",
                }}
              >
                <IconButton aria-label="previous">
                  <SkipPreviousIcon />
                </IconButton>
                <IconButton aria-label="play/pause">
                  <PlayArrowIcon sx={{ height: 38, width: 38 }} />
                </IconButton>
                <IconButton aria-label="next">
                  <SkipNextIcon />
                </IconButton>
              </Box>
            </Box>
            <CardMedia
              component="img"
              sx={{ width: 151 }}
              image={musicCover}
              alt="Live from space album cover"
            />
          </Card>
        </Grid>
      </div>
    </div>
  );
};

export default MusicSlide;
