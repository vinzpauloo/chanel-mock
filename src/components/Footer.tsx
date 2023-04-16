// ** React Imports
import React, { useCallback, useEffect, useRef } from "react";

// ** MUI Imports
import { Box, Typography } from "@mui/material";

// ** Project Imports
import { FooterData } from "../data/FooterData";
import { useStickyHeader } from "../context/StickyHeaderContext";

// ** Type Imports
import { MenuitemProps, MenuListProps } from "../types/footerTypes";

const MenuItem = ({ text, color }: MenuitemProps) => {
  return <Typography sx={[styles.menu, { color, mt: 1 }]}>{text}</Typography>;
};

const MenuList = ({ items, color, title }: MenuListProps) => {
  return (
    <Box>
      <Typography sx={styles.menuListTitle}>{title}</Typography>
      {items.map((item, index) => (
        <MenuItem key={index} text={item} color={color} />
      ))}
    </Box>
  );
};

const Footer = () => {
  // ** Footer Menu Items Data
  const { exploreItems, onlineServices, boutiqueServices, theHouseOfMargaux } =
    FooterData();

  // ** Sticky Header Context starts here
  const { setIsHeaderFixed } = useStickyHeader();
  const bottomElementRef = useRef<HTMLDivElement>(null);

  const handleIntersection = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const isVisible = entries[0].isIntersecting;
      setIsHeaderFixed(!isVisible);
    },
    [setIsHeaderFixed]
  );

  useEffect(() => {
    if (!bottomElementRef.current) return;

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0,
    });

    observer.observe(bottomElementRef.current);

    return () => {
      if (bottomElementRef.current) {
        observer.unobserve(bottomElementRef.current);
      }
    };
  }, [handleIntersection]);
  // ** Sticky Header Context ends here

  return (
    <Box sx={styles.footerWrapper} ref={bottomElementRef}>
      <Box>
        <Typography sx={styles.footerTitle}>Margaux</Typography>
      </Box>
      <Box sx={styles.menuListWrapper}>
        <MenuList
          items={exploreItems}
          title="Explore Margaux.com"
          color="#FFF"
        />
        <MenuList items={onlineServices} title="Online Services" color="#FFF" />
        <MenuList
          items={boutiqueServices}
          title="Boutique Services"
          color="#FFF"
        />
        <MenuList
          items={theHouseOfMargaux}
          title="The House Of Margaux"
          color="#FFF"
        />
      </Box>
    </Box>
  );
};

const styles = {
  footerWrapper: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#000",
    padding: "20px 0 200px 0",
  },
  footerTitle: {
    fontFamily: '"Montserrat", sans-serif',
    fontSize: 50,
    fontWeight: 900,
    textTransform: "uppercase",
    textAlign: "center",
    color: "#FFF",
    mb: 5,
  },
  menuListWrapper: {
    display: "flex",
    flexDirection: {
      xs: "column",
      md: "row",
      lg: "row",
    },
    justifyContent: "center",
    gap: 10,
  },
  menuListTitle: {
    fontFamily: '"Montserrat", sans-serif',
    fontWeight: "900",
    fontSize: 18,
    textTransform: "uppercase",
    color: "#FFF",
  },
  menu: {
    fontFamily: '"Montserrat", sans-serif',
    fontWeight: "600",
    fontSize: 12,
    textTransform: "uppercase",
    cursor: "pointer",
  },
};

export default Footer;
