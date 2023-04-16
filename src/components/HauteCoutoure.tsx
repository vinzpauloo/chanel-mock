// ** React Imports
import React from "react";

// ** MUI Imports
import { Box, Typography, Link, Button } from "@mui/material";
import { useTheme } from "@mui/material";

// ** Project Imports
import { LandingImagesURL } from "../data/LandingPageData";

// ** Type Imports
import { ImageContainerProps } from "../types/landingTypes";

const ImageContainer = ({
  backgroundImage,
  title,
  details,
}: ImageContainerProps) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundImage: {
          xs: backgroundImage.xs,
          sm: backgroundImage.sm,
          md: backgroundImage.md,
          lg: backgroundImage.lg,
        },
        ...sxStyles.wrapper,
      }}
    >
      <Box sx={sxStyles.titleWrapper}>
        <Typography sx={sxStyles.title}>{title}</Typography>
        <Typography sx={sxStyles.details}>{details}</Typography>
        <Button
          sx={{
            ...sxStyles.button,
            backgroundColor: theme.customColors.buttonBackground,
            ":hover": {
              backgroundColor: theme.customColors.buttonBackground,
              textDecoration: "underline",
            },
          }}
        >
          See More
        </Button>
      </Box>
    </Box>
  );
};

const HauteCoutoure = React.memo(function HauteCoutoure(props) {
  return (
    <>
      <ImageContainer
        backgroundImage={{
          xs: `url(${LandingImagesURL.hauteCoutoure.modelWalkOne})`,
          sm: `url(${LandingImagesURL.hauteCoutoure.modelWalkOne})`,
          md: `url(${LandingImagesURL.hauteCoutoure.modelWalkOne})`,
          lg: `url(${LandingImagesURL.hauteCoutoure.modelWalkOne})`,
        }}
        title="Spring-Summer 2023"
        details="Show"
      />
      <ImageContainer
        backgroundImage={{
          xs: `url(${LandingImagesURL.hauteCoutoure.modelWalkTwo})`,
          sm: `url(${LandingImagesURL.hauteCoutoure.modelWalkTwo})`,
          md: `url(${LandingImagesURL.hauteCoutoure.modelWalkTwo})`,
          lg: `url(${LandingImagesURL.hauteCoutoure.modelWalkTwo})`,
        }}
        title="Fall-Winter 2022/23"
        details="Show"
      />
    </>
  );
});

const sxStyles = {
  wrapper: {
    height: "100dvh",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  titleWrapper: {
    position: "absolute",
    bottom: "10rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  title: {
    color: "#FFF",
    textAlign: "center",
    textTransform: "uppercase",
    fontWeight: "600",
    fontFamily: '"Montserrat", sans-serif',
    letterSpacing: 1,
    fontSize: 11,
  },
  details: {
    color: "#FFF",
    textAlign: "center",
    textTransform: "uppercase",
    fontWeight: "900",
    fontFamily: '"Montserrat", sans-serif',
    fontSize: 30,
    letterSpacing: 2,
  },
  button: {
    width: "120px",
    height: "4dvh",
    fontSize: 12,
    fontWeight: "600",
  },
};

export default HauteCoutoure;
