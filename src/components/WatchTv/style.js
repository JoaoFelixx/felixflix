import styled from 'styled-components';

export const FlexContainer = styled.div`
  background-color: #000000;
  color: #fff;
  display: flex;
  flex-direction: rows;
  justify-content: space-between;
`;

export const Content = styled.div`
  width: 50%
  color: #fff; 
  text-align: center;
  align-items: center;
`; 

export const Description = styled.h1`
  font-size: 45px;
  color: #fff;
  font-weight: bold;
`;

export const SubDescription = styled.p`
  font-size: 26px;
  color: #fff;
`;

export const Image = styled.img`
  width: 90%;
  padding: 12px,
  margin-left: auto;
  margin-right: auto;
`;