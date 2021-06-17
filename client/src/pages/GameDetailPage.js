import React, { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { Container, Jumbotron } from 'react-bootstrap'
import { gameActions } from "../redux/actions";

function GameDetailPage() {

  const dispatch = useDispatch();
  const games = useSelector((state) => state.game.games)
  useEffect(() => {
    dispatch(gameActions.getSingleGame());
  }, [dispatch]);

  // Add random

  return (
    <div>
      <Container>
        <Jumbotron className='bg-white'>
          <h1>{games.title}</h1>

        </Jumbotron>

      </Container>
    </div>
  );
}

export { GameDetailPage };
