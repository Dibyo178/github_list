import React from "react";
import { Button, Card } from "react-bootstrap";
import { BsArrowRight } from "react-icons/bs";
import { useHistory } from "react-router";
import "./Card.scss";

const CardItem = (props) => {
  console.log(props);

  const { avatar_url, login, id } = props.data;

  const history = useHistory();

  const ShowTeam = (userId) => {
    const url = `/explore/${userId}`;
    history.push(url);
  };

  return (
    <div className="cardItem">
      <Card
        style={{ width: "18rem", marginBottom: "20px", marginLeft: "25px" }}
        className=" card"
      >
        <Card.Img
          variant="top"
          src={avatar_url}
          style={{
            width: "100px",
            height: "100px",
            marginLeft: "100px",
            borderRadius: "50%",
          }}
        />
        <Card.Body>
          <Card.Title className="text-center">{login}</Card.Title>
          <Card.Text></Card.Text>
          <Button
            variant="primary"
            onClick={() => ShowTeam(id)}
            className="button"
          >
            Explore <BsArrowRight />
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardItem;
