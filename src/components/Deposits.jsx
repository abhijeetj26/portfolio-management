import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import MyTitle from './MyTitle';

function preventDefault(event) {
  event.preventDefault();
}

export default function Deposits() {
  return (
    <React.Fragment>
      <MyTitle>Open Balance</MyTitle>
      <Typography component="p" variant="h4">
        $10,000.00
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        on 26 March, 2022
      </Typography>
    </React.Fragment>
  );
}