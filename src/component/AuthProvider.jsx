import PropTypes from 'prop-types';
import {createContext, useState} from 'react';
import {createUserWithEmailAndPassword, signInWithEmailAndPassword,GoogleAuthProvider, signInWithPopup} from "firebase/auth";
import auth from '../Firebase/Firebase.init';

export const authContext = createContext(null)
const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({children}) => {
const [user, setUser] = useState(null)

const registerUser = (email,password)=> {
   return createUserWithEmailAndPassword(auth, email, password)
   
}
const loginUser = (email,password)=> {
  return signInWithEmailAndPassword(auth, email, password)
    
}
const googleLogin = () =>{
    return signInWithPopup(auth, googleProvider)
}
const authInfo ={
    registerUser,
    loginUser,
    user,
    setUser,
    googleLogin
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