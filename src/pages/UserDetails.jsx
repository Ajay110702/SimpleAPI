import { useState,useEffect } from "react";
import { useParams,useNavigate } from "react-router-dom";

import { getUserById,updateUser,deleteUser } from "../services/UserService";

import UserEditForm from '../components/UserEditForm'


export default function UserDetails(){

    const {id}=useParams();
    const navigate=useNavigate();
    const [user,setUser]=useState(null);

    useEffect(()=>{
    getUserById(id).then(setUser);
    },[id]);

const updateHandler = async (updatedUser) => {
 console.log("Updating user: ",updatedUser)
    

    try {
      await updateUser(id, updatedUser);
      setUser(updatedUser);
      navigate('/users');
    } catch {
      alert("Update failed");
    }
  };

const deleteHandler = async () => {

    try {
      await deleteUser(id);
      navigate("/users");
    } catch {
      alert("Delete failed");
    }
  };

   if (!user) return <p className="p-6">Loading...</p>;

   return (
  <div className="max-w-xl mx-auto p-6 space-y-4">
      <h1 className="text-xl font-bold">User Details</h1>

   <UserEditForm user={user} onUpdate={updateHandler} />
    
     <button onClick={deleteHandler}
        className="bg-red-500 text-white px-4 py-2 rounded"
      > 
      Delete User
      </button>
    </div>
   );

}