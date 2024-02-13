import { createApi } from "@reduxjs/toolkit/query/react";
import baseQuery from "./api";
import { ApiSlug } from "../utils/apiSlug";

export const userServiceApi = createApi({
  reducerPath: "userService",
  baseQuery: baseQuery,
  tagTypes: [],
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => ApiSlug.GET_ALL_USERS,
      providesTags: ["users"],
    }),
    makeAdmin: builder.mutation({
      query: (data) => ({
        url: `${ApiSlug.SYMPTOMS}/${data.id}`,
        method: "PATCH",
      }),
      invalidatesTags: ["users"],
    }),
    // deleteSymptom: builder.mutation({
    //   query: (data) => ({
    //     url: `${ApiSlug.SYMPTOMS}/${data.id}`,
    //     method: "DELETE",
    //   }),
    //   invalidatesTags: ["symptoms"],
    // }),
  }),
});

export const { useLazyGetUsersQuery, useMakeAdminMutation } = userServiceApi;
