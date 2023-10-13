import { AboutType } from "./ActionTypes";

function handleSend(param) {
  return {
    type: AboutType.send,
    payload: param,
  };
}
function handleDelete(param) {
  return {
    type: AboutType.delete,
    payload: param,
  };
}
function handleEdit(param) {
  return {
    type: AboutType.edit,
    payload: param,
  };
}
function aboutDan_ol(param) {
  return {
    type: AboutType.olish,
    payload: param,
  };
}
function bolleanFunc() {
  return {
    type: "ozgar",
  };
}
export { handleSend, handleDelete, handleEdit, aboutDan_ol, bolleanFunc };
