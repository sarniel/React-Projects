import React from 'react'
import Card from './Card'
import Style from './ErrorModal.module.css'
import Button from './Button'
import ReactDOM from 'react-dom'

const Modal = (props) => {
  return (
    <React.Fragment>
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
    </React.Fragment>
  )
}

const ErrorModal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Modal
          onCloseModal={props.onCloseModal}
          title={props.title}
          message={props.message}
        />,
        document.getElementById('modal-root'),
      )}
    </React.Fragment>
  )
}

export default ErrorModal
