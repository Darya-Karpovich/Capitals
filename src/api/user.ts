import axios from 'axios';

import { User } from '../lib/types';

export const getUser = (token: string) => {
  return axios.get<User>(
    `http://localhost:8080/user/get/bysession?sessionToken=${token}`,
  );
};

export const logout = (token: string) => {
  return axios.get<User>(
    `http://localhost:8080/user/logout?sessionToken=${token}`,
  );
};
