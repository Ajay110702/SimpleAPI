import axios from 'axios';

const BASE_URL='https://jsonplaceholder.typicode.com';

export const getUsers=async()=>{
    const res=await axios.get(`${BASE_URL}/users`);
    return res.data;
};

export const getUserById = async (id) => {
  const res = await axios.get(`${BASE_URL}/users/${id}`);
  return res.data;
};

export const updateUser=async(id,userData)=>{
const res=await axios.put(`${BASE_URL}/users/${id}`,userData);
return res.data;
};


export const deleteUser = async (id) => {
  await axios.delete(`${BASE_URL}/users/${id}`);
};