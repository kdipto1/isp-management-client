import { IMeta, IPayment } from "@/types";
import { TagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const PAYMENT_URL = "/customer-payments";
export const paymentApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // get all payments
    payments: build.query({
      query: (arg: Record<string, any>) => {
        return {
          url: `${PAYMENT_URL}`,
          method: "GET",
          params: arg,
        };
      },
      transformResponse: (response: IPayment[], meta: IMeta) => {
        return {
          payments: response,
          meta,
        };
      },
      providesTags: [TagTypes.payment],
    }),
    // get single payment
    payment: build.query({
      query: (id: string | string[] | undefined) => ({
        url: `${PAYMENT_URL}/${id}`,
        method: "GET",
      }),
      providesTags: [TagTypes.payment],
    }),

    // update payment
    updatePayment: build.mutation({
      query: (data) => ({
        url: `${PAYMENT_URL}/${data.id}`,
        method: "PATCH",
        data: data.body,
      }),
      invalidatesTags: [TagTypes.payment],
    }),
    // delete payment
    deletePayment: build.mutation({
      query: (id) => ({
        url: `${PAYMENT_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [TagTypes.payment],
    }),
  }),
});

export const {
  usePaymentsQuery,
  usePaymentQuery,
  useUpdatePaymentMutation,
  useDeletePaymentMutation,
} = paymentApi;
