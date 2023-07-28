import { useState } from 'react';
import styled from 'styled-components'

const NumberSelector = () => {
    const arrNumber = [1, 2, 3, 4, 5, 6];
    const [selectedNumber, setSelectedNumber] = useState();

    return (
        <NumSecContainer>
            <div className="flex">
            {arrNumber.map((value, i) => (
                <Box
                isSelected={value == selectedNumber}
                key={i} 
                onClick={() => setSelectedNumber(value)}
                >
                    {value}
                </Box>
            ))}
            </div>
            <p>Select Number</p>
        </NumSecContainer> 
    )
}

export default NumberSelector

const NumSecContainer = styled.div`
    display: flex;
    flex-direction: column;
    .flex {
        display: flex;
        gap: 24px;
    }
    p {
        align-self: flex-end;
        font-size: 24px;
        font-weight: 500;
    }
`

const Box = styled.div`
    height: 72px;
    width: 72px;
    border: 2px solid black;
    display: grid;
    place-items: center;
    font-size: 24px;
    font-weight: 700;
    background-color: ${(props) => (props.isSelected ? "black" : "white")};
    color: ${(props) => (!props.isSelected ? "black" : "white")};
`