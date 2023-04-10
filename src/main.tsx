// ** React Imports
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// ** Project Imports
import App from "./App";
import Home from "./pages/Home";

// ** Style Imports
import "./normalize.scss";
import "./global.scss";

// ** React Query Imports
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const container = document.getElementById("root");
const root = createRoot(container!);
const queryClient = new QueryClient();
root.render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </QueryClientProvider>
);
