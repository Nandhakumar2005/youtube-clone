import { AppBar, Toolbar, Typography, Box, InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import SmartDisplayIcon from "@mui/icons-material/SmartDisplay";

function Navbar() {
  return (
    <AppBar
      position="sticky"
      sx={{
        bgcolor: "white",
        color: "black",
        boxShadow: "0 1px 4px rgba(0,0,0,0.1)",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
          }}
        >
          <SmartDisplayIcon
            sx={{
              color: "#ff0000",
              fontSize: 42,
            }}
          />

          <Typography
            variant="h5"
            sx={{
              fontWeight: "bold",
              color: "black",
            }}
          >
            YouTube
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            width: "45%",
            border: "1px solid #ccc",
            borderRadius: "30px",
            overflow: "hidden",
          }}
        >
          <InputBase
            placeholder="Search"
            sx={{
              flex: 1,
              px: 2,
            }}
          />

          <Box
            sx={{
              width: 60,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              bgcolor: "#f8f8f8",
              cursor: "pointer",
            }}
          >
            <SearchIcon />
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;