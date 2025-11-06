import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./components/App/App";
import { ThemeProvider } from "styled-components";
import { theme } from "./constants/theme";

// const Box = styled.div`
//   color: ${(props) => props.theme.color};
// `;

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </StrictMode>
);
