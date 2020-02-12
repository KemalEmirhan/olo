import styled from 'styled-components';

const TextInput = styled.input.attrs({
    type: 'text'
})`
    width: 100%;
    height: 3rem;
    background-color: #ececec;
    border-radius: 6px;
    padding-inline-start: 4px;
    border: none;
`;

export default TextInput;
