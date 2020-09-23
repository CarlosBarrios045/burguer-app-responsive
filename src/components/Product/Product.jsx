import React from "react";

// Material UI
import { Button, Typography } from "@material-ui/core";

// Icons
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoIosAdd } from "react-icons/io";
import { FiTrash } from "react-icons/fi";

// Styles
import styles from "./styles";

const Product = ({ selected, srcImage }) => {
  const classes = styles();
  return (
    <div className={classes.product}>
      <div className={classes.detailsProduct}>
        <div className={classes.contentImg}>
          <img className={classes.img} src={srcImage} alt="product" />
        </div>

        <Typography component="h4" className={classes.title}>
          Alas de Pollo
        </Typography>
        {!selected ? (
          <>
            <div className={classes.details}>
              <Typography component="p" className={classes.descuent}>
                $ 4.50
              </Typography>
              <Typography component="p" className={classes.price}>
                $ 4.15
              </Typography>
            </div>
            <Button className={classes.buttonCar}>
              <AiOutlineShoppingCart size={20} color="#fff" />
            </Button>
            <div className={classes.porcent}>
              <Typography component="p">15%</Typography>
            </div>
          </>
        ) : (
          <>
            <div className={classes.cardOpen}>
              <div className={classes.buttonsCard}>
                <Button className={classes.buttons}>
                  <FiTrash size={20} color="#cbd7e2" />
                </Button>
                <Typography component="p">1</Typography>

                <Button className={classes.buttons}>
                  <IoIosAdd size={20} color="#c40808" />
                </Button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Product;
