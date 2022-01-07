import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import AppRouter from "./routes";

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: "Poppins",
    },
    palette: {
      default: {
        light: "#000",
      },
      primary: {
        light: "rgb(175 117 86)",
        main: "rgb(175 117 86)",
        dark: "rgb(129 86 63)",
        contrastText: "#fff",
      },
      secondary: {
        light: "white",
        main: "#444482",
        dark: "#c51162",
        contrastText: "#fff",
      },
      background: {
        default: "#fff",
        paper: "#fff",
      },
    },
    shape: {
      borderRadius: 0,
    },
  });

  return (
    <div id="app">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppRouter />
      </ThemeProvider>
    </div>
  );
}

export default App;