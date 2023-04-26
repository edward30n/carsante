import { useState, createContext } from "react";

export const FormContext = createContext();
export const FormContextProvider =props => {
    const [loginData, setLoginData] = useState({});
    const [registerData, setRegisterData] = useState({});
    return (
        <FormContext.Provider value={{ loginData, setLoginData, registerData, setRegisterData }}>
        {props.children}
      </FormContext.Provider>
    );
};

