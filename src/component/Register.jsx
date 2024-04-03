const Register = () => {
    const handleRegister = (e) => {
        e.preventDefault();
      const name = e.target.name.value;
      const email = e.target.email.value;
      const password = e.target.password.value;
      const confirmPassword = e.target.confirmPassword.value;
      console.log(name,email,password,confirmPassword);
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
        <input type="text" className="grow" placeholder="Confirm-Password" name="confirmPassword" />
      </label>
      <button className="btn btn-primary w-full">Register</button>
      </form>
    </div>
  );
};

export default Register;
