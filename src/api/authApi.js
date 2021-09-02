import axios from "axios";

export const loginUser = (email, password) => {
  const params = JSON.stringify({
    email: email,
    password: password,
  });

  return axios.post(`${process.env.REACT_APP_API_URL}/auth/login`, params, {
    headers: {
      "content-type": "application/json",
    },
  });
};
