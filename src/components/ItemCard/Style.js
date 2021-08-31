import Rating from "@material-ui/lab/Rating";

import { makeStyles, withStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  root: {
    maxWidth: 300,
    boxShadow: "none",
    margin: "0 auto",
  },
  media: {
    height: 200,
    width: "65%",
    margin: "0 auto",
  },
  title: {
    fontWeight: 550,
    fontSize: 24,
    marginBottom: 10,
    color: "var(--black-color)",
  },
  description: {
    color: "var(--grey-color)",
  },
  button: {
    borderColor: "var(--button-color)",
    borderWidth: 2,
    color: "var(--button-color)",
  },
  align: {
    margin: "0 auto",
    display: "inherit",
    padding: 20,
  },
  ellipsis: {
    textOverflow: "ellipsis",
    overflow: "hidden",
  },
});

export const StyledRating = withStyles({
  iconFilled: {
    color: "var(--black-color)",
  },
})(Rating);
