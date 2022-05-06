import React, { useState } from 'react'
import Card from '../UI/Card'
import Button from '../UI/Button'
import Style from './AddUser.module.css'
import ErrorModal from '../UI/ErrorModal'

const AddUser = (props) => {
  const [userName, setUserName] = useState('')
  const [userAge, setUserAge] = useState('')
  const [error, setError] = useState()

  const UserNameInput = (event) => {
    event.preventDefault()
    setUserName(event.target.value)
  }
  const UserAgeInput = (event) => {
    event.preventDefault()
    setUserAge(event.target.value)
  }

  const AddUserHandler = (event) => {
    event.preventDefault()

    if (userName.trim().length === 0 || userAge.trim().length === 0) {
      setError({
        title: 'Invalid Input',
        message: 'Please enter a valid name and age (not empty values).',
      })
      return
    }

    if (+userAge < 1) {
      setError({
        title: 'Invalid Age',
        message: 'Please enter a valid age (> 0)',
      })
      return
    }

    const dataObject = {
      id: Math.random().toString(),
      username: userName,
      age: userAge,
    }

    props.onAddUser(dataObject)

    setUserName('')
    setUserAge('')
  }

  const closeModalHandler = () => {
    setError(null)
  }

  return (
    <React.Fragment>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onCloseModal={closeModalHandler}
        />
      )}
      <Card>
        <form action="" onSubmit={AddUserHandler} className={Style.input}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={userName}
            onChange={UserNameInput}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            type="number"
            name=""
            id="age"
            value={userAge}
            onChange={UserAgeInput}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </React.Fragment>
  )
}

export default AddUser
