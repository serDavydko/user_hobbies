export const getNames = async() => {
  const response = await fetch('https://user-hobby-api.herokuapp.com/users');
  const result = await response.json();

  return result;
};

export const getHobbies = async() => {
  const response = await fetch(`https://user-hobby-api.herokuapp.com/hobbies`);
  const result = await response.json();

  return result;
};

export const createName = async(name) => {
  await fetch('https://user-hobby-api.herokuapp.com/users', {
    method: 'post',
    body: JSON.stringify(name),
    headers: {
      'content-type': 'application/json',
    },
  });
};

export const createHobby = async(body) => {
  await fetch('https://user-hobby-api.herokuapp.com/hobbies', {
    method: 'post',
    body: JSON.stringify(body),
    headers: {
      'content-type': 'application/json',
    },
  });
};

export const removeHobby = async(id) => {
  await fetch(`https://user-hobby-api.herokuapp.com/hobbies/${id}`, {
    method: 'delete',
    headers: {
      'content-type': 'application/json',
    },
  });
};
