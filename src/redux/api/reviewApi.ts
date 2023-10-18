import { IMeta, IReview } from "@/types";
import { TagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const REVIEW_URL = "/customer-reviews";
export const reviewApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // get all reviews
    reviews: build.query({
      query: (arg: Record<string, any>) => {
        return {
          url: `${REVIEW_URL}`,
          method: "GET",
          params: arg,
        };
      },
      transformResponse: (response: IReview[], meta: IMeta) => {
        return {
          reviews: response,
          meta,
        };
      },
      providesTags: [TagTypes.review],
    }),
    // get single review
    review: build.query({
      query: (id: string | string[] | undefined) => ({
        url: `${REVIEW_URL}/${id}`,
        method: "GET",
      }),
      providesTags: [TagTypes.review],
    }),

    // update review
    updateReview: build.mutation({
      query: (data) => ({
        url: `${REVIEW_URL}/${data.id}`,
        method: "PATCH",
        data: data.body,
      }),
      invalidatesTags: [TagTypes.review],
    }),
    // delete review
    deleteReview: build.mutation({
      query: (id) => ({
        url: `${REVIEW_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [TagTypes.review],
    }),
  }),
});

export const {
  useReviewsQuery,
  useReviewQuery,
  useUpdateReviewMutation,
  useDeleteReviewMutation,
} = reviewApi;
