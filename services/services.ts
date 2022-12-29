import httpClient from "./http-config";
import { USERS_LIST } from "./config";

export const getUsers = () =>
  httpClient.get(USERS_LIST).then((resp) => resp.data);
