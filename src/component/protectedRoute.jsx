
import { useContext } from 'react';
import { Navigate, useLocation, } from 'react-router-dom';
import { AuthContext } from './AuthProvider';

const protectedRoute = ({children}) => {
console.log(children);

const {user} = useContext(AuthContext)
const location = useLocation()
console.log(location)
if(user){
    return children
}
   return <Navigate to="/login" state={location.pathname}></Navigate>
};

export default protectedRoute;