import React from 'react';
import {connect} from 'react-redux';
import {data as moviesList} from '../data';
import Navbar from './Navbar';
import MovieCard from './MovieCard';
import {addMovies, setShowFavourites} from '../actions';
//import {connect} from '../index';

class App extends React.Component {

  componentDidMount(){
    //Make Api Call
    //When we get the movies, we dispatch an action that HEY we want to add the movies to the STORE
    //dispatch action
    // const {store} = this.props;

    // store.subscribe(() => {
    //   console.log('UPDATED');
    //   //Update our APP component

    //   this.forceUpdate();
    // })

    //Returning the object

    this.props.dispatch(addMovies(moviesList));

    // Flow :  Dispatch an action to add the movies ---> Subscription is called ---> We force update our Application

    //console.log('STATE', this.props.store.getState())
  }

  isMovieFavourite = (movie) => {
    const {movies} = this.props;

    const index = movies.favourites.indexOf(movie);

    if (index !== -1){
      //Found the movie
      return true
    }
    return false
  }

  onChangeTab = (val) => {
    this.props.dispatch(setShowFavourites(val))
  }
  render(){
    const {movies, search} = this.props;   //{movies:{}, search:{}}
    const { list , favourites, showFavourites} = movies;   
    console.log('RENDER');

    const displayMovies = showFavourites ? favourites : list;

    return (
      <div className="App">
        <Navbar search={search}/>
        <div className="main">
          <div className="tabs">
            <div className={`tab ${showFavourites ? '' : 'active-tabs'}`} onClick={() => this.onChangeTab(false)}>Movies</div>
            <div className={`tab ${showFavourites ? 'active-tabs' : ''}`} onClick={() => this.onChangeTab(true)}>Favourites</div>
          </div>

          <div className="list">
            {displayMovies.map((movie,index) => (
              <MovieCard 
                movie={movie} 
                key={`movies-${index}`} 
                dispatch={this.props.dispatch} 
                isFavourite={this.isMovieFavourite(movie)}
              />
            ))}
          </div>
          {displayMovies.length === 0 ? <div className="no-movies">No Movies to display</div> : null}
        </div>
      </div>

    );
  }
}

// class AppWrapper extends React.Component{

//   render() {
//     return (
//       <StoreContext.Consumer>
//         {(store) => <App store={store} />}

//       </StoreContext.Consumer>

//     )
//   }
// }
//This callback will tell that what data we want from the store
function mapStateToProps(state){
  //Tell what all properties I want from the store
  return {
    //Telling the function that I want this amount of data in my component
    //I want movies and search as props inside my App component
    movies: state.movies,
    search: state.movies

  }

};
//In this connect function,we'll have to tell that what data we want from the store and which component we want to connect to this store
const connectedAppComponent = connect(mapStateToProps)(App)
export default connectedAppComponent;
