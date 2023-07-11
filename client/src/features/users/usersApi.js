import apiSlice from "../api/apiSlice";

export const userApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getUsers: builder.query({
            query: () => `/users`,
            providesTags: ['Users']
        }),
        getUser: builder.query({
            query: (id) => `/users/${id}`,
            providesTags: ["User"]
        }),
        postUser: builder.mutation({
            query: ({ ...patch }) => ({
                url: "/users",
                method: "POST",
                body: patch
            }),
            // cash optimistic update
            async onQueryStarted(
                arg,
                { dispatch, queryFulfilled }
            ) {
                try {
                    const { data } = await queryFulfilled;
                    dispatch(userApi.util.updateQueryData('getUsers', {}, (draft) => {
                        draft.push(data)
                    }))
                } catch (error) {
                }
            },
        }),
        updateUser: builder.mutation({
            query: ({ _id, ...patch }) => ({
                url: `/users/${_id}`,
                method: 'PUT',
                body: patch
            }),
            // cash optimistic update
            async onQueryStarted(
                arg,
                { dispatch, queryFulfilled }
            ) {
                try {
                    const { data } = await queryFulfilled;
                    dispatch(userApi.util.updateQueryData('getUsers', {}, (draft) => {
                        const findIndex = draft?.findIndex((user) => user?._id === data?._id)
                        draft[findIndex].name = data.name
                        draft[findIndex].email = data.email
                        draft[findIndex].phone = data.phone
                    }))
                } catch (error) {
                }
            },
            invalidatesTags: ['User']
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

