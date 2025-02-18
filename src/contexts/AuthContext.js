import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({ token: null, isAuthenticated: false });

  useEffect(() => {
    const token = localStorage.getItem('jwt_token');
    if (token) {
      setAuth({ token, isAuthenticated: true });
    }
  }, []);

  const login = (token) => {
    setAuth({ token, isAuthenticated: true });
    // Store token securely, e.g., localStorage (with security in mind)
    localStorage.setItem('jwt_token', token);
  };

  const logout = () => {
    setAuth({ token: null, isAuthenticated: false });
    localStorage.removeItem('jwt_token');
  };

  return (
    <AuthContext.Provider value={{ auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
