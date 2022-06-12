import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { prepareAuthHeaders } from 'services/utils'

export const taskApi = createApi({
    reducerPath: searchApi,
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://stage.api.sloovi.com/task/',
        prepareHeaders: (headers) => {
            prepareAuthHeaders(headers);
            return headers
        }
    }),
    tagTypes:["Tasks"],
    
    endpoints: (builder) => {
        getTasks: builder.query({
            query: (company_id = 'company_413ef22b6237417fb1fba7917f0f69e7') => `lead_465c14d0e99e4972b6b21ffecf3dd691?company_id=${company_id}`,
        transformResponse: res=>res.sort((a,b)=> b-a),
        providesTags: ["Tasks"]
        })
        postTask: builder.mutation({
            query: (task)=> ({
                url: "",
                method:"POST",
body:task
            }),
       invalidatesTags:["Tasks"]
            
        })
    }
})

export const { useGetTasksQuery } = taskApi;