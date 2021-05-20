import { combineReducers } from 'redux';
import {ADD_MOVIES, ADD_FAVOURITE, REMOVE_FROM_FAVOURITE,SET_SHOW_FAVOURITE, ADD_MOVIE_TO_LIST, ADD_SEARCH_RESULT} from '../actions';



const initialMoviesState = {
    list: [],
    favourites: [],
    showFavourites: false
}
export function movies (state= initialMoviesState, action){

    // if (action.type === ADD_MOVIES){
    //     return {
    //         ...state,
    //         list: action.movies
    //     }
    // }

    // return state

    switch (action.type){

        case ADD_MOVIES:
            return {
                ...state,
                list: action.movies
            }

        case ADD_FAVOURITE:
            return{
                ...state,
                favourites:[action.movie, ...state.favourites]
            }

        case REMOVE_FROM_FAVOURITE:

            const filteredArray = state.favourites.filter(
                movie => movie.Title !== action.movie.Title
            );

            return {
                ...state,
                favourites: filteredArray
            }

        case SET_SHOW_FAVOURITE:
            return {
                ...state,
                showFavourites: action.val
            }

        case ADD_MOVIE_TO_LIST:
            return{
                ...state,
                list: [action.movie, ...state.list]
            }

        default:
            return state
    }

}

const initialSearchState = {
    //If you are using a search parameter, keep result:[] to an array
    result: {},
    showSearchResults: false
};

export function search (state = initialSearchState,action){
    
    switch (action.type){
        case ADD_SEARCH_RESULT:
            return {
                ...state,
                result:action.movie,
                showSearchResults: true
            }

        case ADD_MOVIE_TO_LIST:
            return{
                ...state,
                showSearchResults:false
            }
    
        default:
            return state
    }

}


//Root Reducer
//because we can provide only one reducer to my createStore
//We have created a rootReducer which we will pass to createStore as it only takes one Reducer

const initialRootState = {
    movies: initialMoviesState,
    search: initialSearchState
}
// export default function rootReducer (state = initialRootState,action){
//     return {
//         //movies should be managed bt moviesReducer and search should be managed by searchReducer
//         movies: movies(state.movies,action),
//         search: search(state.search,action)
//     }
// }

export default combineReducers({
    //The method is smart enough to call my movies reducer with the state as well as the action
    movies,
    search
})
