import React, { Component } from 'react';
import { Main } from './components/Layout';
import GridLayout from 'react-grid-layout';

import ExampleComponent from './components/ExampleComponent'

export default class App extends Component {
	state = {
		layout : [
			{i: 'a', x: 0, y: 0, w: 1, h: 2, maxW: 3 },
			{i: 'b', x: 0, y: 0, w: 2, h: 3},
			{i: 'c', x: 0, y: 0, w: 1, h: 3},
			{i: 'd', x: 0, y: 0, w: 4, h: 3},
			{i: 'e', x: 0, y: 0, w: 1, h: 3}
		]
	}

	render() {
		return (
			<Main>
				<div style={{ display: "flex" }}>
					<div style={{ flex: 10 }}>
						<GridLayout
							rowHeight={30}
							cold={12}
							layout={this.state.layout}
							width={996}>
							
							<div style={{ border: "1px solid #000" }} key="a">
							<ExampleComponent/>
							</div>
							<div style={{ border: "1px solid #000" }} key="b">b</div>
							<div style={{ border: "1px solid #000" }} key="c">c</div>
							<div style={{ border: "1px solid #000" }} key="d">d</div>
							<div style={{ border: "1px solid #000" }} key="e">e</div>
						</GridLayout>
					</div>
					<div style={{ flex: 2, borderLeft: "1px solid #000" }}>
						ToolBox
					</div>
				</div>
			</Main>
		);
	}
}
