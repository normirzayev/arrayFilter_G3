import axios from "axios";
import { useEffect } from "react";
import { Urls } from "./Urls";
import { useDispatch } from "react-redux";
import { aboutDan_ol } from "./redux/action/AboutAction";

export default function Config() {
  let dispatch = useDispatch();
  let getAboutData = async () => {
    try {
      let res = await axios(Urls.people, { method: "get" });
      dispatch(aboutDan_ol(res.data));
    } catch (err) {
      console.log(err);
    } finally {
      console.log(" malumot olish tugadi");
    }
  };
  useEffect(() => {
    getAboutData();
  }, [dispatch]);
}
