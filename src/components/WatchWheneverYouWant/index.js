import {
  FlexContainer,
  Content,
  Description,
  SubDescription,
  Image,
} from '../StyledComponents'

export const WatchWheneverYouWant = () => {
  return (
    <FlexContainer>
      <Content>
        <Description> Assista quando quiser. </Description>
        <SubDescription> Assista no celular, tablet, Smart TV ou notebook sem pagar a mais por isso. </SubDescription>
      </Content>
      <Content>
        <Image 
          loading="lazy"
          alt="Assista em qualquer dispositivo"
          src="./img/devices.png" /> 
      </Content>
    </FlexContainer>
  )
}