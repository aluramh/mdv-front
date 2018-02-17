import React from 'react'

import { Toolbar, Typography, IconButton, Tooltip } from 'material-ui';
import FilterListIcon from 'material-ui-icons/FilterList';

const TableActionBar = ({ showFilters, toggleFilters }) => {
  return (
    <Toolbar>
      <Typography type="title">Polizas</Typography>

      <div className="spacer" />

      <Tooltip 
        title={`${(showFilters ? 'Show' : 'Hide')} filters`}
        onClick={toggleFilters}
      >
        <IconButton><FilterListIcon /></IconButton>
      </Tooltip>
    </Toolbar>
  );
};

export default TableActionBar;
