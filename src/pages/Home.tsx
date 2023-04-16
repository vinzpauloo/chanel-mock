// ** React Imports
import React, { lazy, Suspense, useMemo } from "react";

// ** MUI Imports
import { Box, Button, Typography } from "@mui/material";

// ** Project Imports
import { useContentContext } from "../context/HomeContentContext";

const Landing = lazy(() => import("../components/Landing"));

const Home = () => {
  const { activeContent } = useContentContext();

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
        return <Landing />;
    }
  }, [activeContent]);

  return (
    <Box sx={{ flex: 1 }}>
      <Suspense fallback={<Box>Loading...</Box>}>{renderContent}</Suspense>
    </Box>
  );
};

export default Home;
