import { useContext, useState } from "react";
import { authContext } from "./AuthProvider";

const Register = () => {
    const {registerUser} = useContext(authContext)
    const [error, setError] = useState('')
    const handleRegister = (e) => {
        e.preventDefault();
      const name = e.target.name.value;
      const email = e.target.email.value;
      const password = e.target.password.value;
      const confirmPassword = e.target.confirmPassword.value;
      console.log(name,email,password,confirmPassword);
      //set user pathabo
        registerUser(email, password)

        //validation 
        if(password > 6){
            setError("Password should be 6 char")
            return;
        }
        if(password !== confirmPassword){
            setError('Password did not match')
            return;
        }
    
    }
  return (
    <div>
      <form onSubmit={handleRegister} className="w-[500px] mt-14 mx-auto"> 
      <label className="input input-bordered flex items-center gap-2">
        <input type="text" className="grow" placeholder="Name" name="name" />
      </label>
      <label className="input input-bordered flex items-center gap-2">
        <input type="text" className="grow" placeholder="Email" name="email" />
      </label>
      <label className="input input-bordered flex items-center gap-2">
        <input type="text" className="grow" placeholder="Password" name="password" />
      </label>
      <label className="input input-bordered flex items-center gap-2">
        <input type="text" className="grow" placeholder="Confirm-Password" name="confirmPassword"/>
      </label>
       {
        error && <small>{error}</small>
       }
        <button className="btn btn-primary w-full">Register</button>
      </form>
    </div>
  );
};

export default Register;
