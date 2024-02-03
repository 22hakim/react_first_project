import React from 'react'

const Users = ({name}) => {
  return (
    <div>
      <div className="user">Name : {name}</div>
    </div>
  )
}

Users.defaultProps = 
{
  name : "max"
}

export default Users