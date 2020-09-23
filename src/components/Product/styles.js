import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(({ palette }) => ({
  product: {
    width: 180,
    height: 220,
    borderRadius: 15,
    backgroundColor: "#fff",
    marginRight: 10,
  },
  detailsProduct: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    position: "relative",

    "& h4": {
      fontWeight: "600",
      fontSize: 18,
      color: palette.secondary.dark,
      marginBottom: 2,
      marginLeft: 16,
    },
  },
  details: {
    display: "flex",
    flexDirection: "column",
    padding: "0 16px",
  },
  descuent: {
    fontSize: 12,
    fontWeight: "600",
    textDecoration: "line-through",
    color: palette.error.main,
  },
  price: {
    fontSize: 16,
    fontWeight: "600",
    color: palette.warning.main,
  },
  contentImg: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 135,
  },
  img: {
    width: 135,
    height: 135,
  },
  buttonCar: {
    width: 40,
    height: 30,
    position: "absolute",
    backgroundColor: palette.error.main,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    bottom: 0,
    right: 0,

    "&:hover": {
      backgroundColor: palette.error.main,
    },
  },
  porcent: {
    width: 40,
    height: 36,
    position: "absolute",
    backgroundColor: palette.warning.main,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    top: 0,
    right: 0,
    borderBottomLeftRadius: 20,
    borderTopRightRadius: 15,

    "& p": {
      fontWeight: "600",
      color: "#fff",
      fontSize: 14,
    },
  },
  cardOpen: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center",
    padding: "0 16px",
  },
  buttonsCard: {
    width: "100%",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    borderRadius: 20,
    border: "2px solid red",
    marginBottom: 12,
  },
}));
