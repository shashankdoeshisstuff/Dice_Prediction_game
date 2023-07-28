import './App.css'
import styled from 'styled-components';
import StartGame from './components/StartGame';


const Button = styled.button`
  background-color: black;
  color: white;
  padding: 10px;
`;

function App() {

  return (
    <>
     <StartGame />
    </>
  )
}

export default App
