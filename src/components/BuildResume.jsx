import React, { useContext, useState } from "react";
import { ResumeContext } from "../context api/ResumeContext";
import { useNavigate } from "react-router-dom";

const BuildResume = () => {

const {formData, setFormData} = useContext(ResumeContext)
const navigate = useNavigate()
const handleChange = (e) => {
  const { name, value } = e.target;

  setFormData((prev) => ({
    ...prev,
    [name]: value,
  }));
};

const handleImage = (e) => {
  const file = e.target.files[0];

  if (!file) return;

  setFormData((prev) => ({
    ...prev,
    image: file,
  }));
};


    

    const handleSubmit = (e) => {
        e.preventDefault()
        navigate('/resume')
        console.log("Form Data:", formData);
    }

  return (
    <div className="min-h-screen w-screen bg-black text-white overflow-x-hidden">
      <div className="bg-blue-700 py-5 text-center">
        <h1 className="text-6xl text-white">Resume Builder</h1>
      </div>
<div
  className="
    my-10 
    mx-4 sm:mx-10 lg:mx-20
    border-2 border-blue-700 
    rounded-2xl 
    p-8
    h-[80vh]
    flex flex-col
  "
>
        <form onSubmit={(e)=>{handleSubmit(e)}} className="flex flex-col h-full">
          <h2 className="text-4xl font-semibold mb-4">
  Enter Details
</h2>
          <div className="flex flex-col gap-5 overflow-y-auto pr-2 pb-10">

            <div className="flex flex-col  gap-2">
              <h2 className="text-2xl font-semibold">Personal Info</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col ">
                  <label htmlFor="name" className="text-xl font-normal text-gray-300">
                    Your Name
                  </label>
                  <input
                  required
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                    type="text"
                    id="name"
                    className="
  border border-white 
  bg-transparent 
  px-3 py-2 
  rounded-md
  focus:outline-none
  focus:ring-2 focus:ring-blue-500
"
                  />
                </div>
                <div className="flex flex-col ">
                  <label htmlFor="img" className="text-xl font-normal text-gray-300">
                    Your Profile Image
                  </label>
                  <input
                  name="image"
                  required
                 
                  onChange={handleImage}
                    type="file"
                    id="img"
                    className="
  border border-white 
  bg-transparent 
  px-3 py-2 
  rounded-md
  focus:outline-none
  focus:ring-2 focus:ring-blue-500 file:bg-blue-600 file:border-none file:px-4 file:py-2 file:rounded file:text-white
"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col  gap-2">
              <h2 className="text-2xl font-semibold">Contact Info</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col ">
                  <label htmlFor="email" className="text-xl font-normal text-gray-300">
                    Email
                  </label>
                  <input
                  name="email"
                  value={formData.email}
                  required
                  onChange={handleChange}
                    type="email"
                    id="email"
                    className="
  border border-white 
  bg-transparent 
  px-3 py-2 
  rounded-md
  focus:outline-none
  focus:ring-2 focus:ring-blue-500
"
                  />
                </div>
                <div className="flex flex-col ">
                  <label htmlFor="mobile" className="text-xl font-normal text-gray-300">
                    Mobile No.
                  </label>
                  <input
                  required
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                    type="tel"
                    id="mobile"
                    className="
  border border-white 
  bg-transparent 
  px-3 py-2 
  rounded-md
  focus:outline-none
  focus:ring-2 focus:ring-blue-500
"
                  />
                </div>
                <div className="flex flex-col ">
                  <label htmlFor="address" className="text-xl font-normal text-gray-300">
                    Address
                  </label>
                  <input
                  required
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                    type="text"
                    id="address"
                    className="
  border border-white 
  bg-transparent 
  px-3 py-2 
  rounded-md
  focus:outline-none
  focus:ring-2 focus:ring-blue-500
"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col  gap-2">
              <h2 className="text-2xl font-semibold">About Description</h2>
              <div className="flex flex-col ">
                <label htmlFor="description" className="text-xl font-normal text-gray-300">About Yourself</label>
                <textarea required name="description" id="description" className="
  border border-white 
  bg-transparent 
  px-3 py-2 
  rounded-md
  focus:outline-none
  focus:ring-2 focus:ring-blue-500 file:bg-blue-600 file:border-none file:px-4 file:py-2 file:rounded file:text-white
"
value={formData.description}
onChange={handleChange}></textarea>
              </div>
            </div>

            <div className="flex flex-col  gap-2">
              <h2 className="text-2xl font-semibold">Hobbies</h2>
              <div className="flex flex-col ">
                <label htmlFor="hobbies" className="text-xl font-normal text-gray-300">Your Hobies</label>
                <input required type="text" id="hobbies" name="hobbies" value={formData.hobbies} onChange={handleChange} className="
  border border-white 
  bg-transparent 
  px-3 py-2 
  rounded-md
  focus:outline-none
  focus:ring-2 focus:ring-blue-500
"/>
              </div>
            </div>
            <div className="flex flex-col  gap-2">
              <h2 className="text-2xl font-semibold">About Your Study</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col ">
                  <label
                    htmlFor="qualification"
                    className="text-xl font-normal text-gray-300"
                  >
                    Your Qualifications
                  </label>
                  <input
                  required
                  name="qualification"
                  value={formData.qualification}
                  onChange={handleChange}
                    type="text"
                    id="qualification"
                    className="
  border border-white 
  bg-transparent 
  px-3 py-2 
  rounded-md
  focus:outline-none
  focus:ring-2 focus:ring-blue-500
"
                  />
                </div>
                <div className="flex flex-col ">
                  <label htmlFor="skills" className="text-xl font-normal text-gray-300">
                    Skills
                  </label>
                  <input
                  required
                  name="skills"
                  value={formData.skills}
                  onChange={handleChange}
                    type="text"
                    id="skills"
                    className="
  border border-white 
  bg-transparent 
  px-3 py-2 
  rounded-md
  focus:outline-none
  focus:ring-2 focus:ring-blue-500
"
                  />
                </div>
                <div className="flex flex-col ">
                  <label htmlFor="achievement" className="text-xl font-normal text-gray-300">
                    Achievement
                  </label>
                  <input
                  required
                  name="achievement"
                  value={formData.achievement}
                  onChange={handleChange}
                    type="text"
                    id="achievement"
                    className="
  border border-white 
  bg-transparent 
  px-3 py-2 
  rounded-md
  focus:outline-none
  focus:ring-2 focus:ring-blue-500
"
                  />
                </div>
              </div>
            </div>
          </div>

            <button type="submit" className="
    mt-4
    bg-blue-600 hover:bg-blue-700
    py-3 rounded-lg text-xl
  ">
    Build
  </button>
        </form>
      </div>
    </div>
  );
};

export default BuildResume;
