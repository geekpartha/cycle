import React, { Component } from 'react';
import styled from 'styled-components';
import { Card, ListGroup, ListGroupItem, Button } from 'react-bootstrap';

class Products extends Component {
	render() {
		const {brand, model, img, price, colours, stock} = this.props.product;

		return(
			<CycleStyle className="col-md-4 mx-auto my-3">
				<Card style={{ width: '21rem' }}>
					<Card.Img variant="top" src={img} />
					<Card.Body>
						<h6>{brand}</h6>
						<h3>{model}</h3>
					</Card.Body>
					<ListGroup className="list-group-flush text-capitalize">
						<ListGroupItem className="font-italic">price - <strong>{price}</strong></ListGroupItem>
					    <ListGroupItem className="font-italic">colours - <strong>{colours}</strong></ListGroupItem>
					    <ListGroupItem className="font-italic">in stock - <strong>{stock}</strong></ListGroupItem>
					</ListGroup>
					<Button className="btn btn-danger">full specs</Button>
				</Card>
			</CycleStyle>
		)
	}
}

const CycleStyle = styled.div`
	.card {
		border-color: transparent;
	}
	h6 {
		text-transform: uppercase;
		font-weight: bold;
	}
	h3 {
		text-transform: uppercase;
		font-family: 'Noto Serif', serif;
	}
	Button {
		text-align: center;
		text-transform: uppercase;
		border: 3px solid #8B0000;
		background-color: #fff;
		color: #800000;
		margin: 10px 100px;
		padding: 5px ;
	}
`


export default Products;