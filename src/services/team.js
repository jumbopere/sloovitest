import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { prepareAuthHeaders } from './utils'

export const teamApi = createApi({
    // reducerPath: 'teamApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://stage.api.sloovi.com/',
        prepareHeaders: (headers) => {
            prepareAuthHeaders(headers);
            return headers
        }
    }),
    endpoints: (builder) => (
        {
        getAssignees: builder.query({
            query: (company_id = 'company_413ef22b6237417fb1fba7917f0f69e7') => `team?product=outreach&company_id=${company_id}`
        })
    })
})

export const { useGetAssigneesQuery } = teamApi;