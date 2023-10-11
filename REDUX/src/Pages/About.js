import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  handleDelete,
  handleEdit,
  handleSend,
} from "../redux/action/AboutAction";
export default function About() {
  let state = useSelector((state) => state.AboutReducer);
  let dispatch = useDispatch();
  let [value, setValue] = useState({
    name: "",
    num: "",
  });

  function getValue(e) {
    setValue({ ...value, [e.target.name]: e.target.value });
  }
  function sendFun(e) {
    e.preventDefault();
    // console.log(value);
    if (!value?.id) {
      dispatch(handleSend({ ...value, id: Date.now() }));
    } else {
      dispatch(handleEdit(value));
    }
  }

  return (
    <div>
      <h1>Form</h1>
      <form onSubmit={sendFun}>
        <input
          type="text"
          placeholder="Enter name"
          name="name"
          value={value?.name}
          onChange={getValue}
        />
        <input
          type="number"
          placeholder="Sonini kiritin"
          name="num"
          value={value?.num}
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
            <th>Num</th>
            <th colSpan={10}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {state.map((item, i) => {
            return (
              <tr key={item.id}>
                <th>{i + 1}</th>
                <td>{item.name}</td>
                <td>{item.num}</td>
                <td>
                  <button onClick={() => setValue(item)}>Edit</button>
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
