import { BrowserRouter,Routes,Route,Navigate } from "react-router-dom";
import Users from '../pages/Users'
import UserDetails from '../pages/UserDetails'

function AppRouter(){
return(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Navigate to ='/users'/>}/>
    <Route path="/users" element={<Users/>}/>
    <Route path="/users/:id" element={<UserDetails/>}/>
  </Routes>
  </BrowserRouter>
    );
}

export default AppRouter;