import React, { Component } from 'react';
import Products from './Products';
import {CycleConsumer} from '../context';
import styled from 'styled-components';

class ProductList extends Component {

	render() {

		return(
		<CycleStyle>
				<div className="container py-2">
					<div className="my-3">
						<h4 className="title" variant="dark" size="lg">{'\u2022'} bike stock {'\u2022'}</h4>
					</div>
					<h5 className="sub-title">brand we carry - 
					<span> linus</span> / <span>brompton</span> / <span>christiana</span> / <span>state</span></h5>
					<div className="row">
						<CycleConsumer>
							{(value)=>{
								return value.products.map( product => {
									return <Products key={product.id} product={product}/>;
								})
							}}
						</CycleConsumer>
					</div>
				</div>
		</CycleStyle>
		)
	}
}

const CycleStyle = styled.div`
	.title{
		font-weight: bold;
		text-transform: uppercase;
	}
	.sub-title{
		font-family: 'Noto Serif', serif;
	}
	h4 {
		text-align: center;
		background-color: #000;
		color: #fff;
		margin-right: 900px;
		padding: 10px ;
	}
	h5 {
		text-transform: uppercase;
	}
	span {
		color: #b00000;
	}
`
export default ProductList;