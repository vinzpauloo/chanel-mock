// ** React Imports
import React from "react";

// ** MUI Imports
import { Box, Typography, Link, Button } from "@mui/material";
import { useTheme } from "@mui/material";

// ** Style Imports
import styles from "../styles/Landing.module.scss";

const Landing = React.memo(function Landing(props) {
  const theme = useTheme();

  const url =
    "https://www.chanel.com/us/img/t_one/q_auto:good,fl_lossy,dpr_1.2,f_auto/w_1280/prd-emea/sys-master/content/P1/h82/h07/10177875804190-V2Homepage_Corpo_ONE_Desktop-Parallaxe.jpg";

  const url2 =
    "https://www.chanel.com/us/img/t_one/q_auto:good,fl_lossy,dpr_1.2,f_auto/w_1280/prd-emea/sys-master/content/P1/h9f/h31/10176359006238-NOPARALLAXE_HP_FASHION_Mobile.jpg";

  const url3 =
    "https://www.chanel.com/emea/img/t_one/q_auto:good,fl_lossy,dpr_1.2,f_auto/w_3000/prd-emea/sys-master/content/P1/hc1/h25/10174841782302-HP_CORPO_ONE_3400x1488px.jpg";

  const url4 =
    "https://www.chanel.com/emea/img/t_one/q_auto:good,fl_lossy,dpr_1.2,f_auto/w_642/prd-emea/sys-master/content/P1/h83/hf2/10177860501534-12666c15-0609-4829-882d-0c50af449496.jpeg";

  const url5 =
    "https://www.chanel.com/emea/img/t_one/q_auto:good,fl_lossy,dpr_1.2,f_auto/w_3000/prd-emea/sys-master/content/P1/h1d/hed/10125806895134-Homepage_HauteCouture_ONE_Desktop.jpg";

  const url6 =
    "https://www.chanel.com/emea/img/t_one/q_auto:good,fl_lossy,dpr_1.2,f_auto/w_3000/prd-emea/sys-master/content/P1/hfb/ha1/10072189141022-JENNIE_HPCorpo_D_SlidingHero_2880x1260px.jpg";

  return (
    <>
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
      {/* Second Container (Jennie Lie Bed) */}
      <Box
        sx={{
          height: "100dvh",
          backgroundImage: {
            xs: `url(${url2})`,
            sm: `url(${url})`,
            md: `url(${url})`,
            lg: `url(${url})`,
          },
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            bottom: "10rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography sx={componentStyles.title}>Fashion</Typography>
          <Typography sx={componentStyles.details}>Margaux 22 Bag</Typography>
          <Button
            sx={{
              width: "120px",
              height: "4dvh",
              backgroundColor: theme.customColors.buttonBackground,
              ":hover": {
                backgroundColor: theme.customColors.buttonBackground,
                textDecoration: "underline",
              },
              fontSize: 12,
              fontWeight: "600",
            }}
          >
            See More
          </Button>
        </Box>
      </Box>
      {/* Third Container (WATCH) */}
      <Box
        sx={{
          height: "100dvh",
          backgroundImage: {
            xs: `url(${url4})`,
            sm: `url(${url3})`,
            md: `url(${url3})`,
            lg: `url(${url3})`,
          },
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            bottom: "10rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography sx={componentStyles.title}>Capture Collection</Typography>
          <Typography sx={componentStyles.details}>
            Margaux Interstellar
          </Typography>
          <Button
            sx={{
              width: "120px",
              height: "4dvh",
              backgroundColor: theme.customColors.buttonBackground,
              ":hover": {
                backgroundColor: theme.customColors.buttonBackground,
                textDecoration: "underline",
              },
              fontSize: 12,
              fontWeight: "600",
            }}
          >
            See More
          </Button>
        </Box>
      </Box>
      {/* Fourth Container (Runway models) */}
      <Box
        sx={{
          height: "100dvh",
          backgroundImage: {
            xs: `url(${url5})`,
            sm: `url(${url5})`,
            md: `url(${url5})`,
            lg: `url(${url5})`,
          },
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            bottom: "10rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography sx={componentStyles.title}>Haute Coutoure</Typography>
          <Typography sx={componentStyles.details}>
            Spring-Summer 2023 Show
          </Typography>
          <Button
            sx={{
              width: "120px",
              height: "4dvh",
              backgroundColor: theme.customColors.buttonBackground,
              ":hover": {
                backgroundColor: theme.customColors.buttonBackground,
                textDecoration: "underline",
              },
              fontSize: 12,
              fontWeight: "600",
            }}
          >
            See More
          </Button>
        </Box>
      </Box>
      {/* Fifth Container (Jennie) */}
      <Box
        sx={{
          height: "100dvh",
          backgroundImage: {
            xs: `url(${url6})`,
            sm: `url(${url6})`,
            md: `url(${url6})`,
            lg: `url(${url6})`,
          },
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            bottom: "10rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography sx={componentStyles.title}>Fine Jewellery</Typography>
          <Typography sx={componentStyles.details}>Coco Crush</Typography>
          <Button
            sx={{
              width: "120px",
              height: "4dvh",
              backgroundColor: theme.customColors.buttonBackground,
              ":hover": {
                backgroundColor: theme.customColors.buttonBackground,
                textDecoration: "underline",
              },
              fontSize: 12,
              fontWeight: "600",
            }}
          >
            See More
          </Button>
        </Box>
      </Box>
    </>
  );
});

const componentStyles = {
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
};

export default Landing;
