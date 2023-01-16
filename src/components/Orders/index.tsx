import { Order } from '../../types/Order';
import { OrdersBoard } from '../OrdersBoard';
import { Container } from './styles';

const orders: Order[] = [
  {
    '_id': '43129412nk3213123dsfa321312',
    'table': '1',
    'status': 'WAITING',
    'products': [
      {
        'product': {
          'name': 'pizza quatro queijos',
          'imagePath': '123213j13k21j3k12j31k3.png',
          'price': 40,
        },
        quantity: 3,
        '_id': '3213123123h123123h12312h312l'
      },
      {
        'product': {
          'name': 'Coca Cola',
          'imagePath': '123213j13k21j3k12j31k3.png',
          'price': 7,
        },
        quantity: 2,
        '_id': '3213123137h123123h12312h312l'
      },
    ]
  }
];

export function Orders() {
  return (
    <Container>
      <OrdersBoard icon="🕘" title="Fila de espera" orders={orders} />

      <OrdersBoard icon="👨‍" title="Em preparação" orders={[]} />

      <OrdersBoard icon="☑️" title="Pronto!" orders={[]} />
    </Container>

  );
}
