import styled from 'styled-components';

const BtnDefault = styled.button`
    width: 100%;
    height: 2.8rem;
    border: none;
    border-radius: 2rem;
    background-color: #58af9b;
    color: #fff;
    font-size: 1rem;
    font-weight: 400;
    letter-spacing: 1px;
    text-transform: uppercase;
    outline: none;
    cursor: pointer;

    display: flex;
    place-content: center;
    align-items: center;

    transition: all 0.15s ease-in-out;

    &:hover {
        box-shadow: 0px 5px 2px 0px #ddd;
    }

    &:active {
        transform: scale(0.95);
        outline: none;
    }

    &:visited,
    &:link {
        outline: none;
    }
`;

export default BtnDefault;
