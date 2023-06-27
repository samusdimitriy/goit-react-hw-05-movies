import styled from '@emotion/styled';

export const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 0 16px;
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
`;

export const Item = styled.li`
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

export const Title = styled.h3`
  margin-bottom: 10px;
`;

export const Description = styled.p`
  margin-bottom: 10px;
`;
