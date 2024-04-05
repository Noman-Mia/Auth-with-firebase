import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthProvider";

const Register = () => {

    useEffect(()=>{
        const clear = setInterval(() => {
            console.log("iam called");
        },1000)

        return ()=>{
            clearInterval(clear)
        }
    },[])

    const {registerUser,setUser} = useContext(AuthContext)
    const [error, setError] = useState('')
    const [errorEmail, setErrorEmail] = useState('')

    const handleRegister = (e) => {
        e.preventDefault();
      const name = e.target.name.value;
      const email = e.target.email.value;
      const password = e.target.password.value;
      const confirmPassword = e.target.confirmPassword.value;
      console.log(name,email,password,confirmPassword);

      //set user pathabo
        registerUser(email, password)
        .then(result => {
            setUser(result.user)
        })
        .catch(error =>setError(error.message))

        //validation
        if(!/@gmail\.com$/.test(email)){
            setErrorEmail('Email must end with @gmail.com')
            return;
        }
        if(password < 6){
            setError("Password should be less than 6 char")
            return;
        }
        if(password !== confirmPassword){
            setError('Password did not match')
            return;
        }
        setError('')
        setErrorEmail('')
    
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
      {
        errorEmail && <small>{errorEmail}</small>
      }
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
