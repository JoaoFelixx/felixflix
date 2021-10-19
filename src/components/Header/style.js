import styled from 'styled-components';

export const StyledHeader = styled.div`
  background-image: url('./img/felixflix.jpg');
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: auto;
`;

export const Image = styled.img`
  width: 150px;
  
  @media (max-width: 400px) {
  width: 33%;
  }
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 44px;  
  color: #fff;
  line-height 22px; 
  font-weight: bold;
  
  @media (max-width: 600px) {
    line-height 30px; 
  }
`;

export const Content = styled.h2`
  text-align: center;
  font-size: 24px;  
  color: #fff;
`;

export const Description = styled.p`
  text-align: center;
  color: #fff;
  font-size: 18px;  
`;

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: rows;
  justify-content: space-between;
  padding: 24px;
`; 

export const DivSearch = styled.div`
  margin-left: auto;
  margin-right: auto;
  align-items: center;
  text-align: center;
  width: 600px;

  @media (max-width: 630px) {
    width: 90%;
  }
`;
















