import styled from 'styled-components'
import { Button } from '../Styled/Button.JS';



const FirstPage = ({toggle}) => {

    

    return (
        <Container>
            
            <Img src="image.png" alt="dice" />   
            <div className='diceGame'>
                <h1>DICE GAME</h1>
                <Button 
                onClick={toggle}
                >Play Now</Button>
            </div>
                  
        </Container>
        
    );
}
export default FirstPage;
const Container = styled.div`
    display: flex;
    margin: 0 auto;
    height: 100vh;
    max-width: 80%;
    align-items: center;
    gap : 200px;

    .diceGame{
        h1{
        font-size: 500%;
        white-space: nowrap;
        margin-bottom : 25px;
        }
    }

    Button{
        float: right;
    }
    `;



const Img = styled.img`
height: 50%;

`;
