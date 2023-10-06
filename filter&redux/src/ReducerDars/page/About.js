import React, { useContext } from "react";
import { ContextData } from "../context/Context";
import { Button } from "@mui/material";

export default function About() {
  let { userData, handleDelete } = useContext(ContextData);
  return (
    <div>
      <table border={1}>
        <thead>
          <tr>
            <th>№</th>
            <th>ism</th>
            <th>familya</th>
            <th>email</th>
            <th>parol</th>
          </tr>
        </thead>
        <tbody>
          {userData.length > 0 ? (
            userData.map((item, index) => {
              return (
                <tr key={index}>
                  <th> {index + 1} </th>
                  <td> {item?.name} </td>
                  <td> {item?.surName} </td>
                  <td> {item?.email} </td>
                  <td> {item?.password} </td>
                  <td>
                    <Button color="secondary" variant="contained">
                      edit
                    </Button>
                  </td>
                  <td>
                    <Button
                      color="error"
                      variant="contained"
                      onClick={() => handleDelete(item.id)}
                    >
                      del
                    </Button>
                  </td>
                </tr>
              );
            })
          ) : (
            <tr>
              <th colSpan={100}> no Users... </th>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
