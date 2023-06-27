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

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-bottom: 20px;
  padding: 0;
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
  width: 300px;
`;

export const ProfileImage = styled.img`
  width: 100%;
  margin-bottom: 10px;
`;

export const Name = styled.h3`
  margin-bottom: 5px;
`;

export const Character = styled.p`
  margin: 0;
`;

export const NoCast = styled.p`
  text-align: center;
  margin: 0;
`;
