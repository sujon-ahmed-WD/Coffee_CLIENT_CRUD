import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

const Signup = () => {
  const {createUser}=useContext(AuthContext)
    const handleSignUp = event =>{
        event.preventDefault()
            const form=event.target;
            const email=form.email.value;
            const password=form.password.value;
            const user={email,password}
            console.log(user); 


            createUser(email,password)
            .then(result=>{
              console.log(result.user);
              // new user has been created
              const createdAt=result.user?.metadata?.creationTime;
              const user ={email,createdAt:createdAt};
              fetch('http://localhost:5000/user',{
                method:'POST',
                headers:{
                  'content-type':'application/json'
                },
                body:JSON.stringify(user)
              })
              .then(res=>res.json())
              .then(data=>{
                console.log(data);
                if(data.insertedId){
                  Swal.fire({
                    title: "Good job!",
                    text: "Login is SucceccFul!",
                    icon: "success"
                  });
                }
              })
            })
            .catch(error=>{
              console.log(error);
            })
            
    }
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">SignUp now!</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form
          onSubmit={handleSignUp}
           className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
              name="email"
                type="email"
                placeholder="email"
                className="input input-bordered"
                 
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                name="password"
                type="password"
                placeholder="password"
                className="input input-bordered"
                
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
