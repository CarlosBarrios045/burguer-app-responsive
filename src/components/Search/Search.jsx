import React from "react";

// Material UI
import { Button } from "@material-ui/core";

// Icons
import { GoSearch } from "react-icons/go";

// Styles
import styles from "./styles";

const Search = () => {
  const classes = styles();
  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <div className={classes.contentButton}>
          <div className={classes.search}>
            <GoSearch size={20} />
          </div>
          <Button className={classes.buttonSelected}>Menú</Button>
          <Button className={classes.button}>Carne</Button>
          <Button className={classes.button}>Víveres</Button>
          <Button className={classes.button}>Cerdo</Button>
          <Button className={classes.button}>Más</Button>
        </div>
      </div>
    </div>
  );
};

export default Search;
