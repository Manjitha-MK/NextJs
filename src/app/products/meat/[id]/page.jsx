import React from 'react'

async function page({ params }) {
  return (
    <div>
      <h1>Meat item {params.id}</h1>
      <h2>Hello</h2>
    </div>
  )
}

export default page