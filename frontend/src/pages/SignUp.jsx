import React, { useState } from "react";
import signupImg from "../assets/signup.png";
import avatar from "../assets/avatar-icon.png"

const Signup = () => {

    const [selectedFile, setSelectedFile] = useState(null);
    const [previewURL, setPreviewURL] = useState("");
  
    const[formData, setFormData] = useState({
      name: "",
      email: "",
      password: "",
      photo: selectedFile,
      gender: "",
      role: "patient",
    });
  
    const handleInputChange = e => {
      setFormData({ ...formData, [e.target.name]: e.target.value});
    };

    const handleInputFileChange = async(event) => {
        const file = event.target.files[0];
    
        console.log(file);
      }

      const submitHandler = async event =>{
        event.preventDefault()
        
      }
  
  return (
    <section className="py-[100px] px-5 xl:px-0">
      <div className="max-w-[1170px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* ------- sign up image ---------- */}
          <div className="hidden lg:block rounded-l-lg">
            <figure className="rounded-l-lg">
              <img src={signupImg} alt="image" />
            </figure>
          </div>

            {/* ------- sign up form ---------- */}
          <div className="rounded-l-lg lg:pl-16 py-10">
            <h3 className="text-black text-[22px] leading-9 font-bold mb-10">
              Create an <span className=" text-teal">Account</span>
            </h3>

            <form>
              <div className="mb-5">
                <input
                  type="text"
                  placeholder="Full Name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-b border-solid border-black focus:otline-none focus:border-b-teal text-[16px] leading-7 text-black placeholder:text-grey roubded-md cursor-pointer "
                  required
                />
              </div>

              <div className="mb-5">
                <input
                  type="email"
                  placeholder="Enter your email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-b border-solid border-black focus:otline-none focus:border-b-teal text-[16px] leading-7 text-black placeholder:text-grey roubded-md cursor-pointer "
                  required
                />
              </div>

              <div className="mb-5">
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-b border-solid border-black focus:otline-none focus:border-b-teal text-[16px] leading-7 text-black placeholder:text-grey roubded-md cursor-pointer "
                  required
                />
              </div>
              <div className=" mb-5 flex flex-center justify-between">
                <label className="text-black font-bold text-[16px] leading-7">
                  Are you a{" "}
                  <select
                    name="role"
                    value={formData.role}
                    onChange={handleInputChange}
                    className=" text-grey font-semibold text-[15px] leading-7 px-4 py-3 focus:outline-none "
                  >
                    <option value="patient">Patient</option>
                    <option value="doctor">Doctor</option>
                  </select>
                </label>

                <label className="text-black font-bold text-[16px] leading-7">
                  Gender:
                  <select
                    name="gender"
                    value={formData.gender}
                  onChange={handleInputChange}
                    className=" text-grey font-semibold text-[15px] leading-7 px-4 py-3 focus:outline-none"
                  >
                    <option value="">Select</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </label>
              </div>
              <div className=" mb-5 flex items-center gap-3">
                <figure className=" w-[60px] h-[60x] rounded-full border-2 border-solid border-teal flex items-center justify-center">
                  <img
                    src={avatar}
                    alt="avatar"
                    className="w-full rounded-full"
                  />
                </figure>

                <div className="relative w-[130px] h-[50px]">
                  <input
                    type="file"
                    name="photo"
                    id="customFile"
                    onChange={handleInputFileChange}
                    accept=".jpg, .png"
                    className=" absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
                  />

                  <label
                    htmlFor="customFile"
                    className=" absolute top-0 w-full h-full flex items-center px-[0.75rem] py-[0.375rem] text-[15px] leading-6 overflow-hidden bg-mintGreen text-headingColor font-semibold rounded-lg truncate cursor-pointer"
                  >
                    Upload Photo
                  </label>
                </div>
              </div>
              <div className="mt-7">
                <button
                  type="submit"
                  className="w-full bg-teal text-white text-[18px] px-4 py-3 leading-[30px] rounded-lg"
                >
                  Sign Up
                </button>
              </div>

              <p className=" mt-5 text-grey text-center">
                Already have an account?{" "}
                <a
                  href="/sign-in"
                  className="text-teal font-medium ml-1"
                >
                  Login
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
