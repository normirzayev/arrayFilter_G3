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
    let lcRefresh = () => {
      state = JSON.parse(localStorage.getItem("LcReduc")) || [];
    };
    switch (type) {
      case "plus":
        localStorage.setItem(
          "LcReduc",
          JSON.stringify(
            state.map((o) => {
              return o.id === payload ? { ...o, soni: +o.soni + 1 } : o;
            })
          )
        );
        lcRefresh();
        return state;
      case "minus":
        localStorage.setItem(
          "LcReduc",
          JSON.stringify(
            state.map((o) => {
              return o.id === payload && o.soni > 0
                ? { ...o, soni: +o.soni - 1 }
                : o;
            })
          )
        );
        lcRefresh();
        return state;
      case "submit":
        payload.preventDefault();
        if (!value.id) {
          localStorage.setItem(
            "LcReduc",
            JSON.stringify([...state, { ...value, id: Date.now() }])
          );
        } else {
          localStorage.setItem(
            "LcReduc",
            JSON.stringify(state.map((p) => (p.id === value.id ? value : p)))
          );
        }
        lcRefresh();
        setValue({
          nomi: "",
          soni: "",
        });
        return state;
      case "delete":
        localStorage.setItem(
          "LcReduc",
          JSON.stringify(state.filter((i) => i.id !== payload))
        );
        lcRefresh();
        return state;
      default:
        return state;
    }
  };

  let [count, dispatch] = useReducer(
    reducer,
    JSON.parse(localStorage.getItem("LcReduc")) || []
  );
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
