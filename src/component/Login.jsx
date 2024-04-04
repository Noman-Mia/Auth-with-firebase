import { useContext } from "react";
import { authContext } from "./AuthProvider";


const Login = () => {
    const {loginUser,googleLogin,setUser} = useContext(authContext)
    
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
     </div>
      </form>
     
        </div>
    );
};

export default Login;