import apiSlice from "../api/apiSlice";

export const userApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        postUser: builder.mutation({
            query: ({ ...patch }) => ({
                url: "/users",
                method: "POST",
                body: patch
            }),
            transformResponse: (response, meta, arg) => response.data,
            async onQueryStarted(
                arg,
                { dispatch, getState, queryFulfilled, requestId, extra, getCacheEntry }
            ) {
                try {
                    const data = await queryFulfilled;
                    console.log(data);

                    // optimistic update

                } catch (error) {

                }

            },
        }),
        getUsers: builder.query({
            query: (email) => `/users?email=${email}`
        }),
        getUser: builder.query({
            query: (id) => `/users/${id}`
        }),
        updateUser: builder.mutation({
            query: ({ _id, ...patch }) => ({
                url: `/users/${_id}`,
                method: 'PUT',
                body: patch
            }),
            transformResponse: (response, meta, arg) => response.data,
            async onQueryStarted(
                arg,
                { dispatch, getState, queryFulfilled, requestId, extra, getCacheEntry }
            ) {
                try {
                    const data = await queryFulfilled;
                    console.log(data);

                    // optimistic update

                } catch (error) {

                }

            },
        }),
        deleteUser: builder.mutation({
            query: ({ _id, ...patch }) => ({
                url: `/delete/${_id}`,
                method: 'DELETE',
                body: patch
            }),
            transformResponse: (response, meta, arg) => response.data,
            async onQueryStarted(
                arg,
                { dispatch, getState, queryFulfilled, requestId, extra, getCacheEntry }
            ) {
                try {
                    const data = await queryFulfilled;
                    console.log(data);
                    // optimistic update
                } catch (error) {

                }
            },
        }),
    })
})

export const { useGetUserQuery } = userApi;

