import { Box, Button } from "@mui/material";
import { categories } from "../utils/categories";

function Sidebar({ selectedCategory, setSelectedCategory }) {
  return (
    <Box
      sx={{
        width: "220px",
        p: 2,
        borderRight: "1px solid #ccc",
      }}
    >
      {categories.map((category) => (
        <Button
          key={category.name}
          fullWidth
          sx={{
            justifyContent: "flex-start",
            mb: 1,
          }}
          variant={
            selectedCategory === category.name
              ? "contained"
              : "text"
          }
          onClick={() =>
            setSelectedCategory(category.name)
          }
        >
          {category.name}
        </Button>
      ))}
    </Box>
  );
}

export default Sidebar;