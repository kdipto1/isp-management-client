import { ICustomerConnectionStatus, IMeta } from "@/types";
import { baseApi } from "./baseApi";
import { TagTypes } from "../tag-types";

const CUSTOMER_CONNECTION_STATUS = "/customer-connection-status";
export const customerConnectionStatusApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // get all customerConnectionStatuses
    customerConnectionStatuses: build.query({
      query: (arg: Record<string, any>) => {
        return {
          url: `${CUSTOMER_CONNECTION_STATUS}`,
          method: "GET",
          params: arg,
        };
      },
      transformResponse: (
        response: ICustomerConnectionStatus[],
        meta: IMeta
      ) => {
        return {
          customerConnectionStatuses: response,
          meta,
        };
      },
      providesTags: [TagTypes.customerConnectionStatus],
    }),
    // get single customerConnectionStatus
    customerConnectionStatus: build.query({
      query: (id: string | string[] | undefined) => ({
        url: `${CUSTOMER_CONNECTION_STATUS}/${id}`,
        method: "GET",
      }),
      providesTags: [TagTypes.customerConnectionStatus],
    }),

    // update customerConnectionStatus
    updateCustomerConnectionStatus: build.mutation({
      query: (data) => ({
        url: `${CUSTOMER_CONNECTION_STATUS}/${data.id}`,
        method: "PATCH",
        data: data.body,
      }),
      invalidatesTags: [TagTypes.customerConnectionStatus],
    }),
    // delete customerConnectionStatus
    deleteCustomerConnectionStatus: build.mutation({
      query: (id) => ({
        url: `${CUSTOMER_CONNECTION_STATUS}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [TagTypes.customerConnectionStatus],
    }),
  }),
});

export const {
  useCustomerConnectionStatusesQuery,
  useCustomerConnectionStatusQuery,
  useUpdateCustomerConnectionStatusMutation,
  useDeleteCustomerConnectionStatusMutation,
} = customerConnectionStatusApi;
