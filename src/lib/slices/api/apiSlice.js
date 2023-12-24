import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Cookies } from "react-cookie";

// import { ReduxState } from "../../store";
// import { logoutSuccess } from "../user/userSlice";
// import { UserService } from "@/pages/api";
// import { MaybeDrafted } from "@reduxjs/toolkit/dist/query/core/buildThunks";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_BACKEND_URL,
    prepareHeaders: (headers, { getState }) => {
      const { user } = getState();
      headers.set("Content-Type", "application/json");
      headers.set("Accept", "application/json");
      if (user.access_token) {
        headers.set("Authorization", `Bearer ${user.access_token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    // getPlans: builder.query<PlanService.Plans, void>({
    //   query: () => '/v1/plans',
    // }),
  }),

  tagTypes: ["UserProfile"], // specify the tagTypes here
});

export const {
} = apiSlice;
