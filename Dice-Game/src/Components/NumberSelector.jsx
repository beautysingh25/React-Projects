import styled from 'styled-components';


const NumberSelector = ({setError, error, selectedNum, setSelectedNum}) => {

  const nums = [1,2,3,4,5,6];

  const numSelectorHandler = (value) => {
    setSelectedNum(value);
    setError("");
  }

  return (
    <NumberSelectorContainer>
      <p className='error'>{error}</p> 
      <div className="flex">
        {nums.map((value, i) => (
          <Box className='box'
            isSelected={value === selectedNum}
            key={i} 
            onClick={() => numSelectorHandler(value)}>{value}
          </Box>
        ))} 
      </div> 
      <p>Select Number</p>
    </NumberSelectorContainer>
  );
};

export default NumberSelector;



const Box = styled.div`
height: 72px;
width: 72px;
border: 1px solid black;
display: grid;
place-items: center;
font-size: 24px;
font-weight: 700;
direction: row;
cursor : pointer;
background-color: ${(props) => props.isSelected ? "black"  
: "white"};
color: ${(props) => props.isSelected ? "white"  
: "black"};

/* &:hover{
  background-color:gray;
} */
`;
const NumberSelectorContainer = styled.div` 
  .flex{
  display : flex;
  flex-wrap : wrap;
  gap : 24px;
  }
  p{
  font-size: 24px;
  font-weight: 700;
  float: right;
  }
  .error{
    color: red;
  }

`;
