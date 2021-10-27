import { localizedStrings } from '../../constants/localizedStrings'
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
        <Description>{ localizedStrings.watchWhereverYouWant }</Description>
        <SubDescription>{ localizedStrings.watchOnMobileTabletSmartTVOrNotebook }</SubDescription>
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