import React from 'react';
import {connect} from 'react-redux';
import {addMovieToList, handleMovieSearch} from '../actions'
//import { connect } from '..';
//import {data} from '../data';
//import { render } from 'react-dom';
//import { search } from '../reducers';


class Navbar extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            
            searchText:''
        }
    }

    handleAddMovies = (movie) => {
        this.props.dispatch(addMovieToList(movie));
        this.setState({
            showSearchResults: false
        });
    }

    handleSearch = () => {
        const {searchText} = this.state;

        //be responsible for Fetching the data from server and it should send the data to the store as wekk
        this.props.dispatch(handleMovieSearch(searchText))
    }

    handleChange = (e) => {
        this.setState({
            searchText: e.target.value,
            
        });
    }
    render() {
        
        const {result: movie, showSearchResults} = this.props.search;
        return (

            <div className="nav">
                <div className="search-container">
                    <input onChange={this.handleChange} />
                    <button id="search-btn" onClick={this.handleSearch}>Search</button>

                    {showSearchResults &&
                        <div className="search-results">
                            <div className="search-result">
                                <img src={movie.Poster} alt="search-pic" />

                                <div className = 'movie-info'>
                                    <span>{movie.Title}</span>
                                    <button onClick={() => this.handleAddMovies(movie)}>
                                        Add To Movies
                                    </button>
                                </div>
                            </div>
                        </div>
                                     
                    }

                </div>
              
            </div>
          );

    }
  
}

// class NavbarWrapper extends React.Component {
//     render(){
//         return (
//             <StoreContext.Consumer>
//                 {(store) => <Navbar dispatch={store.dispatch} search={this.props.search} />}
//             </StoreContext.Consumer>
//         )
//     }
// }


function mapStateToProps ({search}){
    return {
        search
    }
}
//Exporting NavbarWrapper

export default connect(mapStateToProps)(Navbar);
