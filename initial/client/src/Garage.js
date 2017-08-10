import React from 'react';
import Vehicles from './Vehicles';
import AddVehicleForm from './AddVehicleForm';
import { Row, Jumbotron } from 'react-bootstrap';
import { SERVER_URL } from './config';
import 'whatwg-fetch';

class Garage extends React.Component {

  constructor() {
    super();

    this.state = {
      vehicles: [],
      makes: [],
      models: [],
      drivers: []
    }
  }

  componentDidMount() {
    fetch(`${SERVER_URL}/api/vehicle`)
      .then(r => r.json())
      .then(json => this.setState({vehicles: json}))
      .catch(error => console.error('Error retrieving vehicles: ' + error));

    fetch(`${SERVER_URL}/api/make`)
      .then(r => r.json())
      .then(json => this.setState({makes: json}))
      .catch(error => console.error('Error retrieving makes: ' + error));

    fetch(`${SERVER_URL}/api/model`)
      .then(r => r.json())
      .then(json => this.setState({models: json}))
      .catch(error => console.error('Error retrieving models ' + error));

    fetch(`${SERVER_URL}/api/driver`)
      .then(r => r.json())
      .then(json => this.setState({drivers: json}))
      .catch(error => console.error('Error retrieving drivers: ' + error));

  }

  submitNewVehicle = (vehicle) => {
    console.log('submitNewVehicle...');
    fetch(`${SERVER_URL}/api/vehicle`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(vehicle)
    }).then(r => r.json())
      .then(json => {
        let vehicles = this.state.vehicles;
        vehicles.push({id: json.id, name: json.name, make: json.make, model: json.model, driver: json.driver});
        this.setState({vehicles});
      })
      .catch(ex => console.error('Unable to save vehicle', ex));
  };


  render() {
    const {vehicles, makes, models, drivers} = this.state;

    return <Row>
      <Jumbotron>
        <h1>Welcome to the Garage</h1>
      </Jumbotron>
      <Row>
        <AddVehicleForm onSubmit={this.submitNewVehicle} makes={makes} models={models} drivers={drivers}/>
      </Row>
      <Row>
        <Vehicles vehicles={vehicles} />
      </Row>
    </Row>;
  }
}

export default Garage;