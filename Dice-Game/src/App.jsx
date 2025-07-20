import { useState } from 'react';
import FirstPage from './Components/FirstPage';
import SecondPage from './Components/SecondPage';



function App() {
  
  const [isFirstPage, SetIsFirstPage] = useState(false);

  const toggleGamePlay = () => {
    SetIsFirstPage((prev) => !prev);
  }

  return (
    <>
    {isFirstPage ? <SecondPage/> : <FirstPage  
    toggle = {toggleGamePlay}/>}
    {/* <SecondPage/> */}
    </>
  );
}

export default App;
