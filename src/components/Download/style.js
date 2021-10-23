import styled from 'styled-components';

export const FlexContainer = styled.div`
  height: auto;
  background-color: #000000;
  color: #fff;
  display: flex;
  flex-direction: row;
  padding: 60px;
  justify-content: space-between;

  @media (max-width: 920px) {
    flex-direction: column;
    height: auto;
  }
`;

export const Content = styled.div`  
  width: 50%
  color: #fff; 
  text-align: center;
  align-items: center;
  
  @media (max-width: 920px) {
    width: 100%
  }
`; 

export const Description = styled.h1`
  font-size: 45px;
  color: #fff;
  font-weight: bold;
  text-align: left;
`;

export const SubDescription = styled.p`
  font-size: 26px;
  color: #fff;
  text-align: left;
`;

export const Image = styled.img`
  width: 60%;
  margin-left: auto;
  margin-right: auto;
  
  @media (max-width: 500px) {
    width: 90%;
  }
`;

