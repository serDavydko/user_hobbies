import React, { useState } from 'react';

const UsersInput = ({ handleCreateUser }) => {
  const [value, setValue] = useState({});

  const handleChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  return (
    <form className="user-Input-form" onSubmit={e => handleCreateUser(e, value, setValue({}))}>
      <input
        className="user-Input"
        onChange={e => handleChange(e)}
        value={value.name || ''}
        autoComplete="off"
        placeholder="Enter user name"
        type="text"
        name="name"
        maxLength="50"
      />
      <input className="user-Input-btn" type="submit" value="Add" />
    </form>
  );
};

export default UsersInput;
