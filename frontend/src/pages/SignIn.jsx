import { useState } from "react";

const SignIn = () => {

  const[formData, setFormData] = useState({
    email:"",
    password:"",
  });

  const handleInputChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value});
  };

  return (
    <section className="py-[100px] px-5 lg:px-0">
      <div className="w-full max-w-[570px] mx-auto rounded-lg shadow-md md:p-10">
        <h3 className="text-black text-center text-[22px] leading-9 font-bold mb-10">Hello! <span className=" text-teal">Welcome </span>Back</h3>
        
        <form className=" py-4">
          <div className="mb-5">
            <input type="email"
             placeholder="Enter Your Email"
             name="email"
             value={formData.email}
             onChange={handleInputChange}
             className="w-full px-4 py-3 border-b border-solid border-black focus:otline-none focus:border-b-teal text-[16px] leading-7 text-black placeholder:text-grey roubded-md cursor-pointer "
             required  
          />
        </div>

        <div className="mb-5">
            <input type="password"
             placeholder="Password"
             name="password"
             value={formData.password}
             onChange={handleInputChange}
             className="w-full px-4 py-3 border-b border-solid border-black focus:otline-none focus:border-b-teal text-[16px] leading-7 text-black placeholder:text-grey roubded-md cursor-pointer "
             required  
          />
        </div>

        <div className="mt-7">
          <button type="submit" className="w-full bg-teal text-white text-[18px] px-4 py-3 leading-[30px] rounded-lg">
            Loging
          </button>
        </div>

        <p className=" mt-5 text-black text-center">
          Don&apos;t have an account? <a href="/signup" className="text-teal font-medium ml-1">Register</a>
          
        </p>
       </form>
       
    
      </div>

     

    </section>
  );
}

export default SignIn