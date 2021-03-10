
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import StarRatingComponent from 'react-star-rating-component';
import { Button } from "react-bootstrap";
import React, { useState } from "react";
import AddModal from "./AddModal";
import { Link } from "react-router-dom";

const MovieList = (props, { movies, addMovie }) => {
    const [show, setShow] = useState("");

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>

                    <div>
                        <Button onClick={handleShow}>Add Movie</Button>
                        <AddModal
                            show={show}
                            handleClose={handleClose}
                            addMovie={addMovie}
                        />
                    </div>

               <div className = "list">
                   {props.movies.map((el) => (
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={el.image} />
                        <Card.Body>
                            <Card.Title>{el.name}</Card.Title>
                        </Card.Body>
                        <Link to={`/movies/${el.id}`}> movie info</Link>
                    </Card>
                      ))}
                     
               </div>
            

                   
       </div>
    )
}
export default MovieList
