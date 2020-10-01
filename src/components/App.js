import React, { Component } from "react";
import UserCreate from "./UserCreate";
import { LangaugeStore } from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";
import LanguageSelector from "./LanguageSelector";

class App extends Component {
	//state = { language: "english" };

	// onLanguageChange = language => {
	// 	this.setState({ language });
	// };

	render() {
		return (
			<div>
				<LangaugeStore>
					<div className="ui container">
						<LanguageSelector />
					</div>
					{/* {this.state.language} */}
					<ColorContext.Provider value="red">
						<UserCreate />
					</ColorContext.Provider>
				</LangaugeStore>
			</div>
		);
	}
}

export default App;
