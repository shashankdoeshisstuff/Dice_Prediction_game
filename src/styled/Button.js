import styled from 'styled-components'

export const Button = styled.button`
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
        background-color: white;
        cursor: pointer;
        border: 2px solid black;
        color: black;
        transition: 0.3s background ease-in;
    }
`;

export const OutlineButton = styled(Button)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px 18px;
    gap: 10px;
    width: 220px;
    height: 44px;
    background: transparent;
    border-radius: 5px;
    border: 2px solid black;
    color: black;
    font-size: 16px;
    font-weight: 600; 
    transition: 0.3s background ease-in;

    &:hover {
        background-color: black;
        cursor: pointer;
        border: none;
        color: white;
        transition: 0.3s background ease-in;
    }
`;