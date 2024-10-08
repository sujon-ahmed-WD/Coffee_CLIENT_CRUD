import Swal from 'sweetalert2'
const ADDCOFFEE = () => {

    const AddhandleCoffee=event=>{
        event.preventDefault();
        const form=event.target;
        const name=form.name.value;
        const chef=form.chef.value;
        const supplier=form.supplier.value;
        const taste=form.taste.value;
        const category=form.category.value;
        const details=form.details.value;
        const photo=form.photo.value;

        const newCoffee={name,chef,supplier,taste,category,details,photo}
        console.log(newCoffee);

        fetch('http://localhost:5000/coffee',{
            method:"POST",
            headers:{
                'content-type':"application/json"
            },
            body:JSON.stringify(newCoffee)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: 'success!',
                    text: 'User Added Successfully',
                    icon: 'success',
                    confirmButtonText: 'Done'
                  })
                  form.reset()
            }
        })
    }
  return (
    <div className="bg-[#F4F3F0] p-5">
      <h1 className="text-3xl font-extrabold text-center"> Add Coffee </h1>
      <form onSubmit={AddhandleCoffee}>
        <div>
          {/* from --row Name+Chef */}
          <div className=" md:flex gap-8 mb-8">
            <div className="md:w-1/2 ml-4">
              <h1>Name</h1>
              <input
                type="text"
                placeholder="Enter coffee name"
                className="input input-bordered w-full"
                name="name"
              />
            </div>
            <div className="md:w-1/2 ml-4">
              <h1>Chef</h1>
              <input
                type="text"
                placeholder=" Enter coffee chef"
                className="input input-bordered w-full"
                name="chef"
              />
            </div>
          </div>
          {/* Supplier +TASTE */}
          <div className=" md:flex gap-8 mb-8">
            <div className="md:w-1/2 ml-4">
              <h1>Supplier</h1>
              <input
                type="text"
                placeholder="Enter coffee supplier"
                className="input input-bordered w-full"
                name="supplier"
              />
            </div>
            <div className="md:w-1/2 ml-4">
              <h1>Taste</h1>
              <input
                type="text"
                placeholder="Enter coffee taste"
                className="input input-bordered w-full"
                name="taste"
              />
            </div>
          </div>
          {/* Category +Details */}
          <div className=" md:flex gap-8 mb-8">
            <div className="md:w-1/2 ml-4">
              <h1>Category</h1>
              <input
                type="text"
                placeholder="Enter coffee category"
                className="input input-bordered w-full"
                name="category"
              />
            </div>
            <div className="md:w-1/2 ml-4">
              <h1>Details</h1>
              <input
                type="text"
                placeholder="Enter coffee details"
                className="input input-bordered w-full"
                name="details"
              />
            </div>
          </div>
          {/* image */}
          <div className="w-full">
            <h1>PhotoUrl</h1>
            <input
              name="photo"
              type="text"
              placeholder="PHOTO URL"
              className="input input-bordered w-full  "
            />
          </div>
        </div>
          <div className="mt-4">
          <button className="btn btn-active w-full border-black bg-[#D2B48C]">Add Coffee</button>
          </div>
      </form>
    </div>
  );
};

export default ADDCOFFEE;
