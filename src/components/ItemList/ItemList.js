import React, { useState } from "react";

import ItemCard from "../ItemCard/ItemCard";
import Button from "@material-ui/core/Button";

import { useStyles } from "../ItemCard/Style";
import "./ItemList.css";

function ItemList() {
  const classes = useStyles();
  const array = new Array(12).fill(13);
  const [more, setMore] = useState(10);

  const showMore = () => setMore((prevState) => prevState + 10);

  // pairing logic for cards with show more
  const rows = array.slice(0, more).reduce(function (rows, key, index) {
    return (
      (index % 2 == 0 ? rows.push([key]) : rows[rows.length - 1].push(key)) &&
      rows
    );
  }, []);

  return (
    <div className="item-list">
      <div className="item-pair-list">
        {rows.map((x, key) => {
          return (
            <div className="pair-item" key={key}>
              <div>
                <ItemCard />
              </div>
              {x[1] != null && (
                <div>
                  <ItemCard />
                </div>
              )}
            </div>
          );
        })}
      </div>
      <div
        className={`item-list-show-more ${more >= array.length && "hidden"}`}
      >
        <Button
          variant="outlined"
          className={classes.button}
          onClick={showMore}
        >
          VIEW MORE RESULTS
        </Button>
      </div>
    </div>
  );
}

export default ItemList;
