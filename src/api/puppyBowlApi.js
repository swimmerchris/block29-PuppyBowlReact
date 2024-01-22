import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const puppyBowlApi = createApi({
  reducerPath: "puppyBowlApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://fsa-puppy-bowl.herokuapp.com/api/2310-fsa-pt-web-b/"
  }),

  tagTypes: ["Post"],
  endpoints: (builder) => ({
    fetchPlayers: builder.query({
      query: () => "/players",
      providesTags: ["Post"]
    }),
    addPlayer: builder.mutation({
      query: (body) => {
        console.log(body)
        return {
          url: "players",
          method: "POST",
          body
        }
      },
      invalidatesTags: ["Post"]
    }),
    deletePlayer: builder.mutation({
      query: (id) => ({
        url: `/players/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Post"]
    })
  }),
});

// Export hooks for each endpoint - in this case, a React hook that triggers the fetchPlayers query

export const { useFetchPlayersQuery, useAddPlayerMutation, useDeletePlayerMutation } = puppyBowlApi;
