import styled from "styled-components";

export const Button = styled.button`
min-width: 200px;
background-color: black;
color: white;
padding:5px 20px;
border-radius: 5px;
font-size: 20px;
box-shadow: 1px 1px 0 0 gray;
border: 1px solid transparent;
/* margin-left: 50%; */
transition: 0.3s background ease-in;

&:hover{
background-color: white;
color: black;
border: 1px solid black;
box-shadow: 1px 1px 0 0 gray;
transition: 0.3s background ease-in;
}
`; 

export const OutlineButton = styled(Button)`
    background-color: white;
    border: 1px solid black;
    color: black;

    &:hover{
    background-color: black;
    border: 1px solid transparent;
    color: white; 
} 
`;
