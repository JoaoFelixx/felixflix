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

  @media (max-width: 920px) {
    text-align: center;
  }
`;

export const SubDescription = styled.p`
  font-size: 26px;
  color: #fff;
  text-align: left;

  @media (max-width: 920px) {
    text-align: center;
  }
`;

export const Image = styled.img`
  width: 60%;
  margin-left: auto;
  margin-right: auto;
  
  @media (max-width: 500px) {
    width: 90%;
  }
`;

export const CentralizedContent = styled.div`
  background-color: #000000;
  width: 70%;
  margin-right: auto;
  margin-left: auto;
  @media (max-width: 920px) {
    width: 100%;
  }
`;

export const Questions = styled.button` 
  width: 100%;
  background-color: #303030;
  color: #ffffff;
  margin: 4px; 
  font-size: 26px;
  font-weight: 400px;
  text-align: left;
  padding: 20px;
  border: none;
  cursor: pointer;
  @media (max-width: 620px) {
    font-size: 12px;
  }
`;

export const TitleCommonQuestion = styled.h1` 
  font-size: 50px;
  color: #ffffff;
  text-align: center;
  font-weight: bold;
`; 