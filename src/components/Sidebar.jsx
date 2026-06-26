import { Box, Button } from "@mui/material";
import { categories } from "../utils/categories";

function Sidebar({ selectedCategory, setSelectedCategory }) {
  return (
    <Box
      sx={{
        width: "220px",
        p: 2,
        bgcolor: "#ffffff",
        borderRight: "1px solid #e5e5e5",
        minHeight: "100vh",
      }}
    >
      {categories.map((category) => (
        <Button
          key={category.name}
          fullWidth
          onClick={() => setSelectedCategory(category.name)}
          sx={{
            justifyContent: "flex-start",
            mb: 1,
            px: 2,
            py: 1.2,
            borderRadius: "10px",
            fontWeight: 500,
            textTransform: "none",
            color:
              selectedCategory === category.name
                ? "#ffffff"
                : "#0f0f0f",
            bgcolor:
              selectedCategory === category.name
                ? "#ff0000"
                : "transparent",

            "&:hover": {
              bgcolor:
                selectedCategory === category.name
                  ? "#cc0000"
                  : "#f2f2f2",
            },
          }}
        >
          {category.name}
        </Button>
      ))}
    </Box>
  );
}

export default Sidebar;