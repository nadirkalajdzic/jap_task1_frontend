import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import popcorn from "./popcornimg";

import { useStyles, StyledRating } from "./Style";
import "./ItemCard.css";

function ItemCard() {
  const classes = useStyles();
  return (
    <div className="single-card">
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={popcorn}
            title="Movie Image"
          />

          <CardContent>
            <div className={(classes.ellipsis, classes.title)}>Movie Title</div>
            <div>
              <StyledRating
                name="read-only"
                style={{ marginBottom: 10 }}
                value={3.5}
                precision={0.1}
                readOnly
              />
            </div>
            <div
              className={classes.ellipsis}
              style={{ color: "var(--grey-color)" }}
            >
              {new Array(100).fill(null).map(() => {
                return <>i</>;
              })}
            </div>
          </CardContent>
        </CardActionArea>
        <CardActions className={classes.align}>
          <Button variant="outlined" className={classes.button}>
            GO TO MOVIE
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default ItemCard;
