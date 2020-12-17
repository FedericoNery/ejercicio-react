import { render, screen } from '@testing-library/react';
import SimuladorDeCredito from './SimuladorDeCredito';

test('Renderiza el simulador de créditos verificando que se encuentre la palabra MONTO TOTAL', () => {
    render(<SimuladorDeCredito />);
    expect(screen.getByText(/MONTO TOTAL/i,{ selector: 'label' }).innerHTML).toEqual("MONTO TOTAL");
});