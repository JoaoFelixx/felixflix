import { localizedStrings } from '../../constants/localizedStrings'
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
        <Description>{ localizedStrings.enjoyOnTV }</Description>
        <SubDescription>{ localizedStrings.watchOnSmartTv }</SubDescription>
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
