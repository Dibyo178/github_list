import React, { useEffect, useState } from "react";
import { Container, Navbar } from "react-bootstrap";
import Card from "../Card/Card";
import "./Homepage.scss";

const HomePage = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    const url = "https://api.github.com/search/users?q=adre";

    fetch(url)
      .then((response) => response.json())
      .then((data) => setList(data.items));
  }, []);

  console.log(list);
  return (
    <div>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home" style={{ marginLeft: "470px" }}>
            Github profile
          </Navbar.Brand>
        </Container>
      </Navbar>
      <br />
      <div>
        {list.slice(0, 14).map((data) => (
          <Card data={data}></Card>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
