import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';

import SavedList from './Movies/SavedList';


const App = () => {
  const [savedList, setSavedList] = useState( [] );



  return (
    <div>
      <SavedList list={savedList} />
      <Route exact path='/' component={ MovieList } />
      <Route path='/movies/:id' render={ (props) => {
        return(
          <Movie
          {...props}
          addToSavedList={addToSavedList}
          savedList
         />
        )
        
      }
        
      } />

    </div>
  );
};

export default App;
