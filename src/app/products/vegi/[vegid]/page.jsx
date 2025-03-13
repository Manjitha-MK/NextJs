import React from 'react'

function page({params}) {
  return (
    <div>
      <h1>vegitable item {params.vegid}</h1>
    </div>
  )
}

export default page
