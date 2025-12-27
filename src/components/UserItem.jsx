import { Link } from "react-router-dom";

export default function UserItem({user}){
return(
<div className="border p-4 rounded flex justify-between items-center">
      <div>
        <p className="font-semibold">{user.name}</p>
        <p className="text-sm text-gray-600">{user.email}</p>
      </div>

<Link to={`/users/${user.id}`} 
className="bg-blue-600 text-white px-3 py-1 rounded">
    View
</Link>
</div>
);

}