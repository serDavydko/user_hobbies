import React from 'react';

const UsersList = ({ names, handleChangeActive, activeUserId }) => (
  <ul>
    {names
      && names.map(name => (
        <li key={name.id} className="user-item" title={name.name}>
          <button
            className="user-item-btn"
            type="button"
            disabled={name.id === activeUserId}
            onClick={() => handleChangeActive(name.id)}
          >
            {name.name}
          </button>
        </li>
      ))}
  </ul>
);

export default UsersList;
