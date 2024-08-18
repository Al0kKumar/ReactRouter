import React from 'react'
import {useParams} from 'react-router-dom'

function user() {
    const {userid} = useParams()
  return (
    <div className='bg-gray-400'> User :{userid}</div>
  )
}

export default user