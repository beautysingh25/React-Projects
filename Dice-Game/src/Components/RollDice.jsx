import Styled from 'styled-components';
import { Button } from '../Styled/Button.JS';


const RollDice = ({currDice, rollDice}) => {

  return (
    <DiceContainer>
      <div 
        className='dice'
        onClick={rollDice}>
          <img src={`Dices/dice_${currDice}.png`} alt="rollDice" />
      </div>
      <p>Click on Dice to roll</p>

    </DiceContainer>
    
  )
}

export default RollDice;

const DiceContainer = Styled.div`
  display : flex;
  flex-direction : column;
  align-items: center;
  margin-top : 50px;
  img{
    cursor : pointer;
  }
  p{
  font-size : 24px;
  font-weight: 600;
  }


`;
