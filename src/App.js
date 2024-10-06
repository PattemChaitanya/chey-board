import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "./config/theme";
import { Provider } from "react-redux";
import store from "./app/store";
import AllComponents from "./pages/combine";

function App() {
  const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
  const mode = darkThemeMq ? "dark" : "light";

  return (
    <ThemeProvider theme={theme(mode)}>
      <Provider store={store}>
        <CssBaseline />
        <AllComponents />
      </Provider>
    </ThemeProvider>
  );
}

export default App;
