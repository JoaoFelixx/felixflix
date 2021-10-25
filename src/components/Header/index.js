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
            defaultValue="Português"
            style={{ width: 120, position: 'relative', left: '-20px' }}>
            <Option value="jack">Português</Option>
            <Option value="lucy">Inglês</Option>
          </Select>
          <Button 
            style={{ backgroundColor: '#E50914', color: '#fff' }} 
            danger> Entrar 
          </Button>
        </div>
      </FlexContainer>
      
      <Title> Filmes, séries e muito mais. </Title>
      <Title> Sem limites. </Title> 
      <Content> Assista onde quiser. Cancele quando quiser. </Content>
      <Description> Pronto para assistir? Informe seu email para criar ou reiniciar sua assinatura. </Description>  
      <DivSearch>
        <Input 
          style={{ width: '69%' }} 
          placeholder="Digite seu E-mail" />
        <Button 
          style={{ width: '30%', background: '#E50914' }} 
          type="primary">
            Vamos lá
        </Button>
      </DivSearch>
      <br/><br/><br/>
    </StyledHeader>
  );
}