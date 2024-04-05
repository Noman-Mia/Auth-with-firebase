import PropTypes from 'prop-types';
import {createContext, useEffect, useState} from 'react';
import {createUserWithEmailAndPassword, signInWithEmailAndPassword,GoogleAuthProvider, 
    FacebookAuthProvider, signInWithPopup, onAuthStateChanged} from "firebase/auth";
import auth from '../Firebase/Firebase.init';

export const AuthContext = createContext(null)
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();
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
const facebookLogin =()=>{
    return signInWithPopup(auth,facebookProvider)
}
const logOut = ()=>{
    return logOut(auth)
}
const authInfo ={
    registerUser,
    loginUser,
    user,
    setUser,
    googleLogin,
    facebookLogin,
    logOut
}
useEffect(()=>{
   const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        if (currentUser) {
         setUser(currentUser)
        } else {
         setUser(null)
        }
      });
      return ()=>{
        unsubscribe()
      }
      
},[])
    return (
        <div>
            {
                <AuthContext.Provider value={authInfo}>
                     {children}
                </AuthContext.Provider>
            }
           
        </div>
    );
};

export default AuthProvider;

AuthProvider.propTypes = {
    children : PropTypes.node
}