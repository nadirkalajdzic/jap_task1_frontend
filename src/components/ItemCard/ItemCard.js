import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Paragraph from "antd/lib/typography/Paragraph";
import { useHistory } from "react-router-dom";

import Button from "@material-ui/core/Button";
import popcorn from "../../popcornimg";

import { useStyles, StyledRating } from "./Style";
import "./ItemCard.css";

function ItemCard({ item }) {
  const history = useHistory();
  const classes = useStyles();

  var rating = item.ratings.reduce((a, b) => a + b.value, 0);
  item.ratings.length !== 0
    ? (rating = rating / item.ratings.length)
    : (rating = undefined);

  const goToMovie = () => history.push(`/item/${item.id}`);

  return (
    <div className="single-card">
      <Card className={classes.root}>
        <CardActionArea onClick={goToMovie}>
          <CardMedia
            className={classes.media}
            image={item.image_Url === "" ? popcorn : item.image_Url}
            title="Image"
          ></CardMedia>
          <CardContent>
            <div className={classes.title}>
              <Paragraph ellipsis={{ rows: 2, expandable: false }}>
                {item.title}
              </Paragraph>
            </div>
            <div>
              <StyledRating
                name="read-only"
                style={{ marginBottom: 10 }}
                value={rating}
                precision={0.1}
                readOnly
              />
            </div>
            <div
              className={classes.ellipsis}
              style={{ color: "var(--grey-color)" }}
            >
              <Paragraph ellipsis={{ rows: 3, expandable: false }}>
                {item.description}
              </Paragraph>
            </div>
          </CardContent>
        </CardActionArea>
        <CardActions className={classes.align}>
          <Button
            variant="outlined"
            className={classes.button}
            onClick={goToMovie}
          >
            GO TO MOVIE
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default ItemCard;
