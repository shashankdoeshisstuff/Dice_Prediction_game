import { useState } from "react"
import NumberSelector from "./NumberSelector"
import RoleDice from "./RoleDice"
import TotalScore from "./TotalScore"
import styled from 'styled-components'
import { Button, OutlineButton } from "../styled/Button"
import Rules from "./Rules"

const GamePlay = () => {
  const [score, setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [error, setError] = useState("");
  const [showRules, setShowRules] = useState(false);

  const generateRanNum = () => {
    return (Math.floor(Math.random()* 6) + 1);
  }

  const roleDice = () => {
      if(!selectedNumber){
        setError("You have not selected any number!")
        return;
      }

      const randomNumber = generateRanNum();
      setCurrentDice((prev) => randomNumber)

      if(randomNumber == selectedNumber) {
        setScore(prev => prev + randomNumber);
      } else {
        setScore(prev => prev - 2);
      }
      setSelectedNumber(undefined)
  } 
  
  const resetScore = () => {
    setScore(0);
  }

  return (
    <MainContainer>
      <div className="top_sec">
        <TotalScore score={score}/>
        <NumberSelector 
        error={error}
        setError={setError}
        selectedNumber={selectedNumber}
        setSelectedNumber={setSelectedNumber}
        />
      </div>
      <RoleDice
      newScore={score} 
      currentDice={currentDice}
      roleDice={roleDice}
      />
      <div className="btn">
        <OutlineButton
          onClick={resetScore}
        >Reset Score</OutlineButton>
        <Button 
          onClick={() => setShowRules((prev) => !prev)}
        >{showRules ? 'Hide' : 'Show'} Rules</Button>
      </div>
      {showRules && <Rules />}
    </MainContainer>
  )
}

export default GamePlay

const MainContainer = styled.main`
    padding-top: 50px;
  .top_sec {
    display: flex;
    justify-content: space-around;
    align-items: end;
  }

  .btn {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin-top: 40px;
  }
`