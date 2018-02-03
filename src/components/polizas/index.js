import React, { Component } from 'react'
import polizas from './../../api/polizas'
import { 
  Typography, Paper, Grid, TableFooter, TablePagination,
  TableRow, TableCell, Table, TableBody, TableHead
} from 'material-ui';
import { withStyles } from 'material-ui/styles';
import './PolizasPage.css'
import ActionBar from './ActionBar'
import Filters from './Filters'

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
  },
  table: {
    minWidth: 800,
  },
  tableWrapper: {
    overflowX: 'auto',
  },
  title: {
    flex: '0 0 auto',
  }
});

class PolizasPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      polizas: [],
      collapsedFilters: true,
      page: 0,
      rowsPerPage: 5
    };
  }

  handleChangePage = (event, page) => {
    this.setState({ page });
  }

  handleChangeRowsPerPage = event => {
    this.setState({ rowsPerPage: event.target.value });
  }

  componentWillMount = () => {
    polizas.getPolizas(
      polizas => this.setState({ polizas: polizas })
    )
  }

  render () {
    const { polizas, page, rowsPerPage } = this.state
    const { classes } = this.props
 
    return (
      <div className="">
        <Grid container>
          <Grid item xs={12} md={2}>
            <Paper>
              <Filters></Filters>
            </Paper>
          </Grid>

          <Grid item xs={12} md={10}>
            <Paper className={classes.title}>
              <ActionBar></ActionBar>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>No. de Poliza</TableCell>
                    <TableCell>Aseguradora</TableCell>
                    <TableCell>Expedida</TableCell>
                    <TableCell>Vencimiento</TableCell>
                  </TableRow>
                </TableHead>
                {/* Only render table body if there are items. */}
                {polizas.length > 0 &&
                  <TableBody>
                    {polizas.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(item =>
                      <TableRow key={item.num_poliza}>
                        <TableCell>{item.num_poliza}</TableCell>
                        <TableCell>Aseguradora</TableCell>
                        <TableCell>Expedida</TableCell>
                        <TableCell>Vencimiento</TableCell>
                      </TableRow>)}
                  </TableBody>}
                <TableFooter>
                  <TableRow>
                    <TablePagination
                      colSpan={6}
                      count={polizas.length}
                      rowsPerPage={rowsPerPage}
                      page={page}
                      onChangePage={this.handleChangePage}
                      onChangeRowsPerPage={this.handleChangeRowsPerPage}
                    />
                  </TableRow>
                </TableFooter>
              </Table>
              {polizas.length < 0 &&
                <Typography style={{textAlign: 'center'}}>
                  No hay polizas registradas.
                </Typography>}
            </Paper>
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default withStyles(styles)(PolizasPage)
