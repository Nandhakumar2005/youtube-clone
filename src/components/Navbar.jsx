import {
  AppBar,
  Toolbar,
  Typography,
  Box,
} from "@mui/material";

import SearchBar from "./SearchBar";

function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography
  variant="h6"
  sx={{
    fontWeight: "bold",
    color: "white",
  }}
>
  YouTube clone
</Typography>

        <Box sx={{ flexGrow: 1 }} />

        <SearchBar />
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;