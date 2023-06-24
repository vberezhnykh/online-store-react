import { Outlet } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import { Box } from "@mui/material";

function App() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <Header />
      <Outlet />
      <Footer />
    </Box>
  );
}

export default App;
