import React from 'react';
import satData from "./satData";

const Buttons = (props) => {
  const { displaySats, filterByType, setSat } = props;

  return (
    <div>

      {displaySats.map((sat, id) => (
        <button onClick={() => filterByType(sat)} key={id}>
          {sat} Orbit
        </button>
      ))}

      <button onClick={() => setSat(satData)}>
        All Orbits
      </button>
    </div>
  );
};

export default Buttons;