import { IMeta, IPackage } from "@/types";
import { TagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const PACKAGE_URL = "/packages";
export const packageApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // get all packages
    packages: build.query({
      query: (arg: Record<string, any>) => {
        return {
          url: `${PACKAGE_URL}`,
          method: "GET",
          params: arg,
        };
      },
      transformResponse: (response: IPackage[], meta: IMeta) => {
        return {
          packages: response,
          meta,
        };
      },
      providesTags: [TagTypes.package],
    }),
    // get single package
    package: build.query({
      query: (id: string | string[] | undefined) => ({
        url: `${PACKAGE_URL}/${id}`,
        method: "GET",
      }),
      providesTags: [TagTypes.package],
    }),

    // update package
    updatePackage: build.mutation({
      query: (data) => ({
        url: `${PACKAGE_URL}/${data.id}`,
        method: "PATCH",
        data: data.body,
      }),
      invalidatesTags: [TagTypes.package],
    }),
    // update package
    createPackage: build.mutation({
      query: (data) => ({
        url: `${PACKAGE_URL}`,
        method: "POST",
        data: data,
      }),
      invalidatesTags: [TagTypes.package],
    }),
    // delete package
    deletePackage: build.mutation({
      query: (id) => ({
        url: `${PACKAGE_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [TagTypes.package],
    }),
  }),
});

export const {
  usePackagesQuery,
  usePackageQuery,
  useDeletePackageMutation,
  useUpdatePackageMutation,
  useCreatePackageMutation,
} = packageApi;
