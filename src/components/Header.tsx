// ** React Imports
import React, { useState, useCallback, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// ** MUI Imports
import {
  Box,
  Button,
  Drawer,
  Tab,
  Tabs,
  Typography,
  IconButton,
} from "@mui/material";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import MenuIcon from "@mui/icons-material/Menu";

// ** Project Imports
import { useStickyHeader } from "../context/StickyHeaderContext";
import { useContentContext } from "../context/HomeContentContext";

// ** Type Imports
import { TopTabNavigationProps, HeaderProps } from "../types/headerTypes";

const TopTabNavigation = (props: TopTabNavigationProps) => {
  const { setActiveContent } = useContentContext();
  const { selectedTab, orientation = "horizontal", marginLeft = 0 } = props;

  const handleTabChange = (event: React.SyntheticEvent, newValue: string) => {
    setActiveContent(newValue);
  };

  return (
    <Tabs
      value={selectedTab}
      onChange={handleTabChange}
      orientation={orientation}
      sx={selectedTab === "11" ? hiddenIndicatorStyles : {}} // hiddenIndicatorStyles is used to hide the indicator when the default Landing Page is rendered
    >
      <Tab value="1" label="Haute Coutoure" sx={styles.menu} />
      <Tab value="2" label="Fashion" sx={styles.menu} />
      <Tab value="3" label="High Jewellery" sx={styles.menu} />
      <Tab value="4" label="Fine Jewellery" sx={styles.menu} />
      <Tab value="5" label="Watches" sx={styles.menu} />
      <Tab value="6" label="Eyewear" sx={styles.menu} />
      <Tab value="7" label="Fragrance" sx={styles.menu} />
      <Tab value="8" label="Makeup" sx={styles.menu} />
      <Tab value="9" label="Skincare" sx={styles.menu} />
      <Tab
        value="10"
        label="About Margaux"
        sx={{ ...styles.menu, ml: marginLeft }}
      />
      {/* Tab value 11 is used as a placeholder, so we can render the default Landing Page without MUI errors */}
      <Tab value="11" sx={{ visibility: "hidden" }} />
    </Tabs>
  );
};

const Header = ({ open, setOpen }: HeaderProps) => {
  const navigate = useNavigate();
  const { isHeaderFixed } = useStickyHeader();

  const toggleDrawer = useCallback(() => {
    setOpen((prev) => !prev);
  }, [setOpen, open]);

  const { activeContent, setActiveContent } = useContentContext();

  const handleClick = useCallback(() => {
    setActiveContent("11");
    navigate("/");
  }, [setActiveContent, navigate]);

  return (
    <>
      <Box
        sx={[styles.title, { position: isHeaderFixed ? "fixed" : "static" }]}
      >
        <Box sx={styles.drawerIconWrapper}>
          <IconButton onClick={toggleDrawer}>
            <MenuIcon />
          </IconButton>
        </Box>
        <Box>
          <Button onClick={handleClick}>
            <Typography sx={styles.titleText}>Margaux</Typography>
          </Button>
        </Box>
      </Box>
      <Box sx={styles.tabWrapper}>
        <TopTabNavigation selectedTab={activeContent} marginLeft={5} />
      </Box>
      <Drawer anchor="left" open={open} onClose={toggleDrawer}>
        <Box width={250}>
          <Box sx={styles.closeIcon}>
            <Button onClick={toggleDrawer}>
              <CloseOutlinedIcon />
            </Button>
          </Box>
          <TopTabNavigation
            selectedTab={activeContent}
            orientation="vertical"
          />
        </Box>
      </Drawer>
    </>
  );
};

const hiddenIndicatorStyles = {
  "& .MuiTabs-indicator": {
    display: "none",
  },
};

const styles = {
  title: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 15,
    top: 0,
    left: 0,
    width: "100%",
    height: "90px",
    backgroundColor: "#FFF",
  },
  drawerIconWrapper: {
    display: {
      xs: "block",
      md: "block",
      lg: "none",
    },
  },
  titleText: {
    fontFamily: '"Montserrat", sans-serif',
    fontSize: 40,
    fontWeight: 900,
    textTransform: "uppercase",
    textAlign: "center",
    color: "#000",
    letterSpacing: 2.5,
  },
  tabWrapper: {
    display: { xs: "none", md: "none", lg: "flex" },
    justifyContent: "space-evenly",
    alignItems: "center",
    marginTop: "75px",
  },
  menu: {
    fontFamily: '"Montserrat", sans-serif',
    fontWeight: "600",
    fontSize: 12,
    textTransform: "uppercase",
    cursor: "pointer",
  },
  closeIcon: {
    display: "flex",
    justifyContent: "flex-end",
  },
};

export default Header;
