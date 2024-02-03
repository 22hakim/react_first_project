import React from 'react'

const Users = (props) => {
  return (
    <div>
      <div className="user">Name : {props.name}</div>
    </div>
  )
}

Users.defaultProps = 
{
  name : "max"
}

export default Users