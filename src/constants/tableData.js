"use client";
import { TransferIcon } from "@/components/Svgs";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ItemImg from "../../public/images/animation-1.png";

export function createData(name, item, price, from, to, date) {
	return { name, item, price, from, to, date };
}
// All Columns-Labels
export const itemActivityColumnLabels = ["Event", "Item", "Price", "From", "To", "Date"];
export const collectionsColumns = ["Events", "Items", "Price", "From", "To", "Date"];
export const offersColumnLabels = ["Item","Price", "Expiration", "From"];
export const collectionBidColumnLabels = ["Item", "Price", "From", "To"];
export const collectionActivityColumnLabels = ["Activity", "Price", "From", "To"];
export const offersMadeDataLabels = ["Items", "Price", "Expiration", "To"];
export const transfersDataLabels = ["Items", "Form", "Expiration", "To"];

// All Table-Body-Datas
export const itemActivityData = [
	{
		user: {
			image: ItemImg,
			label: "#305",
		},
		icon: {
			image: <TransferIcon />,
			label: "Transfer",
		},
		from: "nftinitcom",
		price: "123",
		to: "nonkosi.joyi",
		date: "2023-11-09",
	},
	{
		user: {
			image: ItemImg,
			label: "#305",
		},
		icon: {
			image: <ShoppingCartIcon />,
			label: "Sale",
		},
		from: "nftinitcom",
		price: "123",
		to: "nonkosi.joyi",
		date: "2023-11-09",
	},
	{
		user: {
			image: ItemImg,
			label: "#305",
		},
		icon: {
			image: <TransferIcon />,
			label: "Transfer",
		},
		from: "nftinitcom",
		price: "123",
		to: "nonkosi.joyi",
		date: "2023-11-09",
	},
	{
		user: {
			image: ItemImg,
			label: "#305",
		},
		icon: {
			image: <ShoppingCartIcon />,
			label: "Sale",
		},
		from: "nftinitcom",
		price: "123",
		to: "nonkosi.joyi",
		date: "2023-11-09",
	},
	{
		user: {
			image: ItemImg,
			label: "#305",
		},
		icon: {
			image: <TransferIcon />,
			label: "Transfer",
		},
		from: "nftinitcom",
		price: "123",
		to: "nonkosi.joyi",
		date: "2023-11-09",
	},
	{
		user: {
			image: ItemImg,
			label: "#305",
		},
		icon: {
			image: <TransferIcon />,
			label: "Transfer",
		},
		from: "nftinitcom",
		price: "123",
		to: "nonkosi.joyi",
		date: "2023-11-09",
	},
	{
		user: {
			image: ItemImg,
			label: "#305",
		},
		icon: {
			image: <ShoppingCartIcon />,
			label: "Sale",
		},
		from: "nftinitcom",
		price: "123",
		to: "nonkosi.joyi",
		date: "2023-11-09",
	},
	{
		user: {
			image: ItemImg,
			label: "#305",
		},
		icon: {
			image: <TransferIcon />,
			label: "Transfer",
		},
		from: "nftinitcom",
		price: "123",
		to: "nonkosi.joyi",
		date: "2023-11-09",
	},
	{
		user: {
			image: ItemImg,
			label: "#305",
		},
		icon: {
			image: <ShoppingCartIcon />,
			label: "Sale",
		},
		from: "nftinitcom",
		price: "123",
		to: "nonkosi.joyi",
		date: "2023-11-09",
	},
	{
		user: {
			image: ItemImg,
			label: "#305",
		},
		icon: {
			image: <TransferIcon />,
			label: "Transfer",
		},
		from: "nftinitcom",
		price: "123",
		to: "nonkosi.joyi",
		date: "2023-11-09",
	},
];
export const collectionActivityData = [
	{
    icon: <TransferIcon />,
		name: "Transfers",
		from: "nftinitcom",
		price: "123 XRP",
		to: "nonkosi.joyi",
		date: "2023-11-09",
	},
	{
    icon: <TransferIcon />,
		name: "Transfers",
		from: "nftinitcom",
		price: "123 XRP",
		to: "nonkosi.joyi",
		date: "2023-11-09",
	},
	{
    icon: <TransferIcon />,
		name: "Transfers",
		from: "nftinitcom",
		price: "123 XRP",
		to: "nonkosi.joyi",
		date: "2023-11-09",
	},
	{
    icon: <TransferIcon />,
		name: "Transfers",
		from: "nftinitcom",
		price: "123 XRP",
		to: "nonkosi.joyi",
		date: "2023-11-09",
	},
	{
    icon: <TransferIcon />,
		name: "Transfers",
		from: "nftinitcom",
		price: "123 XRP",
		to: "nonkosi.joyi",
		date: "2023-11-09",
	},
	{
    icon: <TransferIcon />,
		name: "Transfers",
		from: "nftinitcom",
		price: "123 XRP",
		to: "nonkosi.joyi",
		date: "2023-11-09",
	},
	{
    icon: <TransferIcon />,
		name: "Transfers",
		from: "nftinitcom",
		price: "123 XRP",
		to: "nonkosi.joyi",
		date: "2023-11-09",
	},
	{
    icon: <TransferIcon />,
		name: "Transfers",
		from: "nftinitcom",
		price: "123 XRP",
		to: "nonkosi.joyi",
		date: "2023-11-09",
	},
	{
    icon: <TransferIcon />,
		name: "Transfers",
		from: "nftinitcom",
		price: "123 XRP",
		to: "nonkosi.joyi",
		date: "2023-11-09",
	},
	{
    icon: <TransferIcon />,
		name: "Transfers",
		from: "nftinitcom",
		price: "123 XRP",
		to: "nonkosi.joyi",
		date: "2023-11-09",
	},
];
export const userActivityData = [
	{
		user: {
			image: ItemImg,
			label: "#305",
		},
		icon: {
			image: <TransferIcon />,
			label: "Transfer",
		},
		from: "nftinitcom",
		price: "123",
		to: "nonkosi.joyi",
		date: "2023-11-09",
	},
	{
		user: {
			image: ItemImg,
			label: "#305",
		},
		icon: {
			image: <ShoppingCartIcon />,
			label: "Sale",
		},
		from: "nftinitcom",
		price: "123",
		to: "nonkosi.joyi",
		date: "2023-11-09",
	},
	{
		user: {
			image: ItemImg,
			label: "#305",
		},
		icon: {
			image: <TransferIcon />,
			label: "Transfer",
		},
		from: "nftinitcom",
		price: "123",
		to: "nonkosi.joyi",
		date: "2023-11-09",
	},
	{
		user: {
			image: ItemImg,
			label: "#305",
		},
		icon: {
			image: <ShoppingCartIcon />,
			label: "Sale",
		},
		from: "nftinitcom",
		price: "123",
		to: "nonkosi.joyi",
		date: "2023-11-09",
	},
	{
		user: {
			image: ItemImg,
			label: "#305",
		},
		icon: {
			image: <TransferIcon />,
			label: "Transfer",
		},
		from: "nftinitcom",
		price: "123",
		to: "nonkosi.joyi",
		date: "2023-11-09",
	},
	{
		user: {
			image: ItemImg,
			label: "#305",
		},
		icon: {
			image: <TransferIcon />,
			label: "Transfer",
		},
		from: "nftinitcom",
		price: "123",
		to: "nonkosi.joyi",
		date: "2023-11-09",
	},
	{
		user: {
			image: ItemImg,
			label: "#305",
		},
		icon: {
			image: <ShoppingCartIcon />,
			label: "Sale",
		},
		from: "nftinitcom",
		price: "123",
		to: "nonkosi.joyi",
		date: "2023-11-09",
	},
	{
		user: {
			image: ItemImg,
			label: "#305",
		},
		icon: {
			image: <TransferIcon />,
			label: "Transfer",
		},
		from: "nftinitcom",
		price: "123",
		to: "nonkosi.joyi",
		date: "2023-11-09",
	},
	{
		user: {
			image: ItemImg,
			label: "#305",
		},
		icon: {
			image: <ShoppingCartIcon />,
			label: "Sale",
		},
		from: "nftinitcom",
		price: "123",
		to: "nonkosi.joyi",
		date: "2023-11-09",
	},
	{
		user: {
			image: ItemImg,
			label: "#305",
		},
		icon: {
			image: <TransferIcon />,
			label: "Transfer",
		},
		from: "nftinitcom",
		price: "123",
		to: "nonkosi.joyi",
		date: "2023-11-09",
	},
];
export const collectionsTableData = [
	{
		user: {
			image: ItemImg,
			label: "#305",
		},
		icon: {
			image: <ShoppingCartIcon />,
			label: "Sale",
		},
		from: "nftinitcom",
		price: "123",
		to: "nonkosi.joyi",
		date: "2023-11-09",
	},
	{
		user: {
			image: ItemImg,
			label: "#305",
		},
		icon: {
			image: <ShoppingCartIcon />,
			label: "Sale",
		},
		from: "nftinitcom",
		price: "123",
		to: "nonkosi.joyi",
		date: "2023-11-09",
	},
	{
		user: {
			image: ItemImg,
			label: "#305",
		},
		icon: {
			image: <ShoppingCartIcon />,
			label: "Sale",
		},
		from: "nftinitcom",
		price: "123",
		to: "nonkosi.joyi",
		date: "2023-11-09",
	},
	{
		user: {
			image: ItemImg,
			label: "#305",
		},
		icon: {
			image: <ShoppingCartIcon />,
			label: "Sale",
		},
		from: "nftinitcom",
		price: "123",
		to: "nonkosi.joyi",
		date: "2023-11-09",
	},
	{
		user: {
			image: ItemImg,
			label: "#305",
		},
		icon: {
			image: <ShoppingCartIcon />,
			label: "Sale",
		},
		from: "nftinitcom",
		price: "123",
		to: "nonkosi.joyi",
		date: "2023-11-09",
	},
];
export const offersData = [
	{
		user: {
			image: ItemImg,
			label: "#333",
		},
		price: "1000 XRP",
		to: "nftinitcom",
		currency: "XRP",
		expiration: "7 min",
		from: "nftinitcom",
	},
	{
		user: {
			image: ItemImg,
			label: "#333",
		},
		price: "1000 XRP",
		to: "nftinitcom",
		expiration: "7 min",
		from: "nftinitcom",
	},
	{
		user: {
			image: ItemImg,
			label: "#333",
		},
		price: "1000 XRP",
		to: "nftinitcom",
		expiration: "7 min",
		from: "nftinitcom",
	},
	{
		user: {
			image: ItemImg,
			label: "#333",
		},
		price: "1000 XRP",
		to: "nftinitcom",
		expiration: "7 min",
		from: "nftinitcom",
	},
	{
		user: {
			image: ItemImg,
			label: "#333",
		},
		price: "1000 XRP",
		to: "nftinitcom",
		expiration: "7 min",
		from: "nftinitcom",
	},
];
export const collectionBigsData = [
	{
    
		name: "#1234",
		price: "1000 XRP",
		to: "nftinitcom",
		from: "nftinitcom",
	},
	{
		
		name: "#333",
		price: "1000 XRP",
		to: "nftinitcom",
		expiration: "7 min",
		from: "nftinitcom",
	},
	{
		
		name: "#333",
		price: "1000 XRP",
		to: "nftinitcom",
		expiration: "7 min",
		from: "nftinitcom",
	},
	{
		
		name: "#333",
		price: "1000 XRP",
		to: "nftinitcom",
		expiration: "7 min",
		from: "nftinitcom",
	},
	{
		
		name: "#333",
		price: "1000 XRP",
		to: "nftinitcom",
		expiration: "7 min",
		from: "nftinitcom",
	},
];
export const offersMadeData = [
	{
		user: {
			image: ItemImg,
			label: "#333",
		},
		price: "1000 XRP",
		expiration: "7 min",
		from: "nftinitcom",
		button: "Cancel",
	},
	{
		user: {
			image: ItemImg,
			label: "#333",
		},
		price: "1000 XRP",
		expiration: "7 min",
		from: "nftinitcom",
		button: "Cancel",
	},
];
export const transfersData = [
	{
		user: {
			image: ItemImg,
			label: "#333",
		},
		price: "Incomming",
		from: "nftinitcom",
		expiration: "",
		button: "Claim NFT",
	},
	{
		user: {
			image: ItemImg,
			label: "#333",
		},
		price: "Outgoing",
		from: "nftinitcom",
		expiration: "",
		button: "Cancel",
	},
];
