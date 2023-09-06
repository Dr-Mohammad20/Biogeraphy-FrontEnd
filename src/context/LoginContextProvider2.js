import React, { useReducer, createContext } from "react";

const initialState = {
  user: false,
};

const loginReducer = (state, action) => {

  switch (action.type) {
    case "LOGIN":
      state.user = true;
      return {
        user:true
      }
    case "LOGOUT":
      state.user = false;
      return {
        user : false
      }
    default:
     return state;
  }
};

export const LoginContext2 = createContext();

const LoginContextProvider2 = ({children}) => {
  const [state, dispatch] = useReducer(loginReducer, initialState);
  return(
    <LoginContext2.Provider value={{state,dispatch}}>
      {children}
    </LoginContext2.Provider>
  )
};

export default LoginContextProvider2;
