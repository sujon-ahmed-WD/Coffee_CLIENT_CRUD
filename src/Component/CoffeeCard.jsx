import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee,coffees,setcoffes }) => {
     
  const {  name, chef, supplier, taste, category, details, photo } = coffee;

  //   this Delete Survice

  const Deletehandle = (_id) => {
    console.log("The id is Delete", _id);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/coffee/${coffee. _id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
                Swal.fire({
                  title: "Deleted!",           
                  text: "Your COFFEE has been deleted.",
                  icon: "success"
                });
                const remaining=coffees.filter(cof=>cof._id !==_id);
                setcoffes(remaining)

            }
          });
      }
    });
  };

  return (
    <div className="card card-side  shadow-xl bg-[#F4F3F0] ">
      <figure>
        <img src={photo} alt="Movie" />
      </figure>
      <div className=" flex   w-full justify-between pr-5">
        <div>
          <h2 className="card-title">Name:{name}</h2>
          <p>{chef}</p>
          <p>{supplier}</p>
          <p>{taste}</p>
        </div>

        <div className="card-actions justify-end  ">
          <div className="join join-vertical space-y-4 ">
            <button className="btn">view</button>
          <Link
          to={`/updateCoffee/${coffee._id}`}
          >  <button className="btn">Edit</button>
          </Link>
          
            <button
              onClick={() => Deletehandle( coffee._id)}
              className="btn bg-red-500"
            >
              DELETE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
