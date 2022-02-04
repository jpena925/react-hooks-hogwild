import React, { useState } from "react";
import HogCard from "./HogCard"

function CardList({ hogs }) {
  const [showGreased, setShowGreased] = useState(true)
  const [hogsToShow, setHogsToShow] = useState(hogs)

  function handleGreaseFilter(){
    if(showGreased){
    setHogsToShow(() => hogsToShow
      .filter(hog => hog.greased === showGreased))
    } else {
      setHogsToShow(() => hogs)
    }
    setShowGreased(() => !showGreased)
  }


  return (
    <>
      <div>
        <input type="checkbox" id="greasebox" onChange={handleGreaseFilter}/>
          <label htmlFor="greased">Greased Hogs</label>
        <br></br>
        <br></br>
      </div>
      <div className = "ui three stackable cards">
        {hogsToShow.map((hog) => (
          <HogCard key={hog.name} hog={hog} />
        ))}
      </div>
    </>
    );
  }

export default CardList