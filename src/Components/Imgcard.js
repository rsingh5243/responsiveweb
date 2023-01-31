import React from "react";
import { Card } from "react-bootstrap";
import imgone from "../img/imgone.jpg";
import "../Style.css";

export default function Imgcard(props) {
  return (
    <>
      <div className="container">
        <Card style={{ width: "18rem" }}>
          <Card.Img id="firstImg" variant="top" src={props.imgone} />
          <Card.Body>
            <Card.Title>{props.Name}</Card.Title>
            <Card.Text>{props.Bio}</Card.Text>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}
