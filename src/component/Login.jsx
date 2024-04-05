import { useContext, useEffect } from "react";
import { AuthContext } from "./AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";


const Login = () => {
    const {loginUser,googleLogin,setUser,facebookLogin,user} = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()
    console.log(location);
    const handleLogin = (e) => {
        e.preventDefault();
      const email = e.target.email.value;
      const password = e.target.password.value;
      console.log(email,password);

      //set
      loginUser(email,password)
    }
    const handleGoogleSignin =()=>{
        googleLogin()
        .then(result => {
          setUser(result.user);
        })
       .catch(error => console.error(error))
    }
    const handleFacebookSignin = () => {
       facebookLogin()
       .then(result => {
        setUser(result.user)
       })
       .catch(error =>console.error(error))
    }
    useEffect(()=>{
        if(user){
            navigate(location.state)
        }
    },[user])

    return (
        <div className=""> 
             <form onSubmit={handleLogin} className="w-[500px] mt-14 mx-auto border p-4 rounded-3xl"> 
      <label className="input input-bordered flex items-center gap-2">
        <input type="text" className="grow" placeholder="Email" name="email" />
      </label>
      <label className="input input-bordered flex items-center gap-2">
        <input type="text" className="grow" placeholder="Password" name="password" />
      </label>
      <button className="btn btn-primary w-full">Login</button>
      <div className="text-center mt-2">
     <button onClick={handleGoogleSignin} className="btn btn-primary">Google Sign-in</button>
     <button onClick={handleFacebookSignin} className="btn btn-primary">Facebook Sign-in</button>
     </div>
      </form>
     
        </div>
    );
};

export default Login;