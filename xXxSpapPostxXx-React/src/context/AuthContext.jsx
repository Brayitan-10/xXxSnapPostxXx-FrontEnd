/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import { registerRequest } from '../../api/auth';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const signUp = async (user) => {
    const res = await registerRequest(values);
    setUser(res.data)
  };

  return (
    <AuthContext.Provider
      value={{
        signUp,
        user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
