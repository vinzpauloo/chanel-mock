// ** React Imports
import React from "react";

// ** MUI Imports
import { Box, Typography, Link, Button } from "@mui/material";
import { useTheme } from "@mui/material";

// ** Project Imports
import { LandingImagesURL } from "../data/LandingPageData";

// ** Style Imports
import styles from "../styles/Landing.module.scss";

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

const Landing = React.memo(function Landing(props) {
  const theme = useTheme();

  return (
    <>
      {/* First Container (Men/Women Fall/Winter Collection)*/}
      <Box className={styles.wrapper}>
        <Box className={`${styles.side} ${styles.left}`}>
          <Box className={`${styles.image} ${styles.man}`}></Box>

          <Box className={styles.caption}>
            <Typography className={styles.header}>Men</Typography>
            <Link className={styles.link}>
              <Button className={styles.landingBtn}>
                2023 Men's Fall/Winter Collection
              </Button>
            </Link>
          </Box>
        </Box>
        <Box className={`${styles.side} ${styles.right}`}>
          <Box className={`${styles.image} ${styles.woman}`}></Box>

          <Box className={styles.caption}>
            <Typography className={styles.header}>Women</Typography>
            <Link className={styles.link}>
              <Button className={styles.landingBtn}>
                2023 Women's Fall/Winter Collection
              </Button>
            </Link>
          </Box>
        </Box>
      </Box>
      {/* Second Container (Jennie) */}
      <ImageContainer
        backgroundImage={{
          xs: `url(${LandingImagesURL.secondContainer.jennieMobile})`,
          sm: `url(${LandingImagesURL.secondContainer.jennie})`,
          md: `url(${LandingImagesURL.secondContainer.jennie})`,
          lg: `url(${LandingImagesURL.secondContainer.jennie})`,
        }}
        title="Fashion"
        details="Margaux 22 Bag"
      />
      {/* Third Container (Watches) */}
      <ImageContainer
        backgroundImage={{
          xs: `url(${LandingImagesURL.thirdContainer.watchesMobile})`,
          sm: `url(${LandingImagesURL.thirdContainer.watches})`,
          md: `url(${LandingImagesURL.thirdContainer.watches})`,
          lg: `url(${LandingImagesURL.thirdContainer.watches})`,
        }}
        title="Capsule Collection"
        details="Margaux Interstellar"
      />
      {/* Fourth Container (Models Walking) */}
      <ImageContainer
        backgroundImage={{
          xs: `url(${LandingImagesURL.fourthContainer.modelWalk})`,
          sm: `url(${LandingImagesURL.fourthContainer.modelWalk})`,
          md: `url(${LandingImagesURL.fourthContainer.modelWalk})`,
          lg: `url(${LandingImagesURL.fourthContainer.modelWalk})`,
        }}
        title="Haute Coutoure"
        details="Spring-Summer 2023 Show"
      />
      {/* Fifth Container (Jennie) */}
      <ImageContainer
        backgroundImage={{
          xs: `url(${LandingImagesURL.fifthContainer.jennie})`,
          sm: `url(${LandingImagesURL.fifthContainer.jennie})`,
          md: `url(${LandingImagesURL.fifthContainer.jennie})`,
          lg: `url(${LandingImagesURL.fifthContainer.jennie})`,
        }}
        title="Fine Jewellery"
        details="Coco Crush"
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
    fontSize: 23,
    letterSpacing: 4,
  },
  button: {
    width: "120px",
    height: "4dvh",
    fontSize: 12,
    fontWeight: "600",
  },
};

export default Landing;
