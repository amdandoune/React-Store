import React, {Component} from 'react';
import { Grid, Col, Row } from 'react-bootstrap';
import { flatten, times, range } from 'lodash';
import { StickyContainer/*, Sticky*/ } from 'react-sticky';

export default class SideBar extends Component {

	render() {
		const NUM_OF_PARAGRAPHS = 10;
		const paragraphs = flatten(times(NUM_OF_PARAGRAPHS, (index) =>
		 	(
		 		<p key={index}>
		 			Paragraph test area.
		 			In 1992, Tim Berners-Lee circulated a 
		 			document titled “HTML Tags,” which outlined 
		 			just 20 tags, many of which are now obsolete 
		 			or have taken other forms. The first surviving 
		 			tag to be defined in the document, after the crucial
		 			anchor tag, is the paragraph tag. It wasn’t until 1993 
		 			that a discussion emerged on the proposed image tag.
		 		</p>
		 	)

		));

		const NUM_OF_KITTIES = 5;
		const kitties = range(0, NUM_OF_KITTIES).map((i) => {
			return (
				<div className="sidebar-kitties" key={i}>
					<StickyContainer style={{zIndex: 2}}>
						
							<img src="http://placekitten.com/g/300/250" alt=""></img>
						
						<div style={{height: "100px"}}></div>
					</StickyContainer>
				</div>
			)
		});

		return (
			<div className="App-intro">
				<Grid>
					<Row className="showgrid">
						<Col lg={8}>
							{paragraphs.map(paragraph => paragraph)}
						</Col>

						<Col lg={4}>
							<br/>
							{kitties}
						</Col>
					</Row>
				</Grid>

			</div>
		);
	}	

}