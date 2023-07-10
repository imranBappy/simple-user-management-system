import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseQuery = fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API_URL,
    prepareHeaders: (headers, state, endpoints) => {
        return headers;
    },
})
export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: async (args, api, extraOptions) => {
        const result = await baseQuery(args, api, extraOptions);
        if (result?.error?.status !== 200) {
            // ERROR ALAERT
        }
        return result;
    },
    tagTypes: [],
    endpoints: (builder) => ({})
})


export default apiSlice;