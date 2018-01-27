import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import { ExpandMore, ExpandLess } from 'material-ui-icons'

import { 
  Typography, Button, TableCell,
  TableRow, Table, TableBody
} from 'material-ui';

const styles = {
  card: {
    margin: 15
  },
  media: {
    height: 200,
  },
};

class VehicleCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMore: false
    }
  }

  static propTypes = {
    classes: PropTypes.object.isRequired,
    vehicle: PropTypes.object.isRequired
  };

  toggleShowMore = () => {
    this.setState({showMore: !this.state.showMore})
  }

  render () {
    const { classes, vehicle } = this.props;
    const { showMore } = this.state;
    const URL = process.env.REACT_APP_API_URL
  
    return (
      <div className="card vehicle">
        <Card className={classes.card}>
          <CardMedia
            className={classes.media}
            image={`${URL}/uploads/` + (vehicle.foto_vehiculo ? vehicle.foto_vehiculo : 'no_image.jpg')}
          />
          <CardContent>
            {/* <pre style={{whiteSpace: 'initial', wordBreak: 'break-word'}}>
              {Object.keys(vehicle).map(i => <div>{i}</div>)}
            </pre> */}
            <Typography type="headline" component="h2"><b>{vehicle.modelo} {vehicle.year}</b> {vehicle.nombre_marca}</Typography>
            <Typography component="h3">{vehicle.nombre_empresa}</Typography>
            <Table className="vehicle-card-table">
              <TableBody>
                <TableRow>
                  <TableCell className="table header">Placas</TableCell>
                  <TableCell>{vehicle.num_placa}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="table header">Conductor</TableCell>
                  <TableCell>{vehicle.conductor}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
            {showMore && <div>
              <Typography component="p">{vehicle.descripcion}</Typography>
              <Typography component="p">{vehicle.equipo_extra}</Typography>
            </div>}
          </CardContent>
          <CardActions>
            <Button dense color="primary">Show more</Button>
            <Button dense color="primary" onClick={this.toggleShowMore}>
              Details {showMore ? <ExpandLess/> : <ExpandMore/>}
            </Button>
          </CardActions>
        </Card>
      </div>
    );
  }
}

export default withStyles(styles)(VehicleCard);
