import "./App.css";
import Header from "./components/Header";
import Navigator from "./components/Navigator";
import Products from "./components/Products";
import { Box, ThemeProvider } from "@mui/material";
import theme from "./components/Tema";

function App() {
  return (
    <ThemeProvider theme={theme}><div>
      <Navigator/>
      <Header />
      <Box ml={2} mr={2}>
        <Products />
      </Box>
    </div></ThemeProvider>
  );
}

export default App;
