import React from "react";

// Material UI
import { Typography } from "@material-ui/core";

// Components
import Product from "components/Product";

// Images
import chickenImg from "assets/img/pechugadepollo.png";
import molida from "assets/img/carnemolida.png";
import huevos from "assets/img/huevos.png";
import bistec from "assets/img/bistec.png";

// Styles
import styles from "./styles";

const Products = () => {
  const classes = styles();
  return (
    <div className={classes.container}>
      <div className={classes.contentTitle}>
        <Typography component="h4">Carne</Typography>
        <Typography component="p">Ver Todos</Typography>
      </div>
      <div className={classes.content}>
        <div className={classes.contentProducts}>
          <Product srcImage={chickenImg} />
          <Product srcImage={huevos} selected />
          <Product srcImage={molida} />
          <Product srcImage={bistec} />
          <Product srcImage={chickenImg} selected />
          <Product srcImage={molida} />
          <Product srcImage={huevos} />
        </div>
      </div>
    </div>
  );
};

export default Products;
