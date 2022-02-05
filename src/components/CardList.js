import React, { useState } from "react";
import HogCard from "./HogCard";

function CardList({ hogs }) {
	const [showGreased, setShowGreased] = useState(true);
	const [hogsToShow, setHogsToShow] = useState(hogs);

	function handleGreaseFilter() {
		if (showGreased) {
			setHogsToShow(() =>
				hogsToShow.filter((hog) => hog.greased === showGreased)
			);
		} else {
			setHogsToShow(() => hogs);
		}
		setShowGreased(() => !showGreased);
	}

	function handleSort(e) {
		let sortKey = e.target.value;
		if (sortKey === "Name") {
			setHogsToShow((hogsToShow) => [...hogs].sort((a, b) => a.name > b.name ? 1 : -1));
		} else if (sortKey === "Weight") {
      setHogsToShow((hogsToShow) => [...hogs].sort((a,b) => a.weight > b.weight ? 1: -1));
    } else {
      setHogsToShow((hogsToShow) => [...hogs])
    }
	}

	const displayedHogs = hogsToShow.map((hog) => (
		<HogCard key={hog.name} hog={hog} />
	));

	return (
		<>
			<div>
				<input type="checkbox" id="greasebox" onChange={handleGreaseFilter} />
				<label htmlFor="greased">Greased Hogs</label>
				<br></br>
				<br></br>
				<select onChange={handleSort}>
					<option name="All">Sort by</option>
					<option name="name">Name</option>
					<option name="weight">Weight</option>
				</select>
				<br></br>
				<br></br>
			</div>
			<div className="ui three stackable cards">{displayedHogs}</div>
		</>
	);
}

export default CardList;
