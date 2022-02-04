import React from "react";
import Nav from "./Nav";

import hogs from "../porkers_data";

function App() {
	return (
		<div className="App">
			<Nav />
			<Card />
			
		</div>
	);
}

export default App;

const eachHogCard = hogs.map(hog => {
	return (
		<div className="ui eight wide column">
			<img src={hog.image}/>
			<h2>{hog.name}</h2>
		</div>
	)
})

function Card(){

	const eachHogCard = hogs.map(hog => {
		return (
			<div className="ui eight wide column">
				<img src={hog.image}/>
				<h2>{hog.name}</h2>
			</div>
		)
	})
	return eachHogCard
}