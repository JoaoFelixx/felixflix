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
