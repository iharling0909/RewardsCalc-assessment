import React, { useState, useEffect } from 'react';
import axios from 'axios';  
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default () => {
    const [res, updateRes] = useState([]);

    const handleCalc = async () => {
        const result = await axios.get('http://localhost:5000/api/transaction/calc');
        console.log(result.data);
        updateRes(result.data);
    }
    return (
        <>
            <Button variant="contained" onClick={handleCalc}>Calculate</Button>
            { res.length !== 0 && <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Customer Name</TableCell>
                            <TableCell>1st Month</TableCell>
                            <TableCell>2nd Month</TableCell>
                            <TableCell>3rd Month</TableCell>
                            <TableCell>Total</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            res.map(row => 
                                <TableRow
                                    key={row.name}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                    <TableCell component="th" scope="drink">
                                        {row.name}
                                    </TableCell>
                                    <TableCell>{row.first}</TableCell>
                                    <TableCell>{row.second}</TableCell>
                                    <TableCell>{row.third}</TableCell>
                                    <TableCell>{row.total}</TableCell>
                                </TableRow>
                            )
                        }
                    </TableBody>
                </Table>
            </TableContainer>
            }
        </>
    )
}