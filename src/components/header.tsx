import { Box, Container } from "@mui/material";
import shoppingBagImg from "../assets/shopping-bag.png";
import cartImg from "../assets/cart.png";

const Header = () => {
  return (
    <header>
      <Container
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <img src={shoppingBagImg} alt="" />
          <h1>Online Store</h1>
        </Box>
        <Box>Cart total: $ 0.00</Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <img src={cartImg} alt="" />
          <span>0</span>
        </Box>
      </Container>
    </header>
  );
};

export default Header;
