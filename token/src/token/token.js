export const setToken = (value) => {
  let { access_token, refreshToken } = value;
  localStorage.setItem("access_token", access_token);
  localStorage.setItem("refreshToken", refreshToken);
};
export const getToken = () => {
  return {
    access_token: localStorage.getItem("access_token") || "",
    refreshToken: localStorage.getItem("refreshToken") || "",
  };
};
export const removeToken = () => {
  localStorage.removeItem("access_token");
  localStorage.removeItem("refreshToken");
};
