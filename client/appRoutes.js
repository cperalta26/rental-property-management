import React, { Component } from "react"
import { Route, Switch } from "react-router-dom"
import {
  Home,
  BuildingsListContainer,
  BuildingContainer,
  BuildingRentalListContainer,
  BuildingRentalUnitContainer,
  AllRentalUnitsContainer
} from "./components/indexAllComponents"

import "../public/index.css"

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return(
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/buildings' component={BuildingsListContainer} />
        <Route path='/buildings/:buildingId/' component={BuildingContainer} />
        <Route path='/buildings/:buildingId/rentalUnitsInBuilding' component={BuildingRentalListContainer}/>
        <Route path='/buildings/:buildingId/rentalUnitsInBuilding/:rentalUnitId' component={BuildingRentalUnitContainer} />
        <Route path='/allUnits' component={AllRentalUnitsContainer} />
      </Switch>
    )
  }
}
