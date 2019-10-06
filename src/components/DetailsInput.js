import React, { useState } from 'react';

const DetailsInput = ({ handleAddHobby, activeUserId }) => {
  const [value, setValue] = useState({});
  const handleChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  return (
    <form className="details-Input-form" onSubmit={e => handleAddHobby(e, { ...value, userId: activeUserId }, setValue({}))}>
      <input
        className="Detail-input-passion"
        onChange={e => handleChange(e)}
        placeholder="Enter user passion"
        list="passion"
        value={value.passion || ''}
        name="passion"
      />
      <datalist id="passion">
        <option value="Low" />
        <option value="Medium" />
        <option value="High" />
        <option value="Very-High" />
      </datalist>
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
