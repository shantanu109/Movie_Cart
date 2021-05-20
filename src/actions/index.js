// {
//     type: 'ADD_MOVIES',
//     movies: [m1,m2,m3]

// }

//Action types

export const ADD_MOVIES = "ADD_MOVIES";

export const ADD_FAVOURITE = "ADD_FAVOURITES";

export const REMOVE_FROM_FAVOURITE = "REMOVE_FROM_FAVOURITES";

export const SET_SHOW_FAVOURITE = "SET_SHOW_FAVOURITES";

export const ADD_MOVIE_TO_LIST = "ADD_MOVIE_TO_LIST";

export const ADD_SEARCH_RESULT = "ADD_SEARCH_RESULT"


//Action Creators for returning actions

export function addMovies(movies) {

    return {
        type: ADD_MOVIES,
        movies
      }

}

export function addFavourites(movie) {

    return {
        type: ADD_FAVOURITE,
        movie
      }

}

export function removeFromFavourites(movie) {

    return {
        type: REMOVE_FROM_FAVOURITE ,
        movie
      }

}

export function setShowFavourites(val) {

    return {
        type: SET_SHOW_FAVOURITE ,
        val
      }

}

export function addMovieToList(movie){
    return {
        type:ADD_MOVIE_TO_LIST,
        movie
    }
}

//If you get an action, simply pass along the action to reducer like above
//If you get a function like below, call the function like this(below) with dispatch as the argument
//Middleware is called just after we dispatch the action and just before it reaches the reducer

export function handleMovieSearch(movie) {
    //responsible for getting the data from the server
    
    const url = `http://www.omdbapi.com/?apikey=3ca5df7&t=${movie}`;
    //This particular function is called as Thunk

    return function (dispatch) {
        fetch(url)
        .then(response => response.json())
        .then(movie => {
            console.log('movie', movie);

           //dispatch an action and adding it to the store
            dispatch(addMovieSearchResult(movie));
        })
    }
    
}


export function addMovieSearchResult(movie){
    return { 
        type: ADD_SEARCH_RESULT, 
        movie
    };
}
