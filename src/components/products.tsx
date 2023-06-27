import { Box, MenuItem, Select, TextField } from "@mui/material";

const Products = () => {
  return (
    <Box content="section" sx={{ border: 1, width: "70%" }}>
      <Box content="header">
        <TextField id="select" label="Age" select>
          <MenuItem>Sort by price ASC</MenuItem>
          <MenuItem>Sort by price DESC</MenuItem>
          <MenuItem>Sort by rating ASC</MenuItem>
          <MenuItem>Sort by rating DESC</MenuItem>
          <MenuItem>Sort by discount ASC</MenuItem>
          <MenuItem>Sort by discount DESC</MenuItem>
        </TextField>
      </Box>
    </Box>
  );
};

export default Products;
