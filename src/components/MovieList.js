import React from 'react';
import './movies.css';

const MovieList = (props) => {
    const Favourite = props.favComp;
    return (
        <> 
               { 
                  props.movies.map((movie, index) => (
                      <div className="image-container d-flex justify-content-centre mt-3" >
                          <img src={ movie.Poster } alt="movie" />
                          
                          
                          <div onClick={ ()=>props.handleFavClick(movie) }
                           className="overlay d-flex align-items-center justify-content-center"> 
                          <Favourite /> 
                          <p style={{color:`rgb(184, 12, 41)`}}>Year: {JSON.stringify(parseInt(movie.Year))}
                          </p>
                          </div>
                      </div>
                      
                      

                  ))
               
               }
        </>
    )
}

export default MovieList;
