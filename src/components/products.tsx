import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import { useState } from "react";

const Products = () => {
  const [age, setAge] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  return (
    <Box content="section" sx={{ border: 1, width: "70%", padding: 1 }}>
      <Box
        content="header"
        sx={{
          border: 1,
          borderRadius: 3,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: 1,
        }}
      >
        <FormControl sx={{ m: 1, minWidth: 200 }} size="small">
          <InputLabel id="demo-select-small-label">Sort by options</InputLabel>
          <Select
            labelId="demo-select-small-label"
            id="demo-select-small"
            value={age}
            label="Age"
            onChange={handleChange}
          >
            <MenuItem value={"PRICE_ASC"}>Sort by price ASC</MenuItem>
            <MenuItem value={"PRICE_DESC"}>Sort by price DESC</MenuItem>
            <MenuItem value={"RATING_ASC"}>Sort by rating ASC</MenuItem>
            <MenuItem value={"RATING_DESC"}>Sort by rating DESC</MenuItem>
            <MenuItem value={"DISCOUNT_ASC"}>Sort by discount ASC</MenuItem>
            <MenuItem value={"SICOUNT_DESC"}>Sort by discount DESC</MenuItem>
          </Select>
        </FormControl>
        <span>Found: 100</span>
        <TextField
          id="outlined-search"
          label="Search field"
          type="search"
          size="small"
        />
      </Box>
    </Box>
  );
};

export default Products;
