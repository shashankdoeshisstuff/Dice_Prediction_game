import styled from 'styled-components';
 
const StartGame = () => {
  return (
    <Container>
        <div>
            <img src="/public/images/dices 1.png" alt="dices" />
        </div>
        <div className='content'>
            <h1>DICE GAME</h1>
            <Button>
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

const Button = styled.button`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px 18px;
    gap: 10px;
    width: 220px;
    height: 44px;
    background: black;
    border-radius: 5px;
    border: none;
    color: white;
    font-size: 16px;
    font-weight: 600; 
    transition: 0.3s background ease-in;

    &:hover {
        background-color: grey;
        cursor: pointer;
        border: 2px solid black;
        color: black;
        transition: 0.3s background ease-in;
    }
`;