import React from 'react'

function GreyArea(prop) {
    return (
      <div style={{ color: "#03a9f3", backgroundColor: "#d9d9d9" }}>
        <p>{prop.text}</p>
      </div>
    );
}

export default GreyArea
