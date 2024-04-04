import PropTypes from 'prop-types';
import {createContext, useState} from 'react';
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";
import auth from '../Firebase/Firebase.init';

export const authContext = createContext(null)

const AuthProvider = ({children}) => {
const [user, setUser] = useState(null)
const registerUser = (email,password)=> {
   return createUserWithEmailAndPassword(auth, email, password)
   
}

const loginUser = (email,password)=> {
  return signInWithEmailAndPassword(auth, email, password)
    
}

const authInfo ={
    registerUser,
    loginUser,
    user,
    setUser
    
}
    return (
        <div>
            {
                <authContext.Provider value={authInfo}>
                     {children}
                </authContext.Provider>
            }
           
        </div>
    );
};

export default AuthProvider;

AuthProvider.propTypes = {
    children : PropTypes.node
}