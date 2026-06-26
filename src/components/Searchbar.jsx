import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  TextField,
  IconButton,
  Box,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (searchTerm.trim()) {
      navigate(`/search/${searchTerm}`);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        width: {
          xs: "100%",
          sm: "450px",
          md: "550px",
        },
      }}
    >
      <TextField
        fullWidth
        size="small"
        placeholder="Search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSubmit();
          }
        }}
        sx={{
          "& .MuiOutlinedInput-root": {
            borderTopLeftRadius: "30px",
            borderBottomLeftRadius: "30px",
            borderTopRightRadius: 0,
            borderBottomRightRadius: 0,
            backgroundColor: "#fff",
          },
        }}
      />

      <IconButton
        onClick={handleSubmit}
        sx={{
          width: 65,
          height: 40,
          border: "1px solid #ccc",
          borderLeft: "none",
          borderTopRightRadius: "30px",
          borderBottomRightRadius: "30px",
          backgroundColor: "#f8f8f8",

          "&:hover": {
            backgroundColor: "#ececec",
          },
        }}
      >
        <SearchIcon />
      </IconButton>
    </Box>
  );
}

export default SearchBar;