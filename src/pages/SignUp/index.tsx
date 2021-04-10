import { Container, Content, Background } from './styles';
import logoImg from '../../assets/logo.svg';

const SignUp: React.FC = () => (
  <Container>
    <Background />
    <Content>
      <img src={logoImg} alt="GoFinances" />

      <form>
        <h1>Faça seu cadastro</h1>
        <input placeholder="Nome" />
        <input placeholder="E-mail" />
        <input type="password" placeholder="Senha" />
        <input type="password" placeholder="Repita a Senha" />
        <button type="submit">Cadastrar</button>
        <a href="/">Voltar para login</a>
      </form>
    </Content>
  </Container>


    );


export default SignUp;
