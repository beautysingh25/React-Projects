// import styles from "./FirstPage.module.css";
import styled from 'styled-components'
// import Buttons from "./Buttons";



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
    border: 2px solid red;
    margin: 0 auto;
    height: 100vh;
    max-width: 80%;
    align-items: center;

    .diceGame{
        h1{
        font-size: 500%;
        white-space: nowrap;
        }
    }
    `;

const Button = styled.button`
min-width: 200px;
background-color: black;
color: white;
padding:5px 20px;
border-radius: 5px;
font-size: 20px;
box-shadow: 1px 1px 0 0 gray;
border: 1px solid transparent;
margin-left: 50%;
transition: 0.3s background ease-in;



&:hover{
background-color: white;
color: black;
border: 1px solid black;
box-shadow: 1px 1px 0 0 gray;
transition: 0.3s background ease-in;
}
`;

const Img = styled.img`
height: 50%;

`;
