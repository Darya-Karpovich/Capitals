import axios from 'axios';

import { Capital } from '../lib/types';

export const getCapitalInfo = (name: string) => {
  return axios
    .get<Capital>(`http://localhost:8080/capital/get/name?name=${name}`)
    .then(res => res.data);
};
