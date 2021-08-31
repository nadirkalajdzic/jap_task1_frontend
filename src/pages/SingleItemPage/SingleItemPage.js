import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Paragraph from "antd/lib/typography/Paragraph";
import Chip from "@material-ui/core/Chip";
import { Image } from "antd";

import Page from "../../components/Page/Page";

import "./SingleItemPage.css";
import "antd/dist/antd.css";
import popcorn from "../../popcornimg";
import { StyledRating } from "../../components/ItemCard/Style";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  chip: {
    borderRadius: 4,
    fontFamily: "Open Sans, sans-serif",
    color: "var(--black-color)",
    fontWeight: "bold",
    marginRight: 5,
  },
  paragraph: {
    fontFamily: "Open Sans, sans-serif",
    color: "var(--black-color)",
  },
});

function SingleItemPage() {
  const params = useParams();
  const classes = useStyles();
  //useEffect(() => {}, []);

  return (
    <Page>
      <div className="single-item-page">
        <div className="single-item-page-breadcrumbs">
          <Breadcrumbs separator="/">
            <Link className="single-item-link-breadcrumb bold" to="/">
              Moviesapp
            </Link>
            <div className="single-item-page-current">Title</div>
          </Breadcrumbs>
        </div>
        <div className="single-item-page-content">
          <div className="single-item-page-image">
            <Image
              className="single-item-img"
              src={popcorn}
              fallback={popcorn}
            />
          </div>
          <div className="single-item-page-title">Movie Title</div>
          <div className="single-item-page-rating">
            <p>Rating: 3.0</p>
            <div>
              <StyledRating
                name="read-only"
                style={{ marginBottom: 10 }}
                value={3}
                precision={0.1}
                style={{ height: 30 }}
                readOnly
              />
            </div>
          </div>
          <div className="single-item-page-chips">
            <Chip size="small" label="ACTION" className={classes.chip} />
            <Chip size="small" label="COMEDY" className={classes.chip} />
            <Chip size="small" label="ROMANCE" className={classes.chip} />
            <Chip size="small" label="THRILLER" className={classes.chip} />
          </div>
          <div className="single-item-page-description">
            <Paragraph
              className={classes.paragraph}
              ellipsis={{ rows: 7, expandable: true, symbol: "show more" }}
            >
              {new Array(1430).fill("s").map(() => (
                <>s</>
              ))}
            </Paragraph>
          </div>
        </div>
      </div>
    </Page>
  );
}

export default SingleItemPage;
