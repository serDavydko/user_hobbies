import React from 'react';

const DetailsList = ({ hobbies, handleRemoveHobby }) => {

  return (
    <ul>
      {hobbies
        && hobbies.map(hobby => (
          <li key={hobby.id} className="details-item">
            <p>Passion: {hobby.passion}</p>
            <p>{hobby.hobby}</p>
            <p>Since {hobby.sinceYear}</p>
            <button onClick={() => handleRemoveHobby(hobby.id)} width="40" type="button">
              X
            </button>
          </li>
        ))}
    </ul>
  );
};

export default DetailsList;
