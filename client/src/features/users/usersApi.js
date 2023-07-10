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

        }),
        getUsers: builder.query({
            query: () => `/users`
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
        }),
        deleteUser: builder.mutation({
            query: (_id) => ({
                url: `/users/${_id}`,
                method: 'DELETE',
            }),

            // cash optimistic update
            async onQueryStarted(
                arg,
                { dispatch, queryFulfilled }
            ) {
                try {
                    const res = await queryFulfilled;
                    const { data } = res;
                    dispatch(userApi.util.updateQueryData('getUsers', {}, (draft) => {
                        console.log(JSON.parse(JSON.stringify(draft)));
                        const findIndex = draft?.findIndex((user) => user?._id === data?._id)
                        draft.splice(findIndex, 1)
                    }))
                } catch (error) {
                }
            },
        }),
    })
})

export const { useGetUsersQuery, useGetUserQuery, useDeleteUserMutation, usePostUserMutation, useUpdateUserMutation } = userApi;

