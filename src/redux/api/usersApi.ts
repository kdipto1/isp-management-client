import { IMeta, IUser } from "@/types";
import { TagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const USER_URL = "/users";
export const usersApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // get all users
    users: build.query({
      query: (arg: Record<string, any>) => {
        return {
          url: `${USER_URL}`,
          method: "GET",
          params: arg,
        };
      },
      transformResponse: (response: IUser[], meta: IMeta) => {
        return {
          users: response,
          meta,
        };
      },
      providesTags: [TagTypes.user],
    }),
    // get single user
    user: build.query({
      query: (id: string | string[] | undefined) => ({
        url: `${USER_URL}/${id}`,
        method: "GET",
      }),
      providesTags: [TagTypes.user],
    }),

    // update user
    updateUser: build.mutation({
      query: (data) => ({
        url: `${USER_URL}/${data.id}`,
        method: "PATCH",
        data: data.body,
      }),
      invalidatesTags: [TagTypes.user],
    }),
    // delete user
    deleteUser: build.mutation({
      query: (id) => ({
        url: `${USER_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [TagTypes.user],
    }),
  }),
});

export const {
  useUsersQuery,
  useUserQuery,
  useUpdateUserMutation,
  useDeleteUserMutation,
} = usersApi;
