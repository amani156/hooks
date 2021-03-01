/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, { Component,useState } from 'react';
import {Modal , Form , Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';




const AddModal =({ show, handleClose, addNewMovie })=>{
    
    const [newmovie, setNewmovie] = useState({
        name: "",
        img: "",
        year: 0,
        rate: "",
      });


      const handleChange = (e) => {
        setNewmovie({ ...newmovie, [e.target.name]: e.target.value });
      };

 
        return (
            <div>
                 
                 <Modal show={show}>
        <Modal.Header closeButton>
          <Modal.Title>Add a new Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Movie Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter movie title"
                name="title"
                onChange={handleChange}
              />
              <Form.Label>Movie Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter movie description"
                name="description"
                onChange={handleChange}
              />
              <Form.Label>Movie Poster</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter movie poster"
                name="img"
                onChange={handleChange}
              />
              <Form.Label>Movie Rate</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter movie rate"
                name="rate"
                onChange={handleChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              handleClose();
              addNewMovie(newmovie);
            }}
          >
            Add Movie
          </Button>
        </Modal.Footer>
      </Modal>
            </div>
        )
    }

export default AddModal
