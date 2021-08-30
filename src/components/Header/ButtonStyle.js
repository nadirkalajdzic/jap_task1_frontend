import { makeStyles } from "@material-ui/core/styles";

const useButtonStyle = makeStyles({
  button: {
    "&:hover": {
      backgroundColor: "black",
    },

    width: "100px",
    height: "35px",
    padding: "10px",
    background: "#29323d",
    color: "#ffffff",
    borderColor: "#29323d",
    borderWidth: "1px",
    borderStyle: "solid",
    borderRadius: "4px 4px 4px 4px",
    fontFamily: "Open Sans",
    fontWeight: 700,
    fontSize: "12px",
    textAlign: "center",
  },
});

export default useButtonStyle;
