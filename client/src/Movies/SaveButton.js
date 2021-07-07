import React from 'react';

const SaveButton = (props) => {

    const addToSavedList = movie => {
        setSavedList( [...savedList, movie] );
      };

      return (
        <div className="save-button" onClick={() => addToSavedList(movie) } >Save</div>
      )
}

export default SaveButton