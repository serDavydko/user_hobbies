import React, { useState, useEffect } from 'react';
import {
  getNames, getHobbies, createName, createHobby, removeHobby,
} from '../sources';
import DetailsInput from '../components/DetailsInput';
import DetailsList from '../components/DetailsList';
import UsersInput from '../components/UsersInput';
import UsersList from '../components/UsersList';

const UserHobbiesContainer = () => {
  const [names, setNames] = useState([]);
  const [hobbies, setHobbies] = useState([]);
  const [activeUserId, setActiveUserId] = useState('');

  const handleCreateUser = async(e, data) => {
    e.preventDefault();
    if (Object.keys(data).length >= 1) {
      await createName(data);
      const dataFromServer = await getNames();

      setNames(dataFromServer);
    }
  };

  const handleChangeActive = (id) => {
    setActiveUserId(id);
  };

  const handleAddHobby = async(e, data) => {
    e.preventDefault();
    if (Object.keys(data).length >= 3) {
      await createHobby(data);
      const dataFromServer = await getHobbies();

      setHobbies(dataFromServer);
    }
  };

  const handleRemoveHobby = async id => {
    await removeHobby(id);
    const dataFromServer = await getHobbies();

    setHobbies(dataFromServer);
  };

  useEffect(() => {
    (async () => {
      const dataFromServer = await getNames();
      const dataFromServ = await getHobbies();

      setNames(dataFromServer);
      setHobbies(dataFromServ);
    })();
  }, []);

  console.log(activeUserId);

  return (
    <section className="UserHobbiesContainer">
      <h3 className="UserHobbiesContainer__header">User hobbies</h3>
      <div className="content-folder">
        <div className="UsersBlock">
          <UsersInput handleCreateUser={handleCreateUser} />
          <UsersList handleChangeActive={handleChangeActive} names={names} activeUserId={activeUserId}/>
        </div>
        <div className="DetailsBlock">
          <DetailsInput handleAddHobby={handleAddHobby} activeUserId={activeUserId} />
          <DetailsList
            hobbies={hobbies.filter(hobby => hobby.userId === activeUserId)}
            handleRemoveHobby={handleRemoveHobby}
          />
        </div>
      </div>
    </section>
  );
};

export default UserHobbiesContainer;
