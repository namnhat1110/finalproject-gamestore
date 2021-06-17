import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { Nav, Card, Col, Row } from 'react-bootstrap'
import { gameActions } from "../redux/actions";
import { Link } from 'react-router-dom'

function HomePage() {

  const dispatch = useDispatch();
  const games = useSelector((state) => state.game.games)
  useEffect(() => {
    dispatch(gameActions.getAll());
  }, [dispatch]);

  // Add random

  return (
    <div>
      <Row>
        <Col lg="3">
        </Col>
        <Col lg="9">
          <Row>
            {games?.map((m) => {
              return (
                <Col>
                  <Card className="m-3" style={{ width: "18rem" }}>
                    <Card.Body>
                      <Card.Title
                        style={{
                          height: 50,
                        }}
                      >{m.title}</Card.Title>
                      <hr className="solid"></hr>
                      <Card.Text
                        style={{
                          height: 120,
                          overflow: "hidden",
                          overflowY: "auto",
                        }}
                      >
                        {m.description}
                      </Card.Text>
                      <hr className="solid"></hr>
                      <Card.Text>
                        Genre: {m.genre}
                      </Card.Text>
                      <hr className="solid"></hr>
                      <Card.Text>
                        Average vote: {m.avg_vote} from {m.votes} votes
                      </Card.Text>
                      <Card.Text
                        style={{
                          height: 120,
                          overflow: "hidden",
                          overflowY: "auto",
                        }}
                      >
                        Developer: {m.developer}
                      </Card.Text>
                      <hr className="solid"></hr>
                      <Card.Text> Publisher: {m.publisher}</Card.Text>
                      <Nav.Link as={Link} to={`games/${m._id}`}>
                        View Detail
                      </Nav.Link>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export { HomePage };
