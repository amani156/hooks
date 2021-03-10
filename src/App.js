/* eslint-disable no-undef */
import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import {useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import MovieList from "./component/MovieList"; 
import Filter from "./component/Filter";
import Navi from "./component/Navi";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Info from './component/Info';



function App () {
  const [ movies , setMovies] =useState([
    {
      id:uuidv4,
      name:"Good fellas",
      image:"/img/good.jpg",
      year:"1990",
      rate:5,
  },
  {
      id:uuidv4,
      name:"The Silence of the Lambs ",
      image:"/img/silence.jpg",
      year:"1991",
      rate:4,
  },
  {
      id:uuidv4,
      name:"Arrival",
      image:"/img/arrival.jpg",
      year:"2016",
      rate:3,
  },
  ]);

 


 const addMovie = (newMovie) => {
  setMovies(movies.concat(newMovie));
};


const [keyWord , setKeyWord] = useState("");
const [keyRate , setKeyRate] = useState(1);

const search = (word) => {
    setKeyWord (word);
};

    return (
      <div className="App-header">
        <BrowserRouter>

        <Navi/>
        <h1 style={{textAlign:'center', color:'red'}}>movie app</h1>
        <Filter keyRate={keyRate} setKeyRate={setKeyRate} search={search}  />
        <MovieList
           movies={movies.filter(
            (movie) =>
              movie.rate >= keyRate &&
              movie.name.toLowerCase().includes(keyWord.toLowerCase().trim())
          )}

        addMovie ={addMovie}
        />
        <Route path="/movies/id" render={(props)=>  <Info {...props} movies={movies}/>}/>
        </BrowserRouter>
        
        
        
      </div>
    )
  }



export default App
