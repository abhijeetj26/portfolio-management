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
import { FormControl, IconButton, InputLabel, MenuItem, Select, Toolbar } from '@mui/material';
import MyAutocomplete from './MyAutocomplete';

function preventDefault(event) {
  event.preventDefault();
}

export default function Orders(props) {
  const [transactionType, setTransactionType] = React.useState('buy');
  const [status, setStatus] = React.useState('submitted');
  const [showFilter, setShowFilter] = React.useState(false);

  const handleChange = (event) => {
    setTransactionType(event.target.value);
  };

  const handleStatus = (event) => {
    setStatus(event.target.value);
  };


  const handleFilter = () => {
    showFilter ? setShowFilter(false) : setShowFilter(true);
  }

  return (
    <>
      <Toolbar
        sx={{
          pl: { sm: 2 },
          pr: { xs: 1, sm: 1 }
        }}
      >
        <MyTitle>Summary</MyTitle>
        <IconButton onClick={handleFilter}>
          <FilterListIcon />
        </IconButton>
      </Toolbar>

      {showFilter && (
        <Toolbar
          sx={{
            pl: { sm: 2 },
            pr: { xs: 1, sm: 1 }
          }}
        >
          <MyAutocomplete type="orderRefNo"></MyAutocomplete>
          <MyAutocomplete type="fundName"></MyAutocomplete>

          <FormControl>
            <InputLabel id="demo-simple-select-label">Type</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={transactionType}
              sx={{ width: 100, mr: 1 }}
              label="Type"
              onChange={handleChange}
            >
              <MenuItem value={"buy"}>BUY</MenuItem>
              <MenuItem value={"sell"}>SELL</MenuItem>
            </Select>
          </FormControl>

          <FormControl>
            <InputLabel id="demo-simple-select-label">Status</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              sx={{ width: 150, mr: 1 }}
              value={status}
              label="Type"
              onChange={handleStatus}
            >
              <MenuItem value={"submitted"}>Submitted</MenuItem>
              <MenuItem value={"cancelled"}>Cancelled</MenuItem>
              <MenuItem value={"executed"}>Executed</MenuItem>
              <MenuItem value={"completed"}>Completed</MenuItem>
              <MenuItem value={"failed"}>Failed</MenuItem>
            </Select>
          </FormControl>

        </Toolbar>
      )}

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