import React from "react";
import Card from "@material-ui/core/Card";
import "./Card.css";
import {
  CardActions,
  CardMedia,
  Typography,
  CardContent,
  CardActionArea,
  Button,
  Container,
  makeStyles,
} from "@material-ui/core";
import { blue } from "@material-ui/core/colors";
import { Link } from "react-router-dom";
import Rating from "material-ui-rating";

const useStyles = makeStyles((props) => ({
  card: {
    borderRadius: "0",
    margin: "20px",
    height: "600px",
  },
  img: {
    position: "absolute",
  },

  hoverImg: {
    position: "absolute",
    opacity: "0",
    "&:hover": {
      opacity: "1",
    },
  },
  imgColor: {
    height: "20px",
    width: "20px",
  },
  rate: {
    color: "blue",
  },
  button: {
    backgroundColor: "lightgrey",
    textTransform: "capitalize",
    height: "25px",
  },
  viewer: {
    fontSize: "14px",
    textTransform: "capitalize",
  },
  link: {
    color: "black",
    textDecoration: "none",
    "&:hover": {
      color: "grey",
      textDecoration: "underline",
    },
  },
  price: {
    paddingTop: "30px",
  },
  label: {
    fontSize: "12px",
    color: "#424242",
    paddingBottom: "10px",
  },
}));

export default function CardProduct(props) {
  const classes = useStyles(props.imgHover);
  return (
    <div>
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            className={classes.hoverImg}
            component="img"
            height="400"
            image={props.imgHover}
          />
          <CardMedia component="img" height="400" image={props.img} />

          <CardContent>
            <Typography className={classes.label}>NEW COLOR</Typography>
            <div className="grid">
              <div className="colorsImg">
                {props.colors.map((color) => {
                  return (
                    <CardMedia
                      className={classes.imgColor}
                      component="img"
                      key={color.id}
                      image={color.color}
                    ></CardMedia>
                  );
                })}
              </div>
              <Button className={classes.button} variant="contained">
                More
              </Button>
            </div>
            <Link className={classes.link} size="small" color="black">
              {props.name}
            </Link>
            <Typography className={classes.price}>{props.price}</Typography>
            <div className="grid">
              <Rating
                value={props.rate}
                max={5}
                readOnly
                className={classes.rate}
              />
              <Typography className={classes.viewer} color="black">
                ({props.review} Reviews)
              </Typography>
            </div>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}
