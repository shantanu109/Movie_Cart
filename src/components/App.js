import React from 'react';
import {data} from '../data';
import Navbar from './Navbar';
import MovieCard from './MovieCard';
import {addMovies} from '../actions';

class App extends React.Component {

  componentDidMount(){
    //Make Api Call
    //When we get the movies, we dispatch an action that HEY we want to add the movies to the STORE
    //dispatch action
    const {store} = this.props;

    store.subscribe(() => {
      console.log('UPDATED');
      //Update our APP component

      this.forceUpdate();
    })

    //Returning the object

    store.dispatch(addMovies(data));

    // Flow :  Dispatch an action to add the movies ---> Subscription is called ---> We force update our Application

    console.log('STATE', this.props.store.getState())
  }

  render(){

    const { list } = this.props.store.getState();   //{list: [], favourites: []}
    console.log('RENDER');

    return (
      <div className="App">
        <Navbar />
        <div className="main">
          <div className="tabs">
            <div className="tab">Movies</div>
            <div className="tab">Favourites</div>
          </div>

          <div className="list">
            {list.map((movie,index) => (
              <MovieCard movie={movie} key={`movies-${index}`}/>
            ))}
          </div>
        </div>
      </div>

    );
  }
}

export default App;
