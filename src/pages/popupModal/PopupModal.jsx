import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
//
import { useSelector, useDispatch } from "react-redux";
import { changeUserName, changeNameWithValue } from "../../redux/productsSlice";
import { useRef } from "react";
import { toggleModal } from "../../redux/nameModalSlice";
function LoginModal() {
  // modal open & close
  const show = useSelector((state) => state.toggleModal.show);

  // Update Username in Redux
  console.log(show);
  const inputUsername = useRef("");
  const name = useSelector((state) => state.toggleModal.name);
  const dispatch = useDispatch();
  const changeName = (e) => {
    e.preventDefault();
    console.log(inputUsername.current.value);
    dispatch(changeNameWithValue(inputUsername.current.value));
    dispatch(toggleModal());
  };
  return (
    <>
      
      <Modal show={show} onHide={() => dispatch(toggleModal())}>
        <Modal.Header closeButton>
          <Modal.Title>Hi, Login with your first name</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <input ref={inputUsername} type="text" defaultValue={name} />
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => dispatch(toggleModal())}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={(e) => {
              changeName(e);
            }}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default LoginModal;
