import React, { useContext, useEffect } from "react";
import { ContextData } from "../context/Context";
import { Box, Button, Slider } from "@mui/material";

export default function FilterPage() {
  const [value, setValue] = React.useState([0, 1500]);
  let {
    data,
    categoryBtn,
    handleCategory,
    colorBtn,
    handleColor,
    color,
    catory,
  } = useContext(ContextData);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="filtContainer">
      <div className="filterBox">
        {categoryBtn.map((btn) => (
          <Button
            variant="contained"
            key={btn}
            style={{
              marginRight: "10px",
              opacity: btn === catory ? "0.7" : "1",
            }}
            onClick={() => handleCategory(btn)}
          >
            {btn.length > 0 ? btn : "all"}
          </Button>
        ))}
        <br />
        <br />
        <br />
        {colorBtn.map((btn) => (
          <Button
            variant="contained"
            key={btn}
            style={{
              marginRight: "10px",
              background: btn,
              color: btn === "white" ? "black" : "",
              opacity: btn === color ? "0.6" : "1",
            }}
            onClick={() => handleColor(btn)}
          >
            {btn.length > 0 ? btn : "all"}
          </Button>
        ))}
        <br />
        <br />
        <Box sx={{ width: 300 }}>
          <Slider
            value={value}
            onChange={handleChange}
            valueLabelDisplay="auto"
            max={1500}
          />
        </Box>

       
      </div>
      <div className="gridBox">
        {data.length > 0 ? (
          data
            .filter((item) => {
              if (
                item.category.includes(catory) &&
                item.color.includes(color) &&
                value[0] <= item.price &&
                value[1] >= item.price
              ) {
                return item;
              }
            })
            .map((elem, index) => {
              return (
                <div className="product_card" key={elem.id}>
                  <div className="main_in_product_card">
                    <div className="img_in_card">
                      <figure>
                        <img src={elem.thumbnail} alt={elem.title} />
                      </figure>
                    </div>
                    <div className="second_part_in_card">
                      <div className="text_in_product_card">
                        <div className="header_card">
                          <h3>{elem.title} </h3>
                        </div>
                        <div className="describtion_in_product_card">
                          <h3>{elem.description} </h3>
                        </div>
                        <div style={{ marginTop: "10px" }}>
                          <h3> category:{elem.category} </h3>
                          <h3> rangi:{elem?.color} </h3>
                        </div>
                        <div className="salary_in_product_card">
                          {elem?.price}руб.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="button_in_product_card">
                    <button>Купить</button>
                  </div>
                </div>
              );
            })
        ) : (
          <div>no data...</div>
        )}
      </div>
    </div>
  );
}
