import React, { useState, useEffect } from 'react';
import { Container, CardContainer, Card, TableContainer } from './styles';
import axios from 'axios';
import Header from '../../components/Header';
import income from '../../assets/income.svg';
import outcome from '../../assets/outcome.svg';
import total from '../../assets/total.svg';

const Dashboard: React.FC = () => { 
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    
    const usuarioLogadoString = localStorage.getItem('_usuario_logado')
    const usuarioLogado = JSON.parse(usuarioLogadoString || '{}')
    
  
    console.log("Usuário logado do localStorage: ", usuarioLogado);
    axios.get(`http://localhost:8080/user/${usuarioLogado.id}/balance`)
    .then(response => {
      setBalance(response.data);
    }).catch(error => {
      console.log(error.response);
    })
  }, [])

  return (
    <>
        <Header />
        <Container>
          <CardContainer>
            <Card>
              <header>
                <p>Entradas</p>
                <img src={income} alt="Income" />
              </header>
              <h1 data-testid="balance-income">R$ 5.000,00</h1>
            </Card>
            <Card>
              <header>
                <p>Saídas</p>
                <img src={outcome} alt="Outcome" />
              </header>
              <h1 data-testid="balance-outcome">R$ 1.000,00</h1>
            </Card>
            <Card total>
              <header>
                <p>Total</p>
                <img src={total} alt="Total" />
              </header>
              <h1 data-testid="balance-total">{balance}</h1>
            </Card>
          </CardContainer>

          <TableContainer>
            <table>
              <thead>
                <tr>
                  <th>Título</th>
                  <th>Preço</th>
                  <th>Categoria</th>
                  <th>Data</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td className="title">Computer</td>
                  <td className="income">R$ 5.000,00</td>
                  <td>Sell</td>
                  <td>20/04/2020</td>
                </tr>
                <tr>
                  <td className="title">Website Hosting</td>
                  <td className="outcome">- R$ 1.000,00</td>
                  <td>Hosting</td>
                  <td>19/04/2020</td>
                </tr>
              </tbody>
            </table>
          </TableContainer>
        </Container>
      </>
  )
}

export default Dashboard;