import logo from '../../assets/images/logo.svg';
import { Container, Content } from './styles';

export function Header() {
  return (
    <Container>
      <Content>
        <div className="page-details">
          <h1>Pedidos</h1>
          <h2>Acompanhe os pedidos do cliente</h2>
        </div>

        <img src={logo} alt="WAITERAPP" />
        <div></div>
      </Content>
    </Container>
  );
}
