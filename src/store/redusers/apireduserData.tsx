import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// const j={
//   avatar_url:"https://live.devnimble.com/api/avatars/person_default",
// children: [],
// company_last_contacted: {in: null, out: null},
// //contexts:  [{…}, {…}],
// created:"2024-08-01T16:12:07.986745",
// creator: "Nimble Test",
// creator_id: "66a8b1e29ec34c88cd3c4f66",
// employers_info:[],
// //fields: {email: Array(1), first name: Array(1), last name: Array(1)},
// files: null,
// id:"66abb3d75290355bdf24ddad",
// is_editable: true,
// is_important: null,
// last_contacted:{tstamp: null, type: null, object_id: null, user_id: null, deletion_tstamp: null},
// last_contacted_user:null,
// lc:null,
// notice:null,
// object_type: "contact",
// owner_id:null,
// privacy:{read: null, edit: null},
// record_type: "person",
// reminder: null,
// reminders: null,
// stages_info: {},
// tags: [],
// tags2: [],
// updated:"2024-08-01T16:12:07.986745",
// updater:null
// }

export const apiData = createApi({
  reducerPath: 'storeApiTest',
  baseQuery: fetchBaseQuery({
    baseUrl: '/api/v1/contacts',
    prepareHeaders: (headers) => {
      headers.set('authorization', `Bearer VlP9cwH6cc7Kg2LsNPXpAvF6QNmgZn`);
      return headers;
    },
  }),

  endpoints: (builder) => ({
    getStoreDataTest: builder.query({
      query: (name) => `/${name}`,
    }),
  }),
});

export const { useLazyGetStoreDataTestQuery } = apiData;
