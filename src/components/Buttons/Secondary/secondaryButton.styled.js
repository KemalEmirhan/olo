import styled from 'styled-components';

const BtnSecondary = styled.button`
    width: 100%;
    height: 2.8rem;
    border: 1px solid #ddd;
    border-radius: 2rem;
    background-color: transparent;
    color: #ddd;
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

    &:active {
        transform: scale(0.95);
        outline: none;
    }

    &:visited,
    &:link {
        outline: none;
    }
`;

export default BtnSecondary;
