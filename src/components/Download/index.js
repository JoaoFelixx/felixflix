import { localizedStrings } from '../../constants/localizedStrings'
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
        <Description> { localizedStrings.downloadSeries } </Description>
        <SubDescription> { localizedStrings.saveYourTitles } </SubDescription>
      </Content>

    </FlexContainer>      
  )
}
