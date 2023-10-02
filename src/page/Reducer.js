import { Button, Input } from "@mui/material";
import React, { useReducer, useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
export default function Reducer() {
  let [value, setValue] = useState({
    nomi: "",
    soni: "",
  });
  let reducer = (state, action) => {
    let { type, payload } = action;
    switch (type) {
      case "plus":
        state = state.map((o) => {
          return o.id === payload ? { ...o, soni: +o.soni + 1 } : o;
        });
        return state;
      case "minus":
        return state.map((o) =>
          o.id === payload ? { ...o, soni: +o.soni - 1 } : o
        );
      case "submit":
        payload.preventDefault();
        if (!value.id) {
          state = [...state, { ...value, id: Date.now() }];
        } else {
          state = state.map((p) => (p.id === value.id ? value : p));
        }
        setValue({
          nomi: "",
          soni: "",
        });
        return state;
      case "delete":
        state = state.filter((i) => i.id !== payload);
        return state;
      default:
        return state;
    }
  };
  let array = [
    {
      soni: 0,
      nomi: "acer",
    },
    {
      soni: 0,
      nomi: "mac",
    },
    {
      soni: 0,
      nomi: "lenova",
    },
    {
      soni: 0,
      nomi: "hp",
    },
    {
      soni: 0,
      nomi: "lg",
    },
    {
      soni: 0,
      nomi: "victus",
    },
  ];
  array = array.map((p, index) => {
    return { ...p, id: index };
  });
  let [count, dispatch] = useReducer(reducer, array);
  let handleEdit = (param) => {
    setValue(param);
  };
  return (
    <div>
      Reducer
      <br />
      {count.map((item, index) => {
        return (
          <div key={index} style={{ ...style }}>
            <Button
              variant="contained"
              onClick={() => dispatch({ type: "minus", payload: item.id })}
            >
              minus
            </Button>
            <h2> {item.soni} </h2>
            <Button
              variant="contained"
              onClick={() => dispatch({ type: "plus", payload: item.id })}
            >
              plus
            </Button>
            <h2> {item.nomi} </h2>
            <div className="flex">
              <Button variant="contained" onClick={() => handleEdit(item)}>
                <EditIcon />
              </Button>
              <Button
                color="error"
                variant="contained"
                onClick={() => dispatch({ type: "delete", payload: item.id })}
              >
                <DeleteForeverIcon />
              </Button>
            </div>
          </div>
        );
      })}
      <form onSubmit={(e) => dispatch({ type: "submit", payload: e })}>
        <Input
          type="text"
          placeholder="nomini kirit"
          value={value.nomi}
          onChange={(e) => setValue({ ...value, nomi: e.target.value })}
        />
        <Input
          type="number"
          placeholder="sonini kirit"
          value={value.soni}
          onChange={(e) => setValue({ ...value, soni: e.target.value })}
        />
        <Button type="submit"> send </Button>
      </form>
    </div>
  );
}
let style = {
  border: "1px solid black",
  borderRadius: "10px",
  margin: "15px",
  padding: "15px",
  display: "inline-block",
};
