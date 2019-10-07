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

  const handleConfirmRemove = (id) => {
    setHobbies(
      hobbies.map((hobby) => {
        if (hobby.id !== id) {
          return hobby;
        }

        return {
          ...hobby,
          confirmRemove: !hobby.confirmRemove,
        };
      })
    );
  };

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
    if (Object.keys(data).length >= 4) {
      await createHobby(data);
      const hobbiesFromServ = await getHobbies();

      setHobbies(hobbiesFromServ.map(hobby => ({ ...hobby, confirmRemove: false })));
    }
  };

  const handleRemoveHobby = async(id) => {
    await removeHobby(id);
    const hobbiesFromServ = await getHobbies();

    setHobbies(hobbiesFromServ.map(hobby => ({ ...hobby, confirmRemove: false })));
  };

  useEffect(() => {
    (async() => {
      const namesFromServer = await getNames();
      const hobbiesFromServ = await getHobbies();

      setNames(namesFromServer);
      setHobbies(hobbiesFromServ.map(hobby => ({ ...hobby, confirmRemove: false })));
    })();
  }, []);

  return (
    <section className="UserHobbiesContainer">
      <h3 className="UserHobbiesContainer__header">User hobbies</h3>
      <div className="content-folder">
        <div className="UsersBlock">
          <UsersInput handleCreateUser={handleCreateUser} />
          <UsersList
            handleChangeActive={handleChangeActive}
            names={names}
            activeUserId={activeUserId}
          />
        </div>
        <div className="DetailsBlock">
          <DetailsInput
            handleAddHobby={handleAddHobby}
            activeUserId={activeUserId}
          />
          <DetailsList
            hobbies={hobbies.filter(hobby => hobby.userId === activeUserId)}
            handleRemoveHobby={handleRemoveHobby}
            handleConfirmRemove={handleConfirmRemove}
            activeUserId={activeUserId}
          />
        </div>
      </div>
    </section>
  );
};

export default UserHobbiesContainer;
