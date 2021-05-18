// {
//     type: 'ADD_MOVIES',
//     movies: [m1,m2,m3]

// }

//Action types

export const ADD_MOVIES = "ADD_MOVIES";

export const ADD_FAVOURITE = "ADD_FAVOURITES";

export const REMOVE_FROM_FAVOURITE = "REMOVE_FROM_FAVOURITES";

export const SET_SHOW_FAVOURITE = "SET_SHOW_FAVOURITES"

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

