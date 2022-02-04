import React, { useState } from 'react';

function HogCard({ hog }) {
    const [hogInfo, setHogInfo] = useState(false)

    const extraDetails = (
        <>
          <p>Specialty: {hog.specialty}</p>
          <p>Weight: {hog.weight}</p>
          <p>{hog.greased ? "Greased" : "Not Greased"}</p>
          <p>Highest Medal Achieved: {hog["highest medal achieved"]}</p>
        </>
      );
    

function handleShowInfo(event){
    setHogInfo(() => !hogInfo)
}

  return (
  <div onClick={handleShowInfo}>
      <img src={hog.image} />
      <h3>{hog.name}</h3>
      {hogInfo ? extraDetails : null}
  </div>);
}

export default HogCard;
