import {
  FlexContainer,
  Content,
  Description,
  SubDescription,
  Image,
} from './style'

export const Download = () => {
  return (
    <FlexContainer>

      <Content>
        <Image src="./img/phone.png"/>
      </Content>
      <Content style={{ position: 'relative', top: '40px' }}>
        <Description> Baixe séries para assistir offline. </Description>
        <SubDescription> Salve seus títulos favoritos e sempre tenha algo para assistir. </SubDescription>
      </Content>

    </FlexContainer>      
  )
}
