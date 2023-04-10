import { render, screen, renderHook } from "@testing-library/react";
import App from "./App";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Home from "./pages/Home";
import { it } from "vitest";

// import matchers from "@testing-library/jest-dom";
// expect.extend(matchers);

// it("should have hello world", () => {
//   render(<App />);
//   const message = screen.queryByText(/Hello World/);
//   expect(message).toBeVisible();
// });

// it("should render Home component", () => {
//   render(<App />);
//   const homeComponent = screen.getByTestId("home-component");
//   expect(homeComponent).toBeInTheDocument();
// });

// it("should render children inside QueryClientProvider", () => {
//   render(<App />);
//   const testComponent = screen.getByTestId("test-component");
//   expect(testComponent).toBeInTheDocument();
// });
