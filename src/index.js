import React from "react";
import ReactDom from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

class App extends React.Component {
	// constructor(props) {
	// 	super(props);
	// 	this.state = { latitude: null, errorMessage: "" };
	// }
	state = { latitude: null, errorMessage: "" };
	componentDidMount() {
		window.navigator.geolocation.getCurrentPosition(
			(position) => this.setState({ latitude: position.coords.latitude }),
			(error) => this.setState({ errorMessage: error.message })
		);
	}
	renderContent() {
		if (this.state.errorMessage && !this.state.latitude) {
			return <div> Error:{this.state.errorMessage}</div>;
		} else if (!this.state.errorMessage && !this.state.latitude) {
			return (
				<div>
					<Spinner message='Please Allow Location Request' />
				</div>
			);
		} else {
			return <SeasonDisplay lat={this.state.latitude} />;
		}
	}
	render() {
		return <div className='border red'>{this.renderContent()}</div>;
	}
}

ReactDom.render(<App />, document.querySelector("#root"));
