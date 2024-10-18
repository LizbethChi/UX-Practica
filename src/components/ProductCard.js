import React from "react";
import Button from "@mui/material/Button";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid2,
  Typography,
} from "@mui/material";

const ProductCard = ({ src, title, content }) => (
  <Grid2 size={{ xs: 12, sm: 6, md: 6, lg: 4 }}>
    <Box padding={0} mt={5}>
      <Card raised={true}>
        <CardMedia
          component="img"
          image={src}
          alt={title}
          sx={{ objectFit: "fill", height: 220,}}
        ></CardMedia>
        <CardContent>
          <Typography variant="h5" component="div" mb={2} color="textPrimary">{title}</Typography>
          <Typography variant="body2" color="textSecondary">{content}</Typography>
        </CardContent>
        <CardActions>
          <Button variant="contained" startIcon={<AddShoppingCartIcon/>} raised>
            
          <Typography variant="body2">Agregar al Carrito</Typography>
          </Button>
          <Button variant="outlined" color="secondary" raised>
          <Typography variant="body2">Ver Más</Typography>
          </Button>
        </CardActions>
      </Card>
    </Box>
  </Grid2>
);

export default ProductCard;
