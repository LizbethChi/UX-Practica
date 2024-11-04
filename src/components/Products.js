import React from "react";
import ProductCard from "../components/ProductCard";
import { Grid2 } from "@mui/material";

const Products = () => (
    <Grid2 container spacing={{xs:1, sm:1, md:2, lg:4}}>
        
          <ProductCard
            src="https://cdn.pixabay.com/photo/2016/03/27/19/23/tart-1283822_1280.jpg"
            title="Raspberry Cake"
            content = "Pastel de moras, pequeño"/>
        

          <ProductCard
            src="https://cdn.pixabay.com/photo/2024/04/01/06/57/cookies-8668140_1280.jpg"
            title="Chocolate Cookies"
            content="Galletas de avena con chocolate"/>
       
          <ProductCard
          src="https://cdn.pixabay.com/photo/2017/05/24/21/31/dessert-2341634_1280.jpg"
          title="Fruits Cake"
          content="Pastel de bayas dulces, pequeño."/>

          <ProductCard
          title="Tarta"
          content="Esta tarta es una expresion de la diversion no solo por su divertida forma si no por el cautivante sabor "
          src="https://th.bing.com/th/id/OIG2.E7KLX2EzQ.qF7xYFLOjg?w=1024&h=1024&rs=1&pid=ImgDetMain"
          />

          
    </Grid2>
);

export default Products;
