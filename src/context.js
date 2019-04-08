import React, { Component } from 'react';
import { cycleProducts } from './data';

{/*cool*/}
const CycleContext = React.createContext();

class CycleProvider extends Component {
	state = {
		products: cycleProducts
	}
	render() {
		return(
			<CycleContext.Provider value={{...this.state}}>
				{this.props.children}
			</CycleContext.Provider>
		)
	}
}

const CycleConsumer = CycleContext.Consumer;

export { CycleProvider, CycleConsumer };