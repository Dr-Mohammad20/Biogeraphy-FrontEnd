import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_URL;
const getUsers = async () => {
  const response = await axios.get(`${BASE_URL}/getUsers`);
  return response.data;
};

const deleteUser = async (id) => {
  await axios.delete(`${BASE_URL}/deleteUser/${id}`);
};

const updateUser = async (id, username, password) => {
  axios.put(`${BASE_URL}/updateUser`, {
    id: id,
    username: username,
    password: password,
  });
};

const insertUser = async (username, password) => {
  axios.post(`${BASE_URL}/InsertNewUser`, {
    username: username,
    password: password,
  });
};

export { getUsers, deleteUser, updateUser, insertUser };
