import { createContext, useContext } from "react";

export const Biodata = createContext()

export const BiodataProvider = ({ children }) => {
  const name = "Rahul Bhati";
  const age = 22;
  return (
    <Biodata.Provider value={{ name, age }}>
      {children}
    </Biodata.Provider>
  )
}

export const useCustomBioData=()=>{
  const bioData=useContext(Biodata)
  return bioData;
}