import React from "react";

// Material UI
import { Typography, Button } from "@material-ui/core";

// Icons
import { IoIosArrowDown } from "react-icons/io";
import { GiVenezuela } from "react-icons/gi";
import burguerSrc from "assets/img/burguer.jpg";

// Styles
import styles from "./styles";

const Header = () => {
  const classes = styles();
  return (
    <header className={classes.header}>
      <div className={classes.content}>
        <img src={burguerSrc} alt="burguer" className={classes.img} />
        <Typography component="h1" className={classes.title}>
          Burguer Montería <IoIosArrowDown size={18} />
        </Typography>
        <Typography component="p" className={classes.subtitle}>
          Lunes: 9:00 AM - 11:00 PM <IoIosArrowDown size={18} />
        </Typography>
        <Typography component="p" className={classes.textOpen}>
          Abierto
        </Typography>
      </div>
      <div className={classes.country}>
        <GiVenezuela style={{ marginRight: 5 }} /> Venezuela
      </div>
    </header>
  );
};

export default Header;
