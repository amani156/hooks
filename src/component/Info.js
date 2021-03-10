import React, {useState, useEffect}from 'react'
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import StarRatingComponent from 'react-star-rating-component';



const Info = (props) => {
    const [movie , setMovie]= useState("")

   useEffect(() => {
       setMovie(props.movies.filer(el=>el.id === props.match.prams.id)[0])  
   })




    return (
        <div>
         {props.movies.map((el) => (
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>{el.name}</Card.Title>
                            <Card.Text>{el.year} </Card.Text>
                            <StarRatingComponent name="rate" starCount={5} value={el.rate} />
                        </Card.Body>
                    </Card>
                      ))}


       </div>
            

                   
       
    )
}

export default Info
