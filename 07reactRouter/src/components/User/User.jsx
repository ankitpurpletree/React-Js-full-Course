import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
  const { userid } = useParams()
  return (
    <div>
      user:10{userid}
    </div>
  )
}

export default User
