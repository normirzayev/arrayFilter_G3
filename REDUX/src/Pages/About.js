import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  bolleanFunc,
  handleDelete,
  handleEdit,
  handleSend,
} from "../redux/action/AboutAction";
import axios from "axios";
import { Urls } from "../Urls";
export default function About() {
  let { data, qiymat } = useSelector((state) => state.AboutReducer);
  let dispatch = useDispatch();
  let [value, setValue] = useState({
    name: "",
    age: "",
  });
  function getValue(e) {
    setValue({ ...value, [e.target.name]: e.target.value });
  }
  let sendFun = async (e) => {
    e.preventDefault();
    if (!value?.id) {
      let res = await axios(Urls.people, { method: "post", data: value });
      dispatch(handleSend(res.data));
    } else {
      let res = await axios(`${Urls.people}/${value?.id}`, {
        method: "put",
        data: value,
      });
      dispatch(handleEdit(res.data));
    }
  };

  let editFun = async (ID) => {
    let res = await axios(`${Urls.people}/${ID}`, { method: "get" });
    setValue(res.data);
  };

  return (
    <div>
      <h1>Form</h1>
      <button onClick={() => dispatch(bolleanFunc())}> click</button>
      <h1>{qiymat ? "true" : "false"}</h1>
      <form onSubmit={sendFun}>
        <input
          type="text"
          placeholder="Ismni kirit"
          name="name"
          value={value?.name}
          onChange={getValue}
        />
        <input
          type="number"
          placeholder="Yoshni kirit"
          name="age"
          value={value?.age}
          onChange={getValue}
        />
        <button type="submit">Send</button>
      </form>
      <h1>Table</h1>
      <table border={1}>
        <thead>
          <tr>
            <th>№</th>
            <th>Name</th>
            <th>age</th>
            <th colSpan={10}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, i) => {
            return (
              <tr key={item.id}>
                <th>{i + 1}</th>
                <td>{item?.name}</td>
                <td>{item?.age}</td>
                <td>
                  <button onClick={() => editFun(item.id)}>Edit</button>
                </td>
                <td>
                  <button onClick={() => dispatch(handleDelete(item.id))}>
                    delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
