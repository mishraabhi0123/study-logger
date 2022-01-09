import { createTheme, CssBaseline, ThemeProvider } from "@material-ui/core";
import AppRouter from "./routes";
import "./style/main.css";


function App() {
  const theme = createTheme({
    typography: {
      fontFamily: "Roboto",
    },
    palette: {
      default: {
        light: "#000",
      },
      primary: {
        light: "#4687f0",
        main: "#0f68f7",
        dark: "#043078",
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