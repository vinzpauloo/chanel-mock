// ** React Imports
import React from "react";

// ** MUI Imports
import { Box, Typography, Link, Button } from "@mui/material";

// ** Style Imports
import styles from "./Landing.module.scss";

const Landing = () => {
  return (
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
  );
};

export default Landing;
