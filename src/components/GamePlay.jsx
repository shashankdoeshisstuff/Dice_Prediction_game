import NumberSelector from "./NumberSelector"
import RoleDice from "./RoleDice"
import TotalScore from "./TotalScore"
import styled from 'styled-components'

const GamePlay = () => {
  return (
    <MainContainer>
      <div className="top_sec">
        <TotalScore />
        <NumberSelector />
      </div>
      <RoleDice />
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
`