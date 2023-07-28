import { useState } from "react"
import { styled } from "styled-components"

const RoleDice = () => {
    const [currentDice, setCurrentDice] = useState(1);

    const generateRanNum = () => {
        return (Math.floor(Math.random()* 6) + 1);
    }

    const roleDice = () => {
        const randomNumber = generateRanNum();

        setCurrentDice((prev) => randomNumber)
    }  


  return (
    <DiceContainer>
        <div className="dice"
            onClick={roleDice}
        >
            <img src={`/public/images/dice_${currentDice}.png`} alt="dice_picture" />
        </div>
        <p>Cick on the Dice to roll</p>
    </DiceContainer>
  )
}

export default RoleDice

const DiceContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 48px;
    font-size:24px;

    .dice:hover {
        cursor: pointer; 
    }
`