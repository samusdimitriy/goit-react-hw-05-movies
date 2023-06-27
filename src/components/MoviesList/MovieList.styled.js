import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
  background-color: #fff;
  margin-bottom: 20px;
  max-width: 960px;
`;

export const Poster = styled.img`
  width: 300px;
  height: 400px;
  margin-bottom: 10px;
`;

export const Link = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  width: 300px;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
  background-color: #fff;
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
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-bottom: 20px;
  padding: 0;
  list-style: none;

  & > a {
    text-decoration: none;
  }

  & > a:hover {
    opacity: 0.7;
  }
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
  background-color: #fff;
  width: 300px;
  height: 500px;

  & > p {
    margin-bottom: 10px;
    text-decoration: none;
    color: #212121;
  }
`;

export const Title = styled.h2`
  margin-bottom: 20px;
  text-align: center;
`;
