import { IMeta, INewConnectionReq } from "@/types";
import { baseApi } from "./baseApi";
import { TagTypes } from "../tag-types";

const NEW_CONNECTION_REQ_URL = "/new-connection-request";
export const newConnectionReqApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // get all newConnectionReqs
    newConnectionReqs: build.query({
      query: (arg: Record<string, any>) => {
        return {
          url: `${NEW_CONNECTION_REQ_URL}`,
          method: "GET",
          params: arg,
        };
      },
      transformResponse: (response: INewConnectionReq[], meta: IMeta) => {
        return {
          newConnectionReqs: response,
          meta,
        };
      },
      providesTags: [TagTypes.newConnectionReq],
    }),
    // get single newConnectionReq
    newConnectionReq: build.query({
      query: (id: string | string[] | undefined) => ({
        url: `${NEW_CONNECTION_REQ_URL}/${id}`,
        method: "GET",
      }),
      providesTags: [TagTypes.newConnectionReq],
    }),

    // update newConnectionReq
    updateNewConnectionReq: build.mutation({
      query: (data) => ({
        url: `${NEW_CONNECTION_REQ_URL}/${data.id}`,
        method: "PATCH",
        data: data.body,
      }),
      invalidatesTags: [TagTypes.newConnectionReq],
    }),
    // delete newConnectionReq
    deleteNewConnectionReq: build.mutation({
      query: (id) => ({
        url: `${NEW_CONNECTION_REQ_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [TagTypes.newConnectionReq],
    }),
  }),
});

export const {
  useNewConnectionReqsQuery,
  useNewConnectionReqQuery,
  useDeleteNewConnectionReqMutation,
  useUpdateNewConnectionReqMutation,
} = newConnectionReqApi;
