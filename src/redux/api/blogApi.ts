import { IMeta, IBlog } from "@/types";
import { TagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const BLOG_URL = "/blogs";
export const blogApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // get all blogs
    blogs: build.query({
      query: (arg: Record<string, any>) => {
        return {
          url: `${BLOG_URL}`,
          method: "GET",
          params: arg,
        };
      },
      transformResponse: (response: IBlog[], meta: IMeta) => {
        return {
          blogs: response,
          meta,
        };
      },
      providesTags: [TagTypes.blog],
    }),
    // get single blog
    blog: build.query({
      query: (id: string | string[] | undefined) => ({
        url: `${BLOG_URL}/${id}`,
        method: "GET",
      }),
      providesTags: [TagTypes.blog],
    }),

    // update blog
    updateBlog: build.mutation({
      query: (data) => ({
        url: `${BLOG_URL}/${data.id}`,
        method: "PATCH",
        data: data.body,
      }),
      invalidatesTags: [TagTypes.blog],
    }),
    // delete blog
    deleteBlog: build.mutation({
      query: (id) => ({
        url: `${BLOG_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [TagTypes.blog],
    }),
  }),
});

export const {
  useBlogsQuery,
  useBlogQuery,
  useUpdateBlogMutation,
  useDeleteBlogMutation,
} = blogApi;
