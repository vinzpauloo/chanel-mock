// ** React Imports
import { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";

// ** MUI Imports
import { Container } from "@mui/material";

// ** Project Imports
import Header from "./components/Header";
import Footer from "./components/Footer";
import { StickyHeaderProvider } from "./context/StickyHeaderContext";

// ** Third Party Imports
import axios from "axios";

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";

function App() {
  const [open, setOpen] = useState(false);

  return (
    <StickyHeaderProvider>
      <Container sx={styles.wrapper} maxWidth={false} disableGutters={true}>
        <Header open={open} setOpen={setOpen} />
        <Outlet />
        <Footer />
      </Container>
    </StickyHeaderProvider>
  );
}

const styles = {
  wrapper: {
    display: "flex",
    flexDirection: "column",
    minHeight: "500dvh",
    overflow: "hidden",
  },
};

export default App;
