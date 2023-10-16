import { baseApi } from "../baseApi";

const AUTH_URL = "/auth";

const extendedApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation({
      query: (loginData) => ({
        url: AUTH_URL,
        method: "POST",
        data: loginData,
      }),
    }),
  }),
});

export const { useLoginMutation } = extendedApi;
