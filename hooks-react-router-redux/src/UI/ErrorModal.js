import React from 'react'
import Card from './Card'
import Style from './ErrorModal.module.css'
import Button from './Button'
const ErrorModal = (props) => {
  return (
    <div>
      <div className={Style.backdrop} onClick={props.onCloseModal} />
      <div className={Style.modal}>
        <Card>
          <header className={Style.header}>
            <h2>{props.title}</h2>
          </header>
          <div className={Style.content}>{props.message}</div>
          <footer className={Style.actions}>
            <Button onClick={props.onCloseModal}>Okay</Button>
          </footer>
        </Card>
      </div>
    </div>
  )
}

export default ErrorModal
