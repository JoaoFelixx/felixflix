import {
  FlexContainer,
  Content,
  Description,
  SubDescription,
  Image,
} from '../StyledComponents'

export const Download = () => {
  return (
    <FlexContainer>

      <Content>
        <Image 
          loading="lazy"
          alt="FelixFlix baixe The Flash e assista de onde estiver"
          src="./img/phone.png"/>
      </Content>
      <Content style={{ position: 'relative', top: '40px' }}>
        <Description> Baixe séries para assistir offline. </Description>
        <SubDescription> Salve seus títulos favoritos e sempre tenha algo para assistir. </SubDescription>
      </Content>

    </FlexContainer>      
  )
}
