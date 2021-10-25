import {
  FlexContainer,
  Content,
  Description,
  SubDescription,
  Image,
} from '../StyledComponents'

export const WatchTv = () => {
  return (
    <FlexContainer>
      <Content>
        <Description>Aproveite na TV. </Description>
        <SubDescription>
          Assista em Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, 
          aparelhos de Blu-ray e outros dispositivos.
        </SubDescription>
      </Content>
      
      <Content>
        <Image
          loading="lazy" 
          src="./img/tv.png" 
          alt="TV com felixflix"/>
      </Content>
    </FlexContainer>
  );
}
