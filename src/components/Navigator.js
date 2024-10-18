import { AppBar, Box, Typography,Toolbar } from "@mui/material";
import React from "react";

function Navigator() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h5" component="div" sx={{ flexGrow: 2 }}>
            Ejemplo de Productos
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navigator;
