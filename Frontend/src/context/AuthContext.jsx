import React, { createContext, useState, useEffect, useContext } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const login = (token) => {
    console.log("Token recibido:", token);
    localStorage.setItem("token", token);
    setIsLoggedIn(true);
  };

  const logout = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/user/logout/", {
        method: "POST",
        headers: {
          Authorization: `Token ${localStorage.getItem("token")}`,
        },
      });

      if (response.ok) {
        localStorage.removeItem("token");
        setIsLoggedIn(false);
      } else {
        // Manejar el caso de error en la respuesta del servidor
        // Puede mostrar un mensaje de error o realizar otras acciones necesarias
      }
    } catch (error) {
      console.log(error);
      // Manejar el caso de error de la solicitud
      // Puede mostrar un mensaje de error o realizar otras acciones necesarias
    }
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  return useContext(AuthContext);
};

export { AuthContext, AuthProvider, useAuth };
