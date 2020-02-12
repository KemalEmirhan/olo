import styled from 'styled-components';

const BtnInline = styled.button`
    width: 100%;
    height: 2.8rem;
    border: none;
    background-color: transparent;
    border-block-end: 1px solid #ddd;
    color: #111;
    font-size: 1rem;
    font-weight: 400;
    letter-spacing: 1px;
    outline: none;
    cursor: pointer;

    display: flex;
    place-content: center;
    align-items: center;

    transition: border-block-end 0.2s ease-in-out;

    &:hover {
        border-block-end: 1px solid #111;
    }
`;

export default BtnInline;
