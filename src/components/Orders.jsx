import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import MyTitle from './MyTitle';
import moment from 'moment';
import FilterListIcon from '@mui/icons-material/FilterList';
import { alpha, IconButton, Toolbar, Tooltip, Typography } from '@mui/material';
import MyAutocomplete from './MyAutocomplete';

function preventDefault(event) {
  event.preventDefault();
}

export default function Orders(props) {
  return (
    <>
      <Toolbar
        sx={{
          pl: { sm: 2 },
          pr: { xs: 1, sm: 1 }
        }}
      >
        <MyTitle>Summary</MyTitle>
        <IconButton>
          <FilterListIcon />
        </IconButton>
      </Toolbar>

      <Toolbar
        sx={{
          pl: { sm: 2 },
          pr: { xs: 1, sm: 1 }
        }}
      >
        
        <MyAutocomplete></MyAutocomplete>
      </Toolbar>

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
          {props.summaryList.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{moment(row.orderDate).format('DD/MM/YYYY')}</TableCell>
              <TableCell>{row.orderRefNo}</TableCell>
              <TableCell>{row.fundName}</TableCell>
              <TableCell>{row.transactionType ? "SELL" : "BUY"}</TableCell>
              <TableCell>{`$${row.credit}`}</TableCell>
              <TableCell>{`$${row.debit}`}</TableCell>
              <TableCell align="right">{`$${row.runningBalance}`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more summary
      </Link>
    </>
  );
}