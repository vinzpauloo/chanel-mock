// ** React Imports
import React, { lazy, Suspense, useMemo } from "react";

// ** MUI Imports
import { Box, Button, Typography } from "@mui/material";
import { useTheme } from "@mui/material";

// ** Project Imports
import { useContentContext } from "../context/HomeContentContext";

const Landing = lazy(() => import("../components/Landing"));

const Home = () => {
  const { activeContent } = useContentContext();
  const theme = useTheme();

  const url =
    "https://www.chanel.com/us/img/t_one/q_auto:good,fl_lossy,dpr_1.2,f_auto/w_1280/prd-emea/sys-master/content/P1/h82/h07/10177875804190-V2Homepage_Corpo_ONE_Desktop-Parallaxe.jpg";

  const url2 =
    "https://www.chanel.com/us/img/t_one/q_auto:good,fl_lossy,dpr_1.2,f_auto/w_1280/prd-emea/sys-master/content/P1/h9f/h31/10176359006238-NOPARALLAXE_HP_FASHION_Mobile.jpg";

  const renderContent = useMemo(() => {
    switch (activeContent) {
      case "1":
        return <Box>Haute Coutoure</Box>;
      case "2":
        return <Box>Fashion</Box>;
      case "3":
        return <Box>High Jewellery</Box>;
      case "4":
        return <Box>Fine Jewellery</Box>;
      case "5":
        return <Box>Watches</Box>;
      case "6":
        return <Box>Eyewear</Box>;
      case "7":
        return <Box>Fragance</Box>;
      case "8":
        return <Box>Makeup</Box>;
      case "9":
        return <Box>SkinCare</Box>;
      case "10":
        return <Box>About</Box>;
      default:
        return (
          <Box>
            <Landing />
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
                <Typography sx={styles.title}>Fashion</Typography>
                <Typography sx={styles.details}>Margaux 22 Bag</Typography>
                <Button
                  sx={{ backgroundColor: theme.customColors.buttonBackground }}
                >
                  See More
                </Button>
              </Box>
            </Box>
          </Box>
        );
    }
  }, [activeContent]);

  return (
    <Box sx={{ flex: 1 }}>
      <Suspense fallback={<Box>Loading...</Box>}>{renderContent}</Suspense>
    </Box>
  );
};

const styles = {
  title: {
    color: "#FFF",
    textAlign: "center",
    textTransform: "uppercase",
    fontWeight: "600",
    fontFamily: '"Montserrat", sans-serif',
    letterSpacing: 4,
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

export default Home;
