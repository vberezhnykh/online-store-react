import { Box } from "@mui/material";
import Filter from "../components/filter";
import Products from "../components/products";

const ProductsPage = () => {
  return (
    <Box component="main" sx={{ flex: 1, display: "flex" }}>
      <Filter />
      <Products />
    </Box>
  );
};

export default ProductsPage;
