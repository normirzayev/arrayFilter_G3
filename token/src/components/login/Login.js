import React from "react";
import { useState } from "react";
import axios from "axios";
import { useContext } from "react";
import { Context } from "../../context/Context";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { setToken } from "../../token/token";
import Loading from "../loading/Loading";
import Swal from "sweetalert2";
export default function Login() {
  const { load, setLoad, setUser } = useContext(Context);
  const [shown, setShown] = useState(true);
  const handleShow = () => {
    setShown(!shown);
  };
  const [login, setLogin] = useState({
    username: "",
    password: "",
  });
  const changeLogin = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };
  const loginSubmit = async (e) => {
    e.preventDefault();
    // console.log(login);
    setLoad(true);
    try {
      let tokenData = await axios("https://unimovie.onrender.com/auth/login/", {
        method: "post",
        data: login,
      });
      if (tokenData.status === 200) {
        setToken(tokenData.data);
        setUser({
          access_token: tokenData.data.access_token,
          refreshToken: tokenData.data.refreshToken,
        });
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoad(false);
    }
  };

  return (
    <div className="login_oyna">
      <Loading load={load} />
      <div className="login">
        <form onSubmit={loginSubmit}>
          <div className="forma_input">
            <dir className="form">
              <input
                type="text"
                placeholder=" "
                id="username"
                className="form_input"
                value={login.username}
                name="username"
                onChange={changeLogin}
              />
              <label className="form_label">username</label>
            </dir>
            <dir className="parol">
              <input
                type={shown ? "password" : "text"}
                placeholder="********"
                id="parol"
                name="password"
                value={login.password}
                onChange={changeLogin}
                className="parol_input"
              />
              <span className="show" onClick={() => handleShow()}>
                {!shown ? <AiFillEye /> : <AiFillEyeInvisible />}
              </span>
              <label className="parol_label">Parol</label>
            </dir>
          </div>
          <button> Kirish </button>
        </form>
      </div>
    </div>
  );
}
