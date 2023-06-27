import styled from '@emotion/styled';

export const FormSearch = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  padding: 10px;
  border-radius: 5px;
  background-color: #fff;
  width: 300px;
`;

export const Input = styled.input`
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #000;
  margin-right: 10px;
  width: 100%;
`;

export const Button = styled.button`
  padding: 10px;
  border-radius: 5px;
  background-color: #fff;
  border: 1px solid #000;
  cursor: pointer;
  transition: all 250ms ease-in-out;

  &:hover {
    background-color: #000;
    color: #fff;
  }

  &:disabled {
    background-color: #ccc;
    color: #000;
    cursor: not-allowed;
  }
`;
