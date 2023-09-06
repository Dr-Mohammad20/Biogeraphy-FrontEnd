import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_URL;
const getCourses = async () => {
  const response = await axios.get(`${BASE_URL}/getCourses`);
  return response.data;
};

const getCourse = async (id) => {
  const response = await axios.get(`${BASE_URL}/getCourse/${id}`);
  return response.data[0];
};

const deleteCourse = (id) => {
  axios.delete(`${BASE_URL}/deleteCourse/${id}`);
};

const updateCourse = async (id, name) => {
  axios.put(`${BASE_URL}/updateCourse`, {
    id: id,
    name: name,
  });
};

const insertCourse = (name) => {
  axios.post(`${BASE_URL}/InsertNewCourse`, {
    name: name,
  });
};

export { getCourses, deleteCourse, updateCourse, insertCourse, getCourse };
