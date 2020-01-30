import styled from 'styled-components';

export const ButtonDefault = styled.button`
  width: 10rem;
  height: 4rem;
  border: none;
  border-radius: 1rem;
  background-color: #58af9b;
  color: #ddd;

  display: flex;
  place-content: center;
  align-items: center;
`;

export const ButtonSecondary = styled.button`
  width: 10rem;
  height: 4rem;
  border: 1px solid #fff;
  border-radius: 1rem;
  background-color: transparent;
  color: #ddd;

  display: flex;
  place-content: center;
  align-items: center;
`;

export const ButtonInline = styled.button`
  width: 10rem;
  height: 4rem;
  border: none;
  background-color: transparent;
  border-block-end: 1px solid #cacaca;
  color: #ddd;

  display: flex;
  place-content: center;
  align-items: center;
`;
