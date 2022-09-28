import React from 'react';
import Container from '@mui/material/Container';
import TransactionsTable from './components/TransactionsTable';
import GetDetailRewards from './components/GetDetailRewards';
import './App.css';

function App() {
  return (
    <Container maxWidth="md" className='container'>
      <TransactionsTable />
      <GetDetailRewards />
    </Container>
  );
}

export default App;
