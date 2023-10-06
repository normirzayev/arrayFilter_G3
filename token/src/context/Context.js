import { useEffect, useState } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { getToken } from "../token/token";
export const Context = createContext();

const ContextProvider = ({ children }) => {
  const [user, setUser] = useState({
    access_token: "",
    refreshToken: "",
  });
  const [load, setLoad] = useState(false);
  let link = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("access_token")?.length > 10) {
      setUser(getToken());
    } else {
      link("/");
    }
  }, []);

  return (
    <Context.Provider value={{ setUser, user, load, setLoad }}>
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
