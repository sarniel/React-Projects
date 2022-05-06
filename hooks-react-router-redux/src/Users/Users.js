import React, { useState } from 'react'
import UserList from './UserList'
import AddUser from './AddUser'

const Users = () => {
  const [userList, setUserList] = useState([])

  const AddUserHandler = (newUser) => {
    setUserList((prevUserList) => {
      return [...prevUserList, newUser]
    })
    console.log([newUser])
  }
  return (
    <div>
      <AddUser onAddUser={AddUserHandler} />
      <UserList items={userList} />
    </div>
  )
}

export default Users
