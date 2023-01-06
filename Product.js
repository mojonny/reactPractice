/** @format */

import React from "react";
import Card from "react-bootstrap/Card";
import Rating from "./Rating";

const Product = (props) => {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={props.data.imageURL} />
        <Card.Body>
          <Card.Title>{props.data.productName}</Card.Title>
          <Card.Text>{props.data.releaseDate}</Card.Text>
          <Rating
            rating={props.data.rating}
            numOfReviews={props.data.numOfReviews}
          />
          <Card.Text>{props.data.description}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Product;
