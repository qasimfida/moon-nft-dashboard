import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { createAsyncThunk } from "@reduxjs/toolkit";
const baseUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

export const fetchAllTabFeaturedData = createAsyncThunk(
  "collections/featured/all",
  async ({ limit, type, page, activeTab }, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `${baseUrl}nft/collection/get?limit=${limit}&type=${type}`
      );
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
export const fetchFeaturedData = createAsyncThunk(
  "collections/featured",
  async ({ limit, type, page, activeTab }, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `${baseUrl}nft/collection/get?limit=${limit}&type=${type}${
          page ? `&offset=${page * limit}` : ""
        }`
      );
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
export const fetchMint = createAsyncThunk(
  "collections/mint",
  async ({ vanity }, { rejectWithValue }) => {
    try {
      const response = await fetch(`${baseUrl}nft/collection/${vanity}`);
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
export const fetch24Collections = createAsyncThunk(
  "collections/top24",
  async ({ limit, offset }, { rejectWithValue, getState }) => {
    try {
      const { user } = getState();
      const response = await fetch(
        `${baseUrl}nft/collection/top24h?limit=${limit || 5}${
          offset ? `&offset=${offset}` : ""
        }`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${user.access_token}`,
          },
        }
      );
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
export const fetchTopCollections = createAsyncThunk(
  "collections/top",
  async ({ limit, offset }, { rejectWithValue, getState }) => {
    try {
      const { user } = getState();
      const response = await fetch(
        `${baseUrl}nft/collection/top?limit=${limit || 5}${
          offset ? `&offset=${offset}` : ""
        }`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${user.access_token}`,
          },
        }
      );
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
export const fetchCollectionNfts = createAsyncThunk(
  "collections/nfts",
  async ({ vanity, page }, { rejectWithValue, getState }) => {
    try {
      const { user } = getState();
      const response = await fetch(
        `${baseUrl}nft/collection/nfts/${vanity}?limit=10${
          page ? `&offset=${page * 10}` : ""
        }`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${user.access_token}`,
          },
        }
      );
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
export const fetchCollectionPageNfts = createAsyncThunk(
  "collections/nfts/page1",
  async ({ vanity, page }, { rejectWithValue, getState }) => {
    try {
      const { user } = getState();
      const response = await fetch(
        `${baseUrl}nft/collection/nfts/${vanity}?limit=10`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${user.access_token}`,
          },
        }
      );
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
export const createBuyOffer = createAsyncThunk(
  "collections/nft/createBuyOffer",
  async (body, { rejectWithValue, getState }) => {
    try {
      const { user } = getState();
      const response = await fetch(
        `${baseUrl}nft/createBuyOffer`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${user.access_token}`,
          },
		  body: JSON.stringify(body)
        }
      );
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
export const createSellOffer = createAsyncThunk(
  "collections/nft/createSellOffer",
  async (body, { rejectWithValue, getState }) => {
    try {
      const { user } = getState();
      const response = await fetch(
        `${baseUrl}nft/createSellOffer`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${user.access_token}`,
          },
		  body: JSON.stringify(body)
        }
      );
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
export const fetchCollectionNft = createAsyncThunk(
  "collections/nft/get",
  async (nft, { rejectWithValue, getState }) => {
    try {
      const { user } = getState();
      const response = await fetch(
        `${baseUrl}token/nft/${nft}`,
      );
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
export const collectionsApi = createApi({
  reducerPath: "top_collections",
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers, { getState }) => {
      const { user } = getState();
      headers.set("Content-Type", "application/json");
      headers.set("Accept", "application/json");
      if (user.access_token) {
        headers.set("Authorization", `Bearer ${user.access_token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopCollections: builder.query({
      query: (limit) => `/nft/collection/get?limit=${limit || 5}`,
    }),
    getTop24Collections: builder.query({
      query: ({ limit }) => `/nft/collection/top24h?limit=${limit || 5}`,
    }),
    getTopSellingCollections: builder.query({
      query: (limit) => `/nft/collection/top?limit=${limit || 5}`,
    }),
    getFeaturedCollections: builder.query({
      query: () => `/nft/collection/featured`,
    }),
    getMintingCollections: builder.query({
      query: () => `/nft/collection/minting`,
    }),
    getNamedCollections: builder.query({
      query: ({ limit, type }) =>
        `/nft/collection/get?limit=${limit}&type=${type}`,
    }),
    getUpcomingCollections: builder.query({
      query: () => `/nft/collection/upcoming`,
    }),
    getMint: builder.query({
      query: (vanity) => `/nft/get/collection/${vanity}`,
    }),
    getUser: builder.query({
      query: (wallet) => `/user/getuser/${wallet}`,
    }),
    getVanityCollection: builder.query({
      query: (vanity) => `/nft/collection/nfts/${vanity}?limit=10`,
    }),
    getNft: builder.query({
      query: (nft) => `/token/nft/${nft}`,
    }),
    getNftActivity: builder.query({
      query: (nft) => `/token/nft/activity/${nft}`,
    }),
    getNftBids: builder.query({
      query: (nft) => `/token/nft/offers/${nft}`,
    }),
    getUserNfts: builder.query({
      query: (wallet) => `/token/nfts/${wallet}`,
    }),
    getUserActivity: builder.query({
      query: (id) => `/user/activity/${id}`,
    }),
    getUserOnSale: builder.query({
      query: (id) => `/user/onsale/${id}`,
    }),
    getMyListing: builder.query({
      query: (id) => `/nft/getcollections/${id}`,
    }),
    getMintBanner: builder.query({
      query: (id) => `/nft/collection/mintfeatured`,
    }),
    getOffersData: builder.query({
      query: (id) =>
        `https://api.moon-market.io:8080/user/offersby/${id}`,
    }),
    getOffersMadeData: builder.query({
      query: (id) =>
        `https://api.moon-market.io:8080/user/offersfor/${id}`,
    }),
    getFilteredData: builder.query({
      query: ({vanity, trait_type, value}) =>
        `https://api.moon-market.io:8080/nft/traitnfts/${vanity}/${trait_type}/${value}?limit=10`,
    }),
  }),
});

export const {
  useGetTopCollectionsQuery,
  useGetTop24CollectionsQuery,
  useGetFeaturedCollectionsQuery,
  useGetMintingCollectionsQuery,
  useGetNamedCollectionsQuery,
  useGetUpcomingCollectionsQuery,
  useGetTopSellingCollectionsQuery,
  useGetMintQuery,
  useGetUserQuery,
  useGetVanityCollectionQuery,
  useGetNftActivityQuery,
  useGetNftBidsQuery,
  useGetNftQuery,
  useGetUserNftsQuery,
  useGetUserActivityQuery,
  useGetUserOnSaleQuery,
  useGetMyListingQuery,
  useGetMintBannerQuery,
  useGetOffersDataQuery,
  useGetOffersMadeDataQuery,
  useGetFilteredDataQuery,
} = collectionsApi;
