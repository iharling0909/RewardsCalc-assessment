import { useEffect, useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';

export default () => {
    const [transactions, setTransactions] = useState([]);
    useEffect(() => {
      axios.get('http://localhost:5000/api/transaction').then((res) => {
        setTransactions(res.data.transactions);
      });
    }, []);

    return (
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Customer Name</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Purchase Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {transactions.map((transaction) => (
            <TableRow
              key={transaction.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="drink">
                {transaction.name}
              </TableCell>
              <TableCell>{transaction.month}</TableCell>
              <TableCell>{transaction.purchase}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    )
};