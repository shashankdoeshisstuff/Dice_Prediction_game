import styled from 'styled-components'

const Rules = () => {
  return (
    <RulesContainer>
        <h2>How to play this Dice Game?</h2>
        <div className="text">
            <p>Select any number</p>
            <p>Click on dice image</p>
            <p>after click on dice if selected 
                number is equal to dice number 
                you will get same point as dice
            </p>
            <p>if you get wrong guess then 2 point will be dedcuted</p>
        </div>
    </RulesContainer>
  )
}

export default Rules

const RulesContainer = styled.div`
    background-color: lightgray;
    padding: 20px;
    margin: 48px auto;
    max-width: 800px;
    border-radius: 12px;
    h2 {
        font-size: 24px;
        margin-top: 10px;
    }
    .text {
        margin-top: 24px;
        line-height: 10px;
    }
`