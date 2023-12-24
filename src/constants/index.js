import {
  DashboardIcon,
  FavoritesIcon,
  FollowingIcon,
  ListingIcon,
} from "@/components/Svgs";
import { AccountCircle, CircleNotifications, CollectionsBookmark } from "@mui/icons-material";


export const pages = [
  {
    name: "Explore",
    path: "/",
  },
  {
    name: "Stats",
    path: "/stats",
  },
  {
    name: "Services",
    path: "/services",
  },
  {
    name: "Apply",
    path: "/new-listings",
  },
  {
    name: "Launchpad",
    path: "/launchpad",
  },
];

export const serahcItems = [
  {
    type: "collections",
    collections: [
      {
        name: "Collection 1",
        items: 9800,
      },
      {
        name: "Collection 2",
        items: 9800,
      },
      {
        name: "Collection 3",
        items: 9800,
      },
    ],
  },

  {
    type: "profiles",
    profiles: [
      {
        name: "Profile 1",
      },
      {
        name: "Profile 2",
      },
      {
        name: "Profile 3",
      },
    ],
  },
];

export const DashboardNavOptions = [
  {
    label: "Dashboard",
    path: "/profile/profile-settings",
    icon: <DashboardIcon />,
  },
  {
    label: "Your Listings",
    path: "/profile/account-details",
    icon: <ListingIcon />,
  },
  {
    label: "Favorites",
    path: "/profile/notification-settings",
    icon: <FavoritesIcon />,
  },
  {
    label: "Following",
    path: "/profile/notification-settings",
    icon: <FollowingIcon />,
  },
];
export const profileSettingsNavOptions = (id) => [
  {
    label: "Account Details",
    path: `/profile/${id}/account-details`,
    icon: <AccountCircle />,
  },
  {
    label: "Notifications",
    path: `/profile/${id}/notification-settings`,
    icon: <CircleNotifications />,
  },
];
export const profileCollectionSettings = (id) => [
  {
    label: "Your Collections",
    path: `/profile/${id}/your-listings`,
    icon: <CollectionsBookmark />,
  },
];

export const notificationSettings = [
  {
    label: "Sold Item",
    text: "When one of your items is purchased",
    key:"sold"
  },
  {
    label: "Bidding Activity",
    text: "When someone bids on one of your item",
    key:"bid"
  },
  {
    label: "Price Change",
    text: "When an item you made an offer on changes in price",
    key:"pchange"
  },
  {
    label: "Outbid",
    text: "When another user placed a higher bid on an item you bid on",
    key:"outbid"
  },
  {
    label: "Item Bought",
    text: "When you purchased an item",
    key:"bought"
  },
];

export const ActiveMintList = [
  {
    id: 1,
    title: "Celestial Spirits",
    mintPrice: "20 XRP",
    collectionSize: "1000",
    mintedPercentage: 65,
    image:
      "https://imgv3.fotor.com/images/gallery/Realistic-Male-Profile-Picture.jpg",
  },
  {
    id: 2,
    title: "Celestial Spirits",
    mintPrice: "20 XRP",
    collectionSize: "1000",
    mintedPercentage: 20,
    image:
      "https://imgv3.fotor.com/images/gallery/Realistic-Male-Profile-Picture.jpg",
  },
  {
    id: 3,
    title: "Celestial Spirits",
    mintPrice: "20 XRP",
    collectionSize: "1000",
    mintedPercentage: 55,
    image:
      "https://imgv3.fotor.com/images/gallery/Realistic-Male-Profile-Picture.jpg",
  },
  {
    id: 4,
    title: "Celestial Spirits",
    mintPrice: "20 XRP",
    collectionSize: "1000",
    mintedPercentage: 95,
    image:
      "https://imgv3.fotor.com/images/gallery/Realistic-Male-Profile-Picture.jpg",
  },
];

export const upcommingMintList = [
  {
    id: 1,
    title: "Celestial Spirits",
    mintPrice: "20 XRP",
    collectionSize: "1000",
    image: "/images/nft-img-4.png",
    date: "01 June 2024",
  },
  {
    id: 2,
    title: "Celestial Spirits",
    mintPrice: "20 XRP",
    collectionSize: "1000",
    image: "/images/nft-img-3.png",
    date: "26 Apr 2024",
  },
  {
    id: 3,
    title: "Celestial Spirits",
    mintPrice: "20 XRP",
    collectionSize: "1000",
    image: "/images/nft-img-2.png",
    date: "18 Aug 2024",
  },
  {
    id: 4,
    title: "Celestial Spirits",
    mintPrice: "20 XRP",
    collectionSize: "1000",
    image: "/images/nft-img-1.png",
    date: "13 Oct 2024",
  },
];

export const pagesWithOnlyCopyrightSection = [
  "/profile/notification-settings",
  "/profile/account-details",
  "/profile/profile-settings",
  "/signin",
];

export const withoutHeader = ["/signin"];

export const sliderImages = [
  {
    id: 1,
    image: "/images/animation-1.png",
  },
  {
    id: 1,
    image: "/images/collection.png",
  },
  {
    id: 1,
    image: "/images/sale-img-1.png",
  },
  {
    id: 1,
    image: "/images/animation-1.png",
  },
];

export const timelineList = [
  {
    id: 1,
    title: "01",
    descriptionTitle: "XRPL Collection Launch",
    description:
      "Launch the Celestial Spirit Collection on the XRP Ledger (XRPL), generating anticipation through social media engagement and ensuring seamless integration with XRPL platforms and wallets.",
  },
  {
    id: 2,
    title: "02",
    descriptionTitle: "XRPL Collection Launch",
    description:
      "Launch the Celestial Spirit Collection on the XRP Ledger (XRPL), generating anticipation through social media engagement and ensuring seamless integration with XRPL platforms and wallets.",
  },
  {
    id: 3,
    title: "03",
    descriptionTitle: "XRPL Collection Launch",
    description:
      "Launch the Celestial Spirit Collection on the XRP Ledger (XRPL), generating anticipation through social media engagement and ensuring seamless integration with XRPL platforms and wallets.",
  },
  {
    id: 4,
    title: "04",
    descriptionTitle: "XRPL Collection Launch",
    description:
      "Launch the Celestial Spirit Collection on the XRP Ledger (XRPL), generating anticipation through social media engagement and ensuring seamless integration with XRPL platforms and wallets.",
  },
  {
    id: 5,
    title: "05",
    descriptionTitle: "XRPL Collection Launch",
    description:
      "Launch the Celestial Spirit Collection on the XRP Ledger (XRPL), generating anticipation through social media engagement and ensuring seamless integration with XRPL platforms and wallets.",
  },
];

export const RecommendedCollectionList = [
  {
    mainImage: "/images/service-image-6.png",
    leftTopImage: "/images/service-image-6.png",
    leftBottomImage: "/images/service-image-6.png",
    title: "Celestial Spirits",
    items: 9800,
  },
  {
    mainImage: "/images/service-image-6.png",
    leftTopImage: "/images/service-image-6.png",
    leftBottomImage: "/images/service-image-6.png",
    title: "Celestial Spirits",
    items: 9800,
  },
  {
    mainImage: "/images/service-image-6.png",
    leftTopImage: "/images/service-image-6.png",
    leftBottomImage: "/images/service-image-6.png",
    title: "Celestial Spirits",
    items: 9800,
  },
  {
    mainImage: "/images/service-image-6.png",
    leftTopImage: "/images/service-image-6.png",
    leftBottomImage: "/images/service-image-6.png",
    title: "Celestial Spirits",
    items: 9800,
  },
];
export const servicesCarouselData = [
  {
    mainImage: "/images/service-image-6.png",
    leftTopImage: "/images/service-image-6.png",
    leftBottomImage: "/images/service-image-6.png",
    title: "Celestial Spirits",
    items: 9800,
  },
  {
    mainImage: "/images/service-image-6.png",
    leftTopImage: "/images/service-image-6.png",
    leftBottomImage: "/images/service-image-6.png",
    title: "Celestial Spirits",
    items: 9800,
  },
  {
    mainImage: "/images/service-image-6.png",
    leftTopImage: "/images/service-image-6.png",
    leftBottomImage: "/images/service-image-6.png",
    title: "Celestial Spirits",
    items: 9800,
  },
  {
    mainImage: "/images/service-image-6.png",
    leftTopImage: "/images/service-image-6.png",
    leftBottomImage: "/images/service-image-6.png",
    title: "Celestial Spirits",
    items: 9800,
  },
];

export const tabsData = [
  "All",
  "Trending",
  "Art",
  "Utility",
  "Collectibles",
  "Metaverse",
  "Domain Names",
];

export const moonCardsData = [
  {
    id: 1,
    image: "/images/collection-img-1.png",
    title: "Celestial Spirits",
    creator: "By Moon World",
    floorPrice: "1000 XRP",
    floorList: "1000 XRP",
  },
  {
    id: 2,
    image: "/images/user-collection-new-img.png",
    title: "MoonWorld: Humans",
    creator: "By Moon World",
    floorPrice: "1200 XRP",
    floorList: "4/84",
  },
  {
    id: 3,
    image: "/images/collection-img-3.png",
    title: "Bored Apes XRP Club",
    creator: "By Ezequiel Dengra",
    floorPrice: "1200 XRP",
    floorList: "0/84",
  },
  {
    id: 4,
    image: "/images/collection-img-4.png",
    title: "xPepe",
    creator: "By Svyatoslav Taushev",
    floorPrice: "1200 XRP",
    floorList: "0/84",
  },
  {
    id: 5,
    image: "/images/collection-img-5.png",
    title: "xPepe",
    creator: "Angela Longoria",
    floorPrice: "1200 XRP",
    floorList: "0/84",
  },
  {
    id: 6,
    image: "/images/collection-img-6.png",
    title: "Top G Apes",
    creator: "Mathijn Agter",
    floorPrice: "1200 XRP",
    floorList: "0/84",
  },
];
export const nftCollectionsData = [
  {
    id: 1,
    image: "/images/nft-img-1.png",
    title: "Celestial Spirits",
    creator: "By Moon World",
    floorPrice: "1000 XRP",
    floorList: "1000",
  },
  {
    id: 2,
    image: "/images/nft-img-2.png",
    title: "MoonWorld: Humans",
    creator: "By Moon World",
    floorPrice: "1200 XRP",
    floorList: "1000",
  },
  {
    id: 3,
    image: "/images/nft-img-3.png",
    title: "Bored Apes XRP Club",
    creator: "By Ezequiel Dengra",
    floorPrice: "1200 XRP",
    floorList: "1000",
  },
  {
    id: 4,
    image: "/images/nft-img-4.png",
    title: "xPepe",
    creator: "By Svyatoslav Taushev",
    floorPrice: "1200 XRP",
    floorList: "1000",
  },
  {
    id: 5,
    image: "/images/nft-img-4.png",
    title: "xPepe",
    creator: "By Svyatoslav Taushev",
    floorPrice: "1200 XRP",
    floorList: "1000",
  },
  {
    id: 6,
    image: "/images/nft-img-4.png",
    title: "xPepe",
    creator: "By Svyatoslav Taushev",
    floorPrice: "1200 XRP",
    floorList: "1000",
  },
  {
    id: 7,
    image: "/images/nft-img-4.png",
    title: "xPepe",
    creator: "By Svyatoslav Taushev",
    floorPrice: "1200 XRP",
    floorList: "1000",
  },
  {
    id: 8,
    image: "/images/nft-img-4.png",
    title: "xPepe",
    creator: "By Svyatoslav Taushev",
    floorPrice: "1200 XRP",
    floorList: "1000",
  },
  {
    id: 9,
    image: "/images/nft-img-4.png",
    title: "xPepe",
    creator: "By Svyatoslav Taushev",
    floorPrice: "1200 XRP",
    floorList: "1000",
  },
  {
    id: 10,
    image: "/images/nft-img-4.png",
    title: "xPepe",
    creator: "By Svyatoslav Taushev",
    floorPrice: "1200 XRP",
    floorList: "1000",
  },
  {
    id: 11,
    image: "/images/nft-img-4.png",
    title: "xPepe",
    creator: "By Svyatoslav Taushev",
    floorPrice: "1200 XRP",
    floorList: "1000",
  },
  {
    id: 12,
    image: "/images/nft-img-4.png",
    title: "xPepe",
    creator: "By Svyatoslav Taushev",
    floorPrice: "1200 XRP",
    floorList: "1000",
  },
  {
    id: 13,
    image: "/images/nft-img-4.png",
    title: "xPepe",
    creator: "By Svyatoslav Taushev",
    floorPrice: "1200 XRP",
    floorList: "1000",
  },
  {
    id: 14,
    image: "/images/nft-img-4.png",
    title: "xPepe",
    creator: "By Svyatoslav Taushev",
    floorPrice: "1200 XRP",
    floorList: "1000",
  },
  {
    id: 15,
    image: "/images/nft-img-4.png",
    title: "xPepe",
    creator: "By Svyatoslav Taushev",
    floorPrice: "1200 XRP",
    floorList: "1000",
  },
  {
    id: 16,
    image: "/images/nft-img-4.png",
    title: "xPepe",
    creator: "By Svyatoslav Taushev",
    floorPrice: "1200 XRP",
    floorList: "1000",
  },
];
export const nftTabTwo = [
  {
    id: 1,
    image: "/images/nft-img-2.png",
    title: "Celestial Spirits",
    creator: "By Moon World",
    floorPrice: "1000 XRP",
    floorList: "1000 XRP",
  },
  {
    id: 2,
    image: "/images/nft-img-4.png",
    title: "MoonWorld: Humans",
    creator: "By Moon World",
    floorPrice: "1200 XRP",
    floorList: "4/84",
  },
  {
    id: 3,
    image: "/images/nft-img-1.png",
    title: "Bored Apes XRP Club",
    creator: "By Ezequiel Dengra",
    floorPrice: "1200 XRP",
    floorList: "0/84",
  },
  {
    id: 4,
    image: "/images/nft-img-3.png",
    title: "xPepe",
    creator: "By Svyatoslav Taushev",
    floorPrice: "1200 XRP",
    floorList: "0/84",
  },
  {
    id: 5,
    image: "/images/nft-img-2.png",
    title: "Celestial Spirits",
    creator: "By Moon World",
    floorPrice: "1000 XRP",
    floorList: "1000 XRP",
  },
  {
    id: 6,
    image: "/images/nft-img-4.png",
    title: "MoonWorld: Humans",
    creator: "By Moon World",
    floorPrice: "1200 XRP",
    floorList: "4/84",
  },
  {
    id: 7,
    image: "/images/nft-img-1.png",
    title: "Bored Apes XRP Club",
    creator: "By Ezequiel Dengra",
    floorPrice: "1200 XRP",
    floorList: "0/84",
  },
  {
    id: 8,
    image: "/images/nft-img-3.png",
    title: "xPepe",
    creator: "By Svyatoslav Taushev",
    floorPrice: "1200 XRP",
    floorList: "0/84",
  },
  {
    id: 9,
    image: "/images/nft-img-3.png",
    title: "xPepe",
    creator: "By Svyatoslav Taushev",
    floorPrice: "1200 XRP",
    floorList: "0/84",
  },
  {
    id: 10,
    image: "/images/nft-img-3.png",
    title: "xPepe",
    creator: "By Svyatoslav Taushev",
    floorPrice: "1200 XRP",
    floorList: "0/84",
  },
  {
    id: 11,
    image: "/images/nft-img-3.png",
    title: "xPepe",
    creator: "By Svyatoslav Taushev",
    floorPrice: "1200 XRP",
    floorList: "0/84",
  },
  {
    id: 12,
    image: "/images/nft-img-3.png",
    title: "xPepe",
    creator: "By Svyatoslav Taushev",
    floorPrice: "1200 XRP",
    floorList: "0/84",
  },
  {
    id: 13,
    image: "/images/nft-img-3.png",
    title: "xPepe",
    creator: "By Svyatoslav Taushev",
    floorPrice: "1200 XRP",
    floorList: "0/84",
  },
  {
    id: 14,
    image: "/images/nft-img-3.png",
    title: "xPepe",
    creator: "By Svyatoslav Taushev",
    floorPrice: "1200 XRP",
    floorList: "0/84",
  },
  {
    id: 15,
    image: "/images/nft-img-3.png",
    title: "xPepe",
    creator: "By Svyatoslav Taushev",
    floorPrice: "1200 XRP",
    floorList: "0/84",
  },
  {
    id: 16,
    image: "/images/nft-img-3.png",
    title: "xPepe",
    creator: "By Svyatoslav Taushev",
    floorPrice: "1200 XRP",
    floorList: "0/84",
  },
];

export const SaleCardData = [
  {
    image: "/images/animation-1.png",
    rankTitle: "Artwork 1",
    year: "Artist A",
    price: "120",
  },
  {
    image: "/images/animation-1.png",
    rankTitle: "Artwork 2",
    year: "Artist B",
    price: "180",
  },
  {
    image: "/images/animation-1.png",
    rankTitle: "Artwork 3",
    year: "Artist C",
    price: "220",
  },
  {
    image: "/images/animation-1.png",
    rankTitle: "Artwork 4",
    year: "Artist D",
    price: "150",
  },
  {
    image: "/images/animation-1.png",
    rankTitle: "Artwork 5",
    year: "Artist E",
    price: "300",
  },
  {
    image: "/images/animation-1.png",
    rankTitle: "Artwork 6",
    year: "Artist F",
    price: "250",
  },
  {
    image: "/images/animation-1.png",
    rankTitle: "Artwork 7",
    year: "Artist G",
    price: "200",
  },
  {
    image: "/images/animation-1.png",
    rankTitle: "Artwork 8",
    year: "Artist H",
    price: "280",
  },
];

export const detailsTabData = [
  { title: "01 Background ", percentage: "Scorpio 3.88%" },
  { title: "02 Planet", percentage: "Sun 4.88 %" },
  { title: "03 Body", percentage: "Gold 1.88 %" },
  { title: "04 Clothes", percentage: "Space Swag 32 %" },
  { title: "05 Eyes", percentage: "Ruby 4.88 %" },
  { title: "06 Mouth", percentage: "Happy 1.88 %" },
  { title: "07 Headwear", percentage: "Headphones 32 %" },
  { title: "08 Hand", percentage: "Earth - Gold 32 %" },
];

export const statusListsData = [
  {
    id: 1,
    name: "Celestial Spirits",
    price: "10,450.00",
    priceChange: "-10,00%",
    volume: "+18,60%",
    sales: "4,915",
    owners: "6.3k",
    total: "2222",
    image: "/images/Art.png",
  },
  {
    id: 2,
    name: "MoonWorld: Humans",
    price: "10,450.00",
    priceChange: "-10,00%",
    volume: "+18,60%",
    sales: "4,915",
    owners: "6.3k",
    total: "2222",
    image: "/images/Art.png",
  },
  {
    id: 3,
    name: "Bored Apes XRP Club",
    price: "10,450.00",
    priceChange: "-10,00%",
    volume: "+18,60%",
    sales: "4,915",
    owners: "6.3k",
    total: "2222",
    image: "/images/Art.png",
  },
  {
    id: 4,
    name: "xPepe",
    price: "10,450.00",
    priceChange: "-10,00%",
    volume: "+18,60%",
    sales: "4,915",
    owners: "6.3k",
    total: "2222",
    image: "/images/Art.png",
  },
  {
    id: 5,
    name: "xShrooms",
    price: "10,450.00",
    priceChange: "-10,00%",
    volume: "+18,60%",
    sales: "4,915",
    owners: "6.3k",
    total: "2222",
    image: "/images/Art.png",
  },
  {
    id: 6,
    name: "Top G Apes",
    price: "10,450.00",
    priceChange: "-10,00%",
    volume: "+18,60%",
    sales: "4,915",
    owners: "6.3k",
    total: "2222",
    image: "/images/Art.png",
  },
  {
    id: 7,
    name: "Worldwide Webb Land",
    price: "10,450.00",
    priceChange: "-10,00%",
    volume: "+18,60%",
    sales: "4,915",
    owners: "6.3k",
    total: "2222",
    image: "/images/Art.png",
  },
  {
    id: 8,
    name: "Worldwide Webb Land",
    price: "10,450.00",
    priceChange: "-10,00%",
    volume: "+18,60%",
    sales: "4,915",
    owners: "6.3k",
    total: "2222",
    image: "/images/Art.png",
  },
  {
    id: 9,
    name: "Worldwide Webb Land",
    price: "10,450.00",
    priceChange: "-10,00%",
    volume: "+18,60%",
    sales: "4,915",
    owners: "6.3k",
    total: "2222",
    image: "/images/Art.png",
  },
];
export const statusButtonsData = ["24 Hrs", "All Time"];
export const statusTableHeadings = [
  "Collections",
  "Volume",
  "All time %",
  // "7h %",
  "Floor price",
  "Issuer",
  "Items",
];
export const status24TableHeadings = [
  "Collections",
  "Volume",
  "24Hrs %",
  // "7h %",
  "Floor price",
  "Issuer",
  "Items",
];