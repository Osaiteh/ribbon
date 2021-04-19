import React from 'react'

function GreyArea(prop) {
    return (
      <div style={{ color: "#03a9f3", backgroundColor: "#d9d9d9", margin: "0px", height: "5vh" }}>
        <p>{prop.text}</p>
      </div>
    );
}

export default GreyArea
