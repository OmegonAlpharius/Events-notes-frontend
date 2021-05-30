import axios from "axios";
import config from "./config";
import store from "./store/configureStore";

const instance = axios.create({
  baseURL: config.apiUrl
});

instance.interceptors.request.use(req => {
  const users = store.getState().users;
  if (users.user) req.headers["Authentication"] = users.user.token;
  return req;
});

export default instance;