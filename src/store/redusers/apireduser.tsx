import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { CreateContctType, QweryType, ResponseData } from "types"

export interface TypeN {
  id:string;
  tag: Array<string>
}


export const storeApi = createApi({
  reducerPath: "storeApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "/api/v1/",
    prepareHeaders: (headers) => {
      headers.set("authorization", `Bearer VlP9cwH6cc7Kg2LsNPXpAvF6QNmgZn`)
      headers.set("created", "desc")
      return headers
    },
  }),
  tagTypes: ["Research"],
  endpoints: (builder) => ({
    getStoreData: builder.query<ResponseData, string>({
      query: (name) => ({
        url: `/${name}`,
        method: "Get",
      }),
      providesTags: ["Research"],
    }),

    deleteAlbum: builder.mutation({
      query: (id) => ({
        url: `contact/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Research"],
    }),

    addNewContact: builder.mutation({
      query: (data: CreateContctType) => ({
        url: "/contact",
        method: "POST",
        body: {
          avatar_url: "https://live.devnimble.com/api/avatars/person_default",
          fields: {
            email: [{ label: "email", modifier: "", value: data.email, is_primary: false }],
            "first name": [{ label: "email", modifier: "", value: data.name, is_primary: false }],
            "last name": [{ label: "email", modifier: "", value: data.surname, is_primary: false }],
          },
          privacy: {
            edit: null,
            read: null,
          },
          owner_id: null,
          type: "person",
        },
      }),
      invalidatesTags: ["Research"],
    }),

    updateContact: builder.mutation({
      query(data:TypeN) {
        //const { id, ...body } = data
        console.log(data)
        return {
          url: `contacts/${data.id}/tags`,
          method: "PUT",
          body: {
          tags: data.tag
           
          },
        }
      },
    }),

    getContact: builder.query({
      query(id) {
        console.log(id)
        return {
          url: `contact/${id}`,
          method: "GET",
        }
      }, 
    }),
  }),
})

export const {
  useLazyGetStoreDataQuery,
  useDeleteAlbumMutation,
  useAddNewContactMutation,
  useUpdateContactMutation,
  useGetContactQuery
} = storeApi
