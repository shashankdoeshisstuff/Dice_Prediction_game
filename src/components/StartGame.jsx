import styled from 'styled-components';
import { Button } from '../styled/Button';
 
const StartGame = ({ toggle }) => {
  return (
    <Container>
        <div>
            <img src="/public/images/dices 1.png" alt="dices" />
        </div>
        <div className='content'>
            <h1>DICE GAME</h1>
            <Button
                onClick={toggle}
            >
                Play Now
            </Button>
        </div>
    </Container>
  )
}

export default StartGame;

const Container = styled.div`
    max-width: 1180px;
    display: flex;
    height: 100vh;
    margin: 0 auto;
    align-items: center;

    .content {
        display: flex;
        flex-direction: column;
        Button {
            align-self: flex-end;
        }

        h1 {
            margin: 0px;
            font-size: 96px;
            white-space: nowrap;
        }
    }

`;