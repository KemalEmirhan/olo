import styled from 'styled-components';

const PasswordInput = styled.input.attrs({
    type: 'password'
})`
    width: 100%;
    height: 3rem;
    background-color: #ececec;
    border-radius: 12px;
    padding: 0 2rem;
    border: none;
    outline: none;
    font-size: 14px;
    font-weight: normal;
    letter-spacing: 1px;
    line-height: 1.5;
    color: #111;
`;

export default PasswordInput;
