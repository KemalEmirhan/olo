import styled from 'styled-components';

const BtnSecondary = styled.button`
  width: 100%;
  height: 2.8rem;
  border: 1px solid #111;
  border-radius: 2rem;
  background-color: transparent;
  color: #111;
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
    transform: translateY(3px);
    outline: none;
  }

  &:visited,
  &:link {
    outline: none;
  }
`;

export default BtnSecondary;
