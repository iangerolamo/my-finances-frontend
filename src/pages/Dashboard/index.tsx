import React, { useState, useEffect } from 'react';
import { Container, CardContainer, Card, TableContainer } from './styles';
import Header from '../../components/Header';
import income from '../../assets/income.svg';
import outcome from '../../assets/outcome.svg';
import total from '../../assets/total.svg';
import api from '../../service/api';

interface Transaction {
  id: string;
  description: string;
  mounth: number;
  year: number;
  user: {
    id: number;
    name: string;
    email: string;
    password: string;
  }
  value: number;
  type: 'INCOME' | 'OUTCOME';
}

const Dashboard: React.FC = () => { 

  const formatValue = (value: number): string =>
  Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);

  const [balance, setBalance] = useState(0);
  const [entrada, setEntrada] = useState(0);
  const [saida, setSaida] = useState(0);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  
  // useEffect(() => {

  //   const usuarioLogadoString = localStorage.getItem('_usuario_logado')
  //   const usuarioLogado = JSON.parse(usuarioLogadoString || '{}')
    
  
  //   console.log("Usuário logado do localStorage: ", usuarioLogado);
  //   axios.get(`http://localhost:8080/user/${usuarioLogado.id}/balance`)
  //   .then(response => {
  //     setBalance(response.data);
  //   }).catch(error => {
  //     console.log(error.response);
  //   })
  // }, [])

  useEffect(() => {
    const usuarioLogadoString = localStorage.getItem('_usuario_logado')
    const usuarioLogado = JSON.parse(usuarioLogadoString || '{}')
    api.get(`user/${usuarioLogado.id}/balance`)
      .then(response => {
        setBalance(response.data);
      }).catch(error => {
        console.log(error.response);
      })
    api.get(`user/${usuarioLogado.id}/income`)
      .then(response => {
        setEntrada(response.data);
      }).catch(error => {
        console.log(error.response);
      })
    api.get(`user/${usuarioLogado.id}/outcome`)
      .then(response => {
        setSaida(response.data);
      }).catch(error => {
        console.log(error.response);
      })


    async function loadTransaction() {
      const { data } = await api.get('/transactions');
      setTransactions(data);
    }

    loadTransaction();
    
  }, [transactions]);
  
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
              <h1 data-testid="balance-income">{formatValue(entrada)}</h1>
            </Card>
            <Card>
              <header>
                <p>Saídas</p>
                <img src={outcome} alt="Outcome" />
              </header>
              <h1 data-testid="balance-outcome">{formatValue(saida)}</h1>
            </Card>
            <Card total>
              <header>
                <p>Total</p>
                <img src={total} alt="Total" />
              </header>
              <h1 data-testid="balance-total">{formatValue(balance)}</h1>
            </Card>
          </CardContainer>

          <TableContainer>
            <table>
              <thead>
                <tr>
                  <th>Título</th>
                  <th>Preço</th>
                  <th>Mês</th>
                  <th>Ano</th>
                  <th>Tipo</th>
                </tr>
              </thead>

              <tbody>
              {transactions.map(transaction => (
                  <tr>
                    <td className="title">{transaction.description}</td>
                    <td className="income">{formatValue(transaction.value)}</td>
                    <td>{transaction.user.name}</td>
                    <td>{transaction.year}</td>
                    <td>{transaction.type}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </TableContainer>
        </Container>
      </>
  )
}

export default Dashboard;