import React from 'react'

function page({params}) {
  return (
    <div>
      <h1 className='text-3xl text-amber-200'>meat item {params.id} review {params.id2}</h1>
    </div>
  )
}

export default page
