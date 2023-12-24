import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
	createBuyOffer,
	createSellOffer,
	fetch24Collections,
	fetchAllTabFeaturedData,
	fetchCollectionNft,
	fetchCollectionNfts,
	fetchCollectionPageNfts,
	fetchCollections,
	fetchFeaturedData,
	fetchMint,
	fetchTopCollections,
} from "./apis";
const tabs = {
	all: {
		label: "All",
		key: "all",
		value: "0",
		isLoading: false,
		error: "",
		data: [],
		total: 0,
		page: 0,
	},
	// trending: {
	//   label: "Trending",
	//   key: "trending",
	//   value: '1',
	//   isLoading: false,
	//   error: "",
	//   data: [],
	//   total: 0,
	//   page: 1
	// },
	art: {
		label: "Art",
		key: "art",
		value: "1",
		isLoading: false,
		error: "",
		data: [],
		total: 0,
		page: 0,
	},

	utility: {
		label: "Utility",
		key: "utility",
		value: "2",
		isLoading: false,
		error: "",
		data: [],
		total: 0,
		page: 0,
	},
	collectibles: {
		label: "Collectibles",
		key: "collectibles",
		value: "3",
		isLoading: false,
		error: "",
		data: [],
		total: 0,
		page: 0,
	},
	metaverse: {
		label: "Metaverse",
		key: "metaverse",
		value: "4",
		isLoading: false,
		error: "",
		data: [],
		total: 0,
		page: 0,
	},
	// domain: {
	// 	label: "Domain names",
	// 	key: "domain",
	// 	value: "5",
	// 	isLoading: false,
	// 	error: "",
	// 	data: [],
	// 	total: 0,
	// 	page: 0,
	// },
};

const activeTab = { value: "0", key: "all", data: [], page: 0 };

const initialState = {
	collections: [],
	tabsLimit: 4,
	activeTab,
	mint: {
		isLoading: true,
		data: {},
		error: "",
	},
	tabs,
	top24: {
		data: [],
		isLoading: false,
		error: "",
		offset: 0,
	},
	top: {
		data: [],
		isLoading: false,
		error: "",
		offset: 0,
	},
	nfts: {
		data: [],
		isLoading: false,
		error: "",
		page: 0,
	},
	buyNft: {
		status: "",
		isLoading: false,
		error: "",
	},
	sellNft: {
		status: "",
		isLoading: false,
		error: "",
	},
};

export const collections = createSlice({
	name: "collections",
	initialState: initialState,
	reducers: {
		getCollections: (state, action) => {
			return {
				...state,
				collections: action.payload,
			};
		},
		onPageChange: (state, action) => {
			const key = action.payload;
			return {
				...state,
				tabs: {
					...state.tabs,
					[key]: {
						...state.tabs[key],
						page: state.tabs[key].page + 1,
					},
				},
			};
		},
		onTabChange: (state, action) => {
			return {
				...state,
				activeTab: action.payload,
			};
		},
		resetTabs: (state, action) => {
			return {
				...state,
				activeTab,
				tabs,
			};
		},
		updateStatusAndError: (state, action) => {
			const {type, key, value} = action.payload
			return {
				...state,
				[type]: {
					[key]: value
				}
			};
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchFeaturedData.pending, (state, { payload }) => {
				const key = state.activeTab.key;
				state.tabs = {
					...state.tabs,
					[key]: {
						...state.tabs[key],
						isLoading: true,
						error: "",
					},
				};
			})
			.addCase(fetchFeaturedData.fulfilled, (state, { payload }) => {
				const key = state.activeTab.key;
				const prevState = [...state.tabs[key].data];
				state.tabs = {
					...state.tabs,
					[key]: {
						...state.tabs[key],
						isLoading: false,
						error: "",
						data: [...state.tabs[key].data, ...(payload?.collections || [])],
						page: state.activeTab.page + 1,
					},
				};
				state.activeTab.page = state.activeTab.page + 1;
			})
			.addCase(fetchFeaturedData.rejected, (state, { payload }) => {
				const key = state.activeTab.key;
				state.tabs = {
					...state.tabs,
					[key]: {
						...state.tabs[key],
						isLoading: false,
						error: "Error",
					},
				};
			});
		builder
			.addCase(fetchAllTabFeaturedData.pending, (state, { payload }) => {
				const key = state.activeTab.key;
				state.tabs = {
					...state.tabs,
					[key]: {
						...state.tabs[key],
						isLoading: true,
						error: "",
					},
				};
				state.activeTab.isLoading = true;
			})
			.addCase(fetchAllTabFeaturedData.fulfilled, (state, { payload }) => {
				const key = state.activeTab.key;
				state.tabs = {
					...state.tabs,
					[key]: {
						...state.tabs[key],
						isLoading: false,
						error: "",
						data: payload.collections,
					},
				};
				state.activeTab.page = state.activeTab.page;
				state.activeTab.isLoading = false;
			})
			.addCase(fetchAllTabFeaturedData.rejected, (state, { payload }) => {
				const key = state.activeTab.key;
				state.tabs = {
					...state.tabs,
					[key]: {
						...state.tabs[key],
						isLoading: false,
						error: "Error",
					},
				};
				state.activeTab.isLoading = false;
			});
		builder
			.addCase(fetchMint.pending, (state, { payload }) => {
				state.mint.isLoading = true;
				state.mint.error = "";
			})
			.addCase(fetchMint.fulfilled, (state, { payload }) => {
				state.mint.isLoading = false;
				state.mint.data = payload;
			})
			.addCase(fetchMint.rejected, (state, { payload }) => {
				state.mint.isLoading = false;
				state.mint.error = payload;
			});
		builder
			.addCase(fetch24Collections.pending, (state, { payload }) => {
				state.top24.isLoading = true;
				state.top24.error = "";
			})
			.addCase(fetch24Collections.fulfilled, (state, { payload }) => {
				state.top24.isLoading = false;
				state.top24.data = payload;
				state.top24.offset = state.top24.offset + 2;
			})
			.addCase(fetch24Collections.rejected, (state, { payload }) => {
				state.top24.isLoading = false;
				state.top24.error = payload;
			});
		builder
			.addCase(fetchTopCollections.pending, (state, { payload }) => {
				state.top.isLoading = true;
				state.top.error = "";
			})
			.addCase(fetchTopCollections.fulfilled, (state, { payload }) => {
				state.top.isLoading = false;
				state.top.data = payload;
				state.top.offset = state.top.offset + 2;
			})
			.addCase(fetchTopCollections.rejected, (state, { payload }) => {
				state.top.isLoading = false;
				state.top.error = payload;
			});
		builder
			.addCase(fetchCollectionNfts.pending, (state, { payload }) => {
				state.nfts.isLoading = true;
				state.nfts.error = "";
			})
			.addCase(fetchCollectionNfts.fulfilled, (state, { payload }) => {
				state.nfts.isLoading = false;
				state.nfts.data =
					state.nfts.page === 0 ? payload.nfts : [...state.nfts.data, ...payload.nfts];
				state.nfts.page = state.nfts.page + 1;
			})
			.addCase(fetchCollectionNfts.rejected, (state, { payload }) => {
				state.nfts.isLoading = false;
				state.nfts.error = payload;
			});
		builder
			.addCase(fetchCollectionPageNfts.pending, (state, { payload }) => {
				state.nfts.isLoading = true;
				state.nfts.error = "";
			})
			.addCase(fetchCollectionPageNfts.fulfilled, (state, { payload }) => {
				state.nfts.isLoading = false;
				state.nfts.data = payload.nfts;
				state.nfts.page = 1;
			})
			.addCase(fetchCollectionPageNfts.rejected, (state, { payload }) => {
				state.nfts.isLoading = false;
				state.nfts.error = payload;
			});
		builder
			.addCase(createBuyOffer.pending, (state, { payload }) => {
				state.buyNft.isLoading = true;
				state.buyNft.error = "";
			})
			.addCase(createBuyOffer.fulfilled, (state, { payload }) => {
				state.buyNft.isLoading = false;
				state.buyNft.status = "success";
			})
			.addCase(createBuyOffer.rejected, (state, { payload }) => {
				state.buyNft.isLoading = false;
				state.buyNft.status = "error";
				state.buyNft.error = payload.error || payload.message;
			});
		builder
			.addCase(createSellOffer.pending, (state, { payload }) => {
				state.sellNft.isLoading = true;
				state.sellNft.error = "";
			})
			.addCase(createSellOffer.fulfilled, (state, { payload }) => {
				state.sellNft.isLoading = false;
				state.sellNft.status = "qr";
				state.sellNft.qr = payload
			})
			.addCase(createSellOffer.rejected, (state, { payload }) => {
				state.sellNft.isLoading = false;
				state.sellNft.status = "error";
				state.sellNft.error = payload.error || payload.message;
			});
		builder
			.addCase(fetchCollectionNft.pending, (state, { payload }) => {
				state.sellNft.isLoading = true;
				state.sellNft.error = "";
			})
			.addCase(fetchCollectionNft.fulfilled, (state, { payload }) => {
				state.sellNft.isLoading = false;
				state.sellNft.nft = payload;
			})
			.addCase(fetchCollectionNft.rejected, (state, { payload }) => {
				state.sellNft.isLoading = false;
				state.sellNft.status = "error";
				state.sellNft.error = payload.error || payload.message;
			});
	},
});

export const { getCollections, onTabChange, onPageChange, resetTabs, updateStatusAndError } = collections.actions;
export default collections.reducer;
