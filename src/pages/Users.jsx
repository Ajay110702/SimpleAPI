import { getUsers } from "../services/UserService";
import UserItem from '../components/UserItem'
import { useEffect, useState } from "react";

function Users(){
const [users,setUsers]=useState([]);

useEffect(() => {
  const fetchUser = async () => {
    try {
      const data = await getUserById(id);
      setUsers(data);
    } catch {
      alert("Failed to load user");
    }
  };
  fetchUser();
}, [id]);


return(
<div className="max-w-3xl mx-auto p-6 space-y-4">
<h1 className="text-2xl font-bold">Users</h1>
{users.map((user)=>(
    <UserItem key={user.id} user={user}/>
))}
</div>
);
}


export default Users;