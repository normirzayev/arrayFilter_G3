import { Button, TextField } from "@mui/material";
import React, { useContext } from "react";
import { ContextData } from "../context/Context";
export default function Home() {
  let { getInputValue, sendFunc } = useContext(ContextData);
  return (
    <div>
      <form className="form" onSubmit={sendFunc}>
        <TextField
          id="name"
          label="name"
          variant="filled"
          onChange={getInputValue}
          name="name"
        />
        <TextField
          id="surName"
          label="surName"
          variant="filled"
          onChange={getInputValue}
          name="surName"
        />
        <TextField
          id="email"
          label="email"
          variant="filled"
          onChange={getInputValue}
          name="email"
          type="email"
        />
        <TextField
          id="password"
          label="password"
          variant="filled"
          onChange={getInputValue}
          name="password"
          type="password"
        />
        <Button variant="contained" type="submit" > send </Button>
      </form>
    </div>
  );
}
