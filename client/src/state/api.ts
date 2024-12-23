import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL }),
  reducerPath: "api",
  tagTypes: [],
  endpoints: (builder) => ({
    getExampleData: builder.query<{data: string}, void>({
      query: () => "example/endpoint"
    })
  }),
});

export const {} = api;
