import axios from 'axios';

import { ReviewDB } from '../lib/types';
import { Review } from '../store/reviewStore';
type Props = {
  token: string;
  capital: string;
  review: Review;
};
type LikeReview = {
  token: string;
  value: '1' | '-1' | '0';
  commentId: number;
};

export const postReview = ({ token, capital, review }: Props) => {
  return axios.post(
    `http://localhost:8080/comment/addbyuser/?sessionToken=${token}&capital=${capital}&text=${review.text}&rating_attraction=${review.ratings.attractions}&rating_food=${review.ratings.food}&rating_general=${review.ratings.general}&rating_transport=${review.ratings.transport}`,
  );
};
export const getReviewsForCapital = (capitalName: string) => {
  return axios
    .get<ReviewDB[]>(
      `http://localhost:8080/comment/allforcapital/?capitalName=${capitalName}`,
    )
    .then(res => res.data);
};

export const likeReview = ({ token, value, commentId }: LikeReview) => {
  return axios.post(
    `http://localhost:8080/comment/likechange/?sessionToken=${token}&commentID=${commentId}&value=${value}`,
  );
};
