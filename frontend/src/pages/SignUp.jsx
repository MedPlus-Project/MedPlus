import React, { useState } from "react";
import signupImg from "../assets/signup.png";
import avatar from "../assets/avatar-icon.png";
import BASE_URL from "../config/ApiConfig";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import HashLoader from "react-spinners/HashLoader";

const Signup = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewURL, setPreviewURL] = useState("");
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    photo: selectedFile,
    gender: "",
    role: "patient",
  });

  const navigate = useNavigate();
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleInputFileChange = async (event) => {
    const file = event.target.files[0];

    console.log(file);
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(`${BASE_URL}auth/register`, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      console.log("Request URL:", `${BASE_URL}auth/register`);
      console.log("Request Data:", formData);

      const { message } = await res.json();

      if (!res.ok) {
        throw new Error(message);
      }

      setLoading(false);

      toast.success(message);
      navigate("/sign-in");
    } catch (err) {
      toast.error(err.message);
      setLoading(false);
    }
  };

  return (
    <section className="px-5 py-[100px] xl:px-0">
      <div className="mx-auto max-w-[1170px]">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* ------- sign up image ---------- */}
          <div className="hidden rounded-l-lg lg:block">
            <figure className="rounded-l-lg">
              <img src={signupImg} alt="image" />
            </figure>
          </div>

          {/* ------- sign up form ---------- */}
          <div className="rounded-l-lg py-10 lg:pl-16">
            <h3 className="mb-10 text-[22px] font-bold leading-9 text-black">
              Create an <span className=" text-teal">Account</span>
            </h3>

            <form onSubmit={submitHandler }>
              <div className="mb-5">
                <input
                  type="text"
                  placeholder="Full Name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="focus:otline-none roubded-md w-full cursor-pointer border-b border-solid border-black px-4 py-3 text-[16px] leading-7 text-black placeholder:text-grey focus:border-b-teal "
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
                  className="focus:otline-none roubded-md w-full cursor-pointer border-b border-solid border-black px-4 py-3 text-[16px] leading-7 text-black placeholder:text-grey focus:border-b-teal "
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
                  className="focus:otline-none roubded-md w-full cursor-pointer border-b border-solid border-black px-4 py-3 text-[16px] leading-7 text-black placeholder:text-grey focus:border-b-teal "
                  required
                />
              </div>
              <div className=" flex-center mb-5 flex justify-between">
                <label className="text-[16px] font-bold leading-7 text-black">
                  Are you a{" "}
                  <select
                    name="role"
                    value={formData.role}
                    onChange={handleInputChange}
                    className=" px-4 py-3 text-[15px] font-semibold leading-7 text-grey focus:outline-none "
                  >
                    <option value="patient">Patient</option>
                    <option value="doctor">Doctor</option>
                  </select>
                </label>

                <label className="text-[16px] font-bold leading-7 text-black">
                  Gender:
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleInputChange}
                    className=" px-4 py-3 text-[15px] font-semibold leading-7 text-grey focus:outline-none"
                  >
                    <option value="">Select</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </label>
              </div>
              <div className=" mb-5 flex items-center gap-3">
                {selectedFile && (
                  <figure className=" flex h-[60x] w-[60px] items-center justify-center rounded-full border-2 border-solid border-teal">
                    <img
                      src={previewURL}
                      alt="avatar"
                      className="w-full rounded-full"
                    />
                  </figure>
                )}

                <div className="relative h-[50px] w-[130px]">
                  <input
                    type="file"
                    name="photo"
                    id="customFile"
                    onChange={handleInputFileChange}
                    accept=".jpg, .png"
                    className=" absolute left-0 top-0 h-full w-full cursor-pointer opacity-0"
                  />

                  <label
                    htmlFor="customFile"
                    className=" text-headingColor absolute top-0 flex h-full w-full cursor-pointer items-center overflow-hidden truncate rounded-lg bg-mintGreen px-[0.75rem] py-[0.375rem] text-[15px] font-semibold leading-6"
                  >
                    Upload Photo
                  </label>
                </div>
              </div>
              <div className="mt-7">
                <button
                  disabled={loading && true}
                  type="submit"
                  className="w-full rounded-lg bg-teal px-4 py-3 text-[18px] leading-[30px] text-white"
                >
                  {loading ? (
                    <HashLoader size={35} color="#ffffff" />
                  ) : (
                    "Sign Up"
                  )}
                </button>
              </div>

              <p className=" mt-5 text-center text-grey">
                Already have an account?{" "}
                <a href="/sign-in" className="ml-1 font-medium text-teal">
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
