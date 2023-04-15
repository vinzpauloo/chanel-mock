// ** React Imports
import { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";

// ** MUI Imports
import { Container } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";

// ** Project Imports
import Header from "./components/Header";
import Footer from "./components/Footer";
// *** Context Providers
import { StickyHeaderProvider } from "./context/StickyHeaderContext";
import { ContentProvider } from "./context/HomeContentContext";
import { theme } from "./theme/ThemeComponent";

// ** Third Party Imports
import axios from "axios";

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";

function App() {
  const [open, setOpen] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <ContentProvider>
        <StickyHeaderProvider>
          <Container sx={styles.wrapper} maxWidth={false} disableGutters={true}>
            <Header open={open} setOpen={setOpen} />
            <Outlet />
            <Footer />
          </Container>
        </StickyHeaderProvider>
      </ContentProvider>
    </ThemeProvider>
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
