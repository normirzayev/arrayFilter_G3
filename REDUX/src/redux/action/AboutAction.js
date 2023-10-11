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

export { handleSend, handleDelete, handleEdit };
