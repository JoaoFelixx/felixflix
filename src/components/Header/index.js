import { localizedStrings } from '../../constants/localizedStrings'
import { Button, Select, Input } from 'antd';
import { 
  FlexContainer,
  StyledHeader,
  Description,
  DivSearch,
  Content, 
  Title,
  Image,
} from './style'

const { Option } = Select;

export const Header = () => {

  return (
    <StyledHeader>
      <FlexContainer> 
        <Image 
          loading="lazy"
          src="./img/logo.svg" 
          alt="Felixflix"/> 
        <div>
          <Select 
            defaultValue={localizedStrings.portuguese}
            style={{ width: 120, position: 'relative', left: '-20px' }}>
            <Option value="jack"> { localizedStrings.portuguese } </Option>
            <Option value="lucy">{ localizedStrings.english }</Option>
          </Select>
          <Button 
            style={{ backgroundColor: '#E50914', color: '#fff' }} 
            danger> { localizedStrings.enter }
          </Button>
        </div>
      </FlexContainer>
      
      <Title> { localizedStrings.moviesAndSeries } </Title>
      <Title> { localizedStrings.unlimited } </Title> 
      <Content> { localizedStrings.watchWhereverYouWantCancelWheneverYouWant } </Content>
      <Description> { localizedStrings.readyToWatch } </Description>  
      <DivSearch>
        <Input 
          style={{ width: '69%' }} 
          placeholder={ localizedStrings.typeYourEmail } />
        <Button 
          style={{ width: '30%', background: '#E50914' }} 
          type="primary">
            { localizedStrings.comeOn }
        </Button>
      </DivSearch>
      <br/><br/><br/>
    </StyledHeader>
  );
}