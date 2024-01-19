// Import createApi (function to create an API service) and fetchBaseQuery (a basic fetch wrapper)
// from Redux Toolkit Query's React-specific entry point
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define an API using createApi
export const puppyBowlApi = createApi({
  // Unique string used in constructing Redux action types, state selectors, and React hook names
  reducerPath: "puppyBowlApi",
  // Define a base query function that all endpoints will use as the base of their request
  baseQuery: fetchBaseQuery({
    // The base URL for all requests
    baseUrl: "https://fsa-puppy-bowl.herokuapp.com/api/2310-fsa-pt-web-b/"
  }),
  // Define endpoints for our API service
  tagTypes: ["Post"],
  endpoints: (builder) => ({
    // Define an endpoint that fetches players
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
