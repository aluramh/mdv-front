import React, { Component } from 'react';
import VehicleCard from './VehicleCard'
import vehiclesApi from './../../../src/api/vehicles';
import './../common/Container.css'
import './VehiclesPage.css'

class VehiclesPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vehicles: []
    }
  }

  // This should go inside a Container component
  componentWillMount () {
    // Simulated fields from the Vuex state.
    const filters = {
      fields: [
        'foto_vehiculo', 'modelo', 'nombre_empresa',
        'num_placa', 'conductor', 'year', 'descripcion',
        'equipo_extra', 'nombre_marca', 'id_carro'
      ],
      id: 2
    }
    vehiclesApi.getVehicles(filters, rows => {
      this.setState({ vehicles: rows })
    })
  }

  render () {
    return (
      <div className="container vehicles-container">{
        this.state.vehicles.map(item =>
          <VehicleCard key={item.id_carro} vehicle={item}></VehicleCard>
        )
      }</div>
    )
  }
}

export default VehiclesPage;
