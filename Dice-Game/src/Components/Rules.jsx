import React from 'react'
import Styled from 'styled-components';

const Rules = () => {
  return (
    <RulesContainer>
      <h2>How to play dice game</h2>
      <div className="text">
        <p>

        1. Select any number <br />
        2. Click on dice image <br />
        3. after click on  dice  if selected number is equal to dice number you will get same point as dice <br />
        4. if you get wrong guess then  2 point will be dedcuted 
        </p>
      </div>
    </RulesContainer>
  )
}

export default Rules;

const RulesContainer = Styled.div`
    background-color : #dccacef3;
    padding : 20px;
    display : flex;
    flex-direction : column;
    align-items : center;
    max-width : 750px;
    margin: 25px auto 0 auto;
    h2{
        font-size : 24px;
    }
    .text{
        margin-top : 24px;
    }

`;
