import { Formulario } from "./page/formulario";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";
import { Header } from "./components/Header/Header";

const theme = createTheme({
  palette: {
    primary: {
      main: red[500],
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />

      <Formulario />
    </ThemeProvider>
  );
}

export default App;
