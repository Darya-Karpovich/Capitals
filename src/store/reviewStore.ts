import create from 'zustand';
export type Ratings = {
  food: number;
  places: number;
  transport: number;
  zabytki: number;
};
type Review = {
  ratings: Ratings;
  text: string;
};

interface ReviewState {
  review: Review;
  setRating: (marks: Ratings) => void;
  setText: (text: string) => void;
  setReview: () => void;
}

export const useReviewStore = create<ReviewState>()(set => ({
  review: {
    ratings: { food: 0, places: 0, transport: 0, zabytki: 0 },
    text: '',
  },
  setRating: (marks: Ratings) =>
    set(state => ({ review: { ...state.review, ratings: marks } })),
  setText: (text: string) =>
    set(state => ({ review: { ...state.review, text } })),
  setReview: () =>
    set(state => ({
      review: {
        ratings: { food: 0, places: 0, transport: 0, zabytki: 0 },
        text: '',
      },
    })),
}));
