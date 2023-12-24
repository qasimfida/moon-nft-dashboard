"use client";
import { pages } from "@/constants";
import { changeThemeMode } from "@/lib/slices/theme/themeSlice";
import { useAppDispatch, useAppSelector } from "@/lib/store";
import Avatar from "@mui/material/Avatar";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import SearchBar from "../SearchBar";
import {
	AvatarIconButton,
	Header,
	LinksMainBox,
	MobileIconsBox,
	SearchWrapper,
	SidebarLinks,
	SmallScreenLogo,
	StyledAppBar,
	StyledBox2,
	StyledDrawer,
	StyledIconBox,
	StyledIconButton,
	StyledLink,
	StyledLogoLink,
	StyledMenuItem,
	StyledToolbar,
	ThemeMode,
	Title,
	TokenMainBox,
	WalletButton,
	LayoutWrapper,
	Heading,
	LinkItem,
} from "./styles";
import { MenuMobileIcon, MoonIcon, SunIcon } from "../Svgs";
import { Box, Divider, ListItem, Menu, MenuItem } from "@mui/material";
import { useCookies } from "react-cookie";
import Link from "next/link";
import { Logout, Settings, AccountCircle } from "@mui/icons-material";
import { MobileSearchBar } from "../SearchBar/SearchBar";
import useWindowWidth from "@/hooks/useWindowWidth";
import { Tv, ViewStream } from "@mui/icons-material";

export const Layout = ({ hideNavbar = false, children }) => {
	const [isSidebarOpen, setSidebarOpen] = useState(false);
	const [anchorElNav, setAnchorElNav] = useState(null);
	const [tokenVisibility, setTokenVisibility] = useState(false);
	const [cookies, setCookie, removeCookie] = useCookies(["token"]);
	const [xrpAddress, setXrpAddress] = useState(null);
	const [anchorEl, setAnchorEl] = useState(null);

	const themeMode = useAppSelector((state) => state.theme.themeMode);
	const dispatch = useAppDispatch();
	const pathName = usePathname();
	const router = useRouter();

	const handleChangeThemeMode = () => {
		dispatch(changeThemeMode({ themeMode: themeMode === "light" ? "dark" : "light" }));
		// localStorage.setItem("themeMode", themeMode === "light" ? "dark" : "light");
	};

	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};
	const handleSidebarToggle = (value) => {
		setSidebarOpen(!isSidebarOpen);
		router.push(value);
	};

	const open = Boolean(anchorEl);
	const handleClick = (event) => {
		event.stopPropagation();
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		event.stopPropagation();
		setSidebarOpen(false);
		setAnchorEl(null);
	};

	const api_url = process.env.NEXT_PUBLIC_BACKEND_URL;
	useEffect(() => {
		const auth = async () => {
			const tok = cookies.token;
			if (tok) {
				const res = await fetch(api_url + "auth/authenticate", {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({ token: tok }),
				});
				const data = await res.json();
				if ("address" in data) {
					localStorage.setItem("address", data.address);
					setXrpAddress(data.address);
					setTokenVisibility(true);
				} else {
					removeCookie("token");
				}
			}
		};

		if (cookies.token) {
			auth();
		}
	}, [api_url, cookies.token, removeCookie]);

	const handleLogout = () => {
		//signout
		removeCookie("token");
		localStorage.removeItem("address");
		setXrpAddress("");
		window.location.reload();
	};
	const handleRedirect = (r) => (e) => {
		handleClose();
		setTimeout(() => {
			router.push(r);
		}, 100);
	};

	return (
		<LayoutWrapper>
			<StyledAppBar>
				<StyledLogoLink href="/">
					<Image src="/images/logo.svg" alt="Logo" layout="fill" draggable={false} />
				</StyledLogoLink>

				<Heading href="dashboard">
					<Tv /> Dahsboard
				</Heading>
				<Heading href="/mints/active">
					<ViewStream /> Featured Collections
				</Heading>
				<LinkItem href="/mints/active">Active mints</LinkItem>
				<LinkItem href="/mints/upcoming">Upcoming mints</LinkItem>
				<LinkItem href="/mints/featured">Featured</LinkItem>
				<Heading href="/collections">
					<Tv />
					Collections
				</Heading>
				<LinkItem href="/collections/2">Add a collection</LinkItem>
			</StyledAppBar>
			<Box width="100%">
				<Header>
					<Link href="?page=signin">
						<WalletButton variant="contained">Connect Wallet</WalletButton>
					</Link>
				</Header>
				{children}
			</Box>
		</LayoutWrapper>
	);
};
