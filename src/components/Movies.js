import React, { useEffect, useState } from 'react';

import Header from './Header';
import MovieList from './MovieList';
import SearchBox from './SearchBox';
import AddFavourites from './AddFavourites';
import './movies.css';
import './bootstrap.css';
import RemoveFavorites from './RemoveFavorites';

//Movie component
const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [fav, setFav] = useState([]);
    const [search, setSearch] = useState('');

    //API Requests getRequest
    const getMovies = async(search) => {
        const movieUrl = `http://www.omdbapi.com/?s=${search}&apikey=b4b43d2d`;
        const response = await fetch(movieUrl);
        const data = await response.json();
        console.log(data);
        if (data.Search){
            setMovies(data.Search);
        }
        
    };

    useEffect(
        ()=>getMovies(search) 
        ,[search]
    );

    //Retrieving our fav movies when page loads
    useEffect(
        () => { 
            const favMovies = JSON.parse(localStorage.getItem('sams-fav-movies', ));
            setFav(favMovies)
        }, [] //An empty array since we want it to happen when the page loads
    );

    // save movies to local storage for retrieval after page refresh
    const saveToLocalStorage = (items) =>{
        localStorage.setItem('sams-fav-movies', JSON.stringify(items))
    };

    const AddFavMovie = (movie) =>{
        const newFavList = [...fav, movie];
        setFav(newFavList);
		saveToLocalStorage(newFavList);
    };

    //Remove/Delete Favorite movie
    const RemoveFav = (movie) => {
        const newFavList = fav.filter(
			(favs) => favs.imdbID !== movie.imdbID 
		);

		setFav(newFavList);
		saveToLocalStorage(newFavList);
    };

    return (
        <>
        <div className="row d-flex align-items-centre justify-content-center mt-3 mb-4">
             <Header text="Movies App" />
             <br></br>
             {"                    "}
             <SearchBox searchValue={ search } setSearch={ setSearch } />
            
        </div>
        <div className="row">
           <MovieList movies = { movies } handleFavClick={ AddFavMovie } favComp={ AddFavourites } />
        </div>

        <div className="row d-flex align-items-center justify-content-center mt-4 mb-4">
            <Header text="Favourite List" />
        </div>
        <div className="row mb-5">
        <MovieList movies = { fav } 
            handleFavClick={ RemoveFav } 
            favComp={ RemoveFavorites }
             />
        </div>
        
        </>
    )
}

export default Movies;
