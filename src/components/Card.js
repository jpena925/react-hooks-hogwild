import React from "react";
import { useState } from "react";

export default function Card({ hogs }) {
  const [hogInfo, setHogInfo] = useState(false);

  function handleImageClick(event) {
    setHogInfo(() => !hogInfo);
    console.log(event.target.parentNode);
  }

  const eachHogCard = hogs.map((hog) => {
    const extraDetails = (
      <>
        <p>Specialty: {hog.specialty}</p>
        <p>Weight: {hog.weight}</p>
        <p>{hog.greased ? "Greased" : "Not Greased"}</p>
        <p>Highest Medal Achieved: {hog["highest medal achieved"]}</p>
      </>
    );

    return (
      <div className="pigTile">
        <img src={hog.image} onClick={handleImageClick} />
        <h2>{hog.name}</h2>
        {hogInfo ? extraDetails : null}
      </div>
    );
  });
  return eachHogCard;
}
