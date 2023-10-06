import React from "react";
import "./App.css";
// import Login from "./components/login/Login";
import { useContext } from "react";
import { Context } from "./context/Context";
import Navbar from "./components/navbar/Navbar";
import PageIndex from "./page/PageIndex";
// import axios from "axios";
function App() {
  // let { user } = useContext(Context);
  // axios.defaults.headers.post["Content-Type"] =
  //   "application/x-www-form-urlencoded";
  // axios.defaults.headers.common["Authorization"] =
  //   user?.access_token?.length > 10 ? "Bearer " + user?.access_token : "";
  return (
    <div className="App">
      <Navbar />
      <PageIndex />
    </div>
  );
}

export default App;
