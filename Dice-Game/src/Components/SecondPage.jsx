import TotalScore from './TotalScore';
import NumberSelector from './NumberSelector';
import Styled from 'styled-components';
import RollDice from './RollDice';
import { useState } from 'react';
import { Button } from '../Styled/Button.JS';
import {OutlineButton} from '../Styled/Button.JS';
import Rules from './Rules';


const SecondPage = () => {
    const [score, setScore] = useState(0);
    const [selectedNum, setSelectedNum] = useState();
    const [currDice, setCurrDice] = useState(1);
    const [error, setError] = useState("");
    const [showRules, setShowRules] = useState(false);

    const generateRandomNum = (min, max) => {
        return Math.floor(Math.random() * (max - min) + min);
    };

    
    const rollDice = () => {
        if(!selectedNum) {
            setError("You have not selected any number");
            return;
        }

        const randomNum = generateRandomNum(1, 7);
        setCurrDice((prev) => randomNum);

        if(selectedNum === randomNum){
            setScore((prev) => prev + randomNum);
        }else{
            setScore((prev) => prev - 2);
        }

        setSelectedNum(undefined);

    };

    const resetScore = () => {
        setScore(0);
    }

    
    


    return (
        <MainContainer>
            <div className='topContainer'>
                <TotalScore score={score} />
                <NumberSelector 
                error={error}
                setError={setError}
                selectedNum ={selectedNum}
                setSelectedNum ={setSelectedNum}/>
            </div >
            <RollDice
                currDice={currDice}
                rollDice={rollDice}
            />
           <div className="btns">
                <OutlineButton onClick={resetScore}>Reset</OutlineButton>
                <Button 
                onClick={() => setShowRules(prev => !prev)}
                >{showRules ? "Hide" : "Show"} Rules</Button>
           </div>
           { showRules && <Rules/> }
        </MainContainer>

    );
}
export default SecondPage;

const MainContainer = Styled.div` 
    
    .topContainer{
        max-width : 1600px;
        margin : 10px auto;
        display : flex;
        justify-content : space-between;
        align-items : center;
    }
    .btns{
        display : flex;
        flex-direction : column;
        align-items : center;
        margin-left: 0;
        gap : 25px;
    }

`;
