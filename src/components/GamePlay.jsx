import NumberSelector from "./NumberSelector"
import TotalScore from "./TotalScore"
import styled from 'styled-components'

const GamePlay = () => {
  return (
    <MainContainer>
      <div className="top_sec">
        <TotalScore />
        <NumberSelector />
      </div>
    </MainContainer>
  )
}

export default GamePlay

const MainContainer = styled.main`
  .top_sec {
    display: flex;
    justify-content: space-around;
    align-items: end;
  }
`