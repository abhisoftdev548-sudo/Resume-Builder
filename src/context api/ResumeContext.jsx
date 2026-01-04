import { createContext, useState } from "react";

export const ResumeContext = createContext()



const ResumeProvider = ({children}) => {

    const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    address: "",
    description: "",
    hobbies: "",
    qualification: "",
    skills: "",
    achievement: "",
    image: null,
  });

    return(
        <ResumeContext.Provider value={{ formData, setFormData}}>
            {children}
        </ResumeContext.Provider>
    )
}

export default ResumeProvider;