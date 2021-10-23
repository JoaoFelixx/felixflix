import { 
  FlexContainer,
  Description,
  SubDescription,
  Content,
  Image,
} from './style' 

export const WatchTv = () => {
  return (
    <FlexContainer>
      <Content style={{ position: 'relative', top: '40px' }}>
        <Description>Aproveite na TV. </Description>
        <SubDescription>
          Assista em Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, 
          aparelhos de Blu-ray e outros dispositivos.
        </SubDescription>
      </Content>
      
      <Content>
        <Image src="./img/tv.png" alt="TV com felixflix"/>
      </Content>
    </FlexContainer>
  );
}
