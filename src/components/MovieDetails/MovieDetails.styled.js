import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
  background-color: #fff;
  margin-bottom: 20px;
  width: 300px;

  & > p {
    margin-bottom: 10px;
  }
`;

export const Poster = styled.img`
  width: 100%;
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
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
  background-color: #fff;
`;
