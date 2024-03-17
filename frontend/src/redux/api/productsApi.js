import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://quickkart.onrender.com/api" }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: (params) => "/products",
    }),
    getProductDetails: builder.query({
      query: (id) => `/getProduct/${id}`,
    }),
  }),
});

export const { useGetProductsQuery, useGetProductDetailsQuery } = productApi;
