import axios from 'axios';

import { User } from '../lib/types';
type Props = {
  token: string;
  capital: string;
  text: string;
};

export const postReview = ({ token, capital, text }: Props) => {
  return axios.get<User>(
    `http://localhost:8080/comment/addbyuser/?sessionToken=${token}&capital=${capital}&text=${text}`,
  );
};
