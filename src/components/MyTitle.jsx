import * as React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';

function MyTitle(props) {
  return (
    <Typography component="h2" variant="h6" color="primary" gutterBottom>
      {props.children}
    </Typography>
  );
}

MyTitle.propTypes = {
  children: PropTypes.node,
};

export default MyTitle;