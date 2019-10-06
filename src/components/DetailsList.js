import React from 'react';

const DetailsList = ({ hobbies, handleRemoveHobby, activeUserId }) => {

  if (hobbies.length > 0 && activeUserId) {
    return (
      <ul>
        {hobbies
          && hobbies.map(hobby => (
            <li key={hobby.id} className="details-item">
              <p>Passion: {hobby.passion}</p>
              <p>{hobby.hobby}</p>
              <p>Since {hobby.sinceYear}</p>
              <button className="details-item-btn" onClick={() => handleRemoveHobby(hobby.id)} type="button">
                X
              </button>
            </li>
          ))}
      </ul>
    );
  }

  if (hobbies.length < 1 && activeUserId) {
    return (
      <div className="informational_message">This user has not hobby yet, use upper form for adding</div>
    );
  }

  return null;

};

export default DetailsList;
