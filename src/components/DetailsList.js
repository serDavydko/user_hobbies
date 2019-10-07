import React from 'react';

const DetailsList = ({
  hobbies,
  handleRemoveHobby,
  activeUserId,
  handleConfirmRemove,
}) => {
  if (hobbies.length > 0 && activeUserId) {
    return (
      <ul>
        {hobbies
          && hobbies.map(hobby => (
            <li key={hobby.id} className="details-item">
              <p className="details-item-passion">
                Passion: {hobby.passion}
              </p>
              <p className="details-item-hobby">
                {hobby.hobby}
              </p>
              <p className="details-item-since">
                Since {hobby.sinceYear}
              </p>
              {!hobby.confirmRemove ? (
                <button
                  className="details-item-btn"
                  onClick={() => handleConfirmRemove(hobby.id)}
                  type="button"
                >
                  X
                </button>
              ) : (
                <div className="details-item-confirmation">
                  <button
                    type="button"
                    onClick={() => handleRemoveHobby(hobby.id)}
                  >
                    Apply
                  </button>
                  <button
                    type="button"
                    onClick={() => handleConfirmRemove(hobby.id)}
                  >
                    Back
                  </button>
                </div>
              )}
            </li>
          ))}
      </ul>
    );
  }

  if (hobbies.length < 1 && activeUserId) {
    return (
      <div className="informational_message">
        This user has not hobby yet, use upper form for adding
      </div>
    );
  }

  return (
    <div className="informational_message">
    Choose user for view details
  </div>
  );
};

export default DetailsList;
