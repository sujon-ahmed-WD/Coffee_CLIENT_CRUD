import { Link, useLoaderData } from "react-router-dom";
import "./App.css";
import CoffeeCard from "./Component/CoffeeCard";
import { useState } from "react";

function App() {
  const user = useLoaderData();
  const [coffees,setcoffes]=useState(user);

  return (
    <>
  <div className="ml-20  ">
        <h1 className="text-6xl text-purple-600 text-center">Vite + React</h1>
        <Link to='/signup'>
        <button className="btn btn-outline btn-secondary">SignUp</button>
        </Link>
  
        <h1 className=" mb-3 text-6xl text-green-500 text-center">Total Order:{user.length}</h1>
  
     <div className="grid grid-cols-2 gap-8 ">
          {user.map((use) => (
            <CoffeeCard 
            key={use._id}
            coffee={use}
            coffees={coffees}
            setcoffes={setcoffes}
             ></CoffeeCard>
          ))}
     </div>
  </div>
    </>
  );
}

export default App;
