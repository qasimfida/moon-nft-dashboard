import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { createAsyncThunk } from "@reduxjs/toolkit";
const baseUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

export const editUser = createAsyncThunk("user/editUser", async (body, { rejectWithValue }) => {
	try {
		const response = await fetch(`${baseUrl}user/edituser`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
				Authorization: `Bearer ${body.token}`,
			},
			body: JSON.stringify(body), // Make sure to send the request body
		});

		if (!response.ok) {
			// Check if the HTTP status is not in the 200-299 range (indicating an error)
			const errorData = await response.json();
			return rejectWithValue(errorData);
		}

		const responseData = await response.json();
		return responseData;
	} catch (error) {
		// Handle network errors or other exceptions
		return rejectWithValue(error.message);
	}
});
export const editUserNotifss = createAsyncThunk(
	"user/notification",
	async (body, { rejectWithValue }) => {
		try {
			const response = await fetch(`${baseUrl}user/updateNotifs`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Accept: "application/json",
					Authorization: `Bearer ${body.token}`,
				},
				body: JSON.stringify({ notifs: body }), // Make sure to send the request body
			});

			if (!response.ok) {
				// Check if the HTTP status is not in the 200-299 range (indicating an error)
				const errorData = await response.json();
				return rejectWithValue(errorData);
			}

			const responseData = await response.json();
			return responseData;
		} catch (error) {
			// Handle network errors or other exceptions
			return rejectWithValue(error.message);
		}
	}
);

export const userApi = createApi({
	reducerPath: "user_apis",
	baseQuery: fetchBaseQuery({
		baseUrl,
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
		addUser: builder.mutation({
			query: (body) => {
				return {
					url: `/user/adduser`,
					method: "POST",
					body,
				};
			},
		}),
		getUserActivity: builder.query({
			query: (id) => `/user/activity/${id}`,
		}),
	}),
});

export const { useAddUserMutation, useGetUserActivityQuery } = userApi;
