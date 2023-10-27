import React from 'react'

function CapstoneCard({countryID, countryName}) {
  return (
    <section>
        <h2>{countryName}</h2>
        <p>{countryID}</p>
    </section>
  )
}

export default CapstoneCard