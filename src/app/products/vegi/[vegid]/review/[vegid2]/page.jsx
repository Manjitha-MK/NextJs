import React from 'react'

function page({params}) {
  return (
    <div>
      <h1>vegi item {params.vegid} review {params.vegid2} </h1>
    </div>
  )
}

export default page
