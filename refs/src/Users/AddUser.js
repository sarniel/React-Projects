import React, { useState, useRef } from 'react'
import Card from '../UI/Card'
import Button from '../UI/Button'
import Style from './AddUser.module.css'
import ErrorModal from '../UI/ErrorModal'

const AddUser = (props) => {
  const nameInputRef = useRef()
  const ageInputRef = useRef()

  const [error, setError] = useState()

  const AddUserHandler = (event) => {
    event.preventDefault()
    const nameInputRefValue = nameInputRef.current.value
    const ageInputRefRefValue = ageInputRef.current.value
    if (
      nameInputRefValue.trim().length === 0 ||
      ageInputRefRefValue.trim().length === 0
    ) {
      setError({
        title: 'Invalid Input',
        message: 'Please enter a valid name and age (not empty values).',
      })
      return
    }

    if (+ageInputRefRefValue < 1) {
      setError({
        title: 'Invalid Age',
        message: 'Please enter a valid age (> 0)',
      })
      return
    }

    const dataObject = {
      id: Math.random().toString(),
      username: nameInputRefValue,
      age: ageInputRefRefValue,
    }

    props.onAddUser(dataObject)

    nameInputRef.current.value = ''
    ageInputRef.current.value = ''
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
          <input id="username" type="text" ref={nameInputRef} />
          <label htmlFor="age">Age (Years)</label>
          <input type="number" name="" id="age" ref={ageInputRef} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </React.Fragment>
  )
}

export default AddUser
