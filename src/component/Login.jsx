

const Login = () => {
    const handleLogin = (e) => {
        e.preventDefault();
      const email = e.target.email.value;
      const password = e.target.password.value;
      console.log(email,password);
    }
    return (
        <div>
             <form onSubmit={handleLogin} className="w-[500px] mt-14 mx-auto"> 
      <label className="input input-bordered flex items-center gap-2">
        <input type="text" className="grow" placeholder="Email" name="email" />
      </label>
      <label className="input input-bordered flex items-center gap-2">
        <input type="text" className="grow" placeholder="Password" name="password" />
      </label>
      <button className="btn btn-primary w-full">Login</button>
      </form>
        </div>
    );
};

export default Login;