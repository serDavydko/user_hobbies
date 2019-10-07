import React, { useState } from 'react';

const DetailsInput = ({ handleAddHobby, activeUserId }) => {
  const [value, setValue] = useState({});
  const handleChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  return (
    <form
      className="details-Input-form"
      onSubmit={e => handleAddHobby(e, { ...value, userId: activeUserId }, setValue({}))}
    >
      <select
        className="Detail-input-passion"
        onChange={e => handleChange(e)}
        placeholder="Enter user passion"
        value={value.passion || ''}
        name="passion"
      >
        <option value="">Enter user passion</option>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
        <option value="Very-High">Very-High</option>
      </select>
      <input
        className="Detail-input-hobby"
        onChange={e => handleChange(e)}
        placeholder="Enter user hobby"
        type="text"
        name="hobby"
        value={value.hobby || ''}
        maxLength="50"
      />
      <input
        className="Detail-input-year"
        onChange={e => handleChange(e)}
        placeholder="Enter year"
        type="number"
        name="sinceYear"
        value={value.sinceYear || ''}
        min="1"
        maxLength="4"
      />
      <input className="Detail-input-btn" type="submit" value="Add" />
    </form>
  );
};

export default DetailsInput;
