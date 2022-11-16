import { createTheme, ThemeProvider } from '@material-ui/core';
import './App.css';
import AppRoutes from "./routes";

const theme = createTheme({
    palette: {
        primary: {
            main: '#15897B',
        },
        secondary: {
            main: '#9D9D9D'
        }
    },
});

function App() {
  return (
      <ThemeProvider theme={theme}>
          <AppRoutes />
      </ThemeProvider>
  );
}

export default App;
