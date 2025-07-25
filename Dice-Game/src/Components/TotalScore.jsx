import React from 'react'
import styled from 'styled-components';

const TotalScore = ({score}) => {
  return (
    <div>
        <ScoreContainer>
        <h1>{score}</h1>

        <p>Total Score</p>
        </ScoreContainer>

    </div>
  );
};

export default TotalScore

const ScoreContainer = styled.div`
    max-width: 200px;
    text-align: center;
    h1{
        font-size: 100px;
    }
    p{
        font-size: 25px;
        font-weight: 500;

    }

`;
