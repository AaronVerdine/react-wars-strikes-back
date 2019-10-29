import React from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  Row,
  Col
} from "reactstrap";

const CharCard = props => {
  return (
    <div className="props">
      <Row>
        <Col sm="6">
          <Card className="card-stylz">
            <CardImg
              className="catPics"
              src="http://placekitten.com/200/300"
              alt={props.name}
            />
            <CardBody>
              <CardTitle>{props.name}</CardTitle>
              <CardSubtitle>{props.gender}</CardSubtitle>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default CharCard;
