import React from 'react'
import Card from '../UI/Card'
import Style from './UserList.module.css'

const UserList = (props) => {
  return (
    <Card>
      <ul className={Style.list}>
        {props.items.map((user) => (
          <li key={user.id} className={Style.item}>
            {user.username} - {user.age} Years Old
          </li>
        ))}
      </ul>
    </Card>
  )
}

export default UserList
