import { IMeta, INotification } from "@/types";
import { TagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const NOTIFICATION_URL = "/notifications";
export const notificationApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // get all notifications
    notifications: build.query({
      query: (arg: Record<string, any>) => {
        return {
          url: `${NOTIFICATION_URL}`,
          method: "GET",
          params: arg,
        };
      },
      transformResponse: (response: INotification[], meta: IMeta) => {
        return {
          notifications: response,
          meta,
        };
      },
      providesTags: [TagTypes.notification],
    }),
    // get single notification
    notification: build.query({
      query: (id: string | string[] | undefined) => ({
        url: `${NOTIFICATION_URL}/${id}`,
        method: "GET",
      }),
      providesTags: [TagTypes.notification],
    }),

    // update notification
    updateNotification: build.mutation({
      query: (data) => ({
        url: `${NOTIFICATION_URL}/${data.id}`,
        method: "PATCH",
        data: data.body,
      }),
      invalidatesTags: [TagTypes.notification],
    }),
    // delete notification
    deleteNotification: build.mutation({
      query: (id) => ({
        url: `${NOTIFICATION_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [TagTypes.notification],
    }),
  }),
});

export const {
  useNotificationsQuery,
  useNotificationQuery,
  useDeleteNotificationMutation,
  useUpdateNotificationMutation,
} = notificationApi;
