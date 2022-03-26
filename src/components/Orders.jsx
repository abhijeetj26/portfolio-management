import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import MyTitle from './MyTitle';

// Generate Order Data
function createData(id, date, refNo, fundName, transactionType, credit, debit, runningBalance) {
  return { id, date, refNo, fundName, transactionType, credit, debit, runningBalance };
}

const rows = [
  createData(
    0,
    '16 Mar, 2019',
    '#WE34FF',
    'ICICI',
    'BUY',
    312.44,
    112.44,
    10,
  ),
  createData(
    1,
    '16 Mar, 2019',
    '#EEDD24',
    'AXIS',
    'SELL',
    866.99,
    312.44,
    112.44,
  ),
  createData(2, '16 Mar, 2019', '#22WEDS', 'GROWW', 'SELL', 100.81, 10, 5),
  createData(
    3,
    '16 Mar, 2019',
    '#RT33DF',
    'LIC',
    'BUY',
    654.39,
    22,
    342
  ),
  createData(
    4,
    '15 Mar, 2019',
    '#EERC12',
    'TATA',
    'SELL',
    212.79,
    12,
    45
  ),
];

function preventDefault(event) {
  event.preventDefault();
}

export default function Orders() {
  return (
    <>
      <MyTitle>Summary</MyTitle>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Ref No</TableCell>
            <TableCell>Fund Name</TableCell>
            <TableCell>Transaction Type</TableCell>
            <TableCell >Credit</TableCell>
            <TableCell>Debit</TableCell>
            <TableCell align="right">Running Balance</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.refNo}</TableCell>
              <TableCell>{row.fundName}</TableCell>
              <TableCell>{row.transactionType}</TableCell>
              <TableCell>{row.credit}</TableCell>
              <TableCell>{`$${row.debit}`}</TableCell>
              <TableCell align="right">{`$${row.runningBalance}`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more orders
      </Link>
    </>
  );
}