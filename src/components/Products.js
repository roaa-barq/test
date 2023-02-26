import * as React from "react";
import "./Products.css";
import CardProduct from "./Card";
import data from "../fakeJson.json";
import { Grid } from "@material-ui/core";

const Products = () => {
  return (
    <Grid container className="productsPage">
      {data.products.map((product) => {
        return (
          <Grid item key={product.item_id} xs={10} sm={6} md={3}>
            <CardProduct
              key={product.item_id}
              img={product.img}
              imgHover={product.img_hover}
              id={product.item_id}
              name={product.item_name}
              price={product.price}
              rate={product.rate}
              review={product.reviews}
              colors={product.colors}
            />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Products;
