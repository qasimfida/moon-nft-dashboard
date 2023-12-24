"use client";
import {
	AppBar,
	Box,
	Button,
	Drawer,
	IconButton,
	Menu,
	MenuItem,
	Switch,
	Toolbar,
	Typography,
	styled,
} from "@mui/material";
import Link from "next/link";

export const LayoutWrapper = styled("div")(() => ({
	display: "flex",
}));

export const StyledAppBar = styled("aside")(({ theme: { palette, spacing } }) => ({
	backgroundColor: "#171717",
	width: "304px",
	height: "auto",
	minHeight: "100vh",
	display: "flex",
	flexDirection: "column",
	zIndex: 1000,
	padding: spacing(3, 3, 3, 4),
	boxShadow: "none",
}));

export const Header = styled("div")(() => ({
	height: "76px",
	background: "#FFF",
	boxShadow: "0px 3px 4px 0px rgba(153, 155, 168, 0.25)",
	display: "flex",
	justifyContent: "flex-end",
	alignItems: "center",
	paddingRight: "56px",
	width: "100%",
}));

export const WalletButton = styled(Button)(() => ({
	width: "160px",
}));

export const StyledLogoLink = styled(Link)(({ theme: { palette, breakpoints, spacing } }) => ({
	position: "relative",
	height: "40px",
	width: "40px",
	alignItems: "center",
	borderRadius: "50%",
	marginBottom: spacing(5),
	"& img": {
		width: "100%",
		height: "100%",
		borderRadius: "50%",
	},
	"& :hover": {
		background: "none",
	},
	[breakpoints.down("md")]: {
		display: "none",
	},
}));
export const Heading = styled(Link)(({ theme: { spacing } }) => ({
	fontSize: "16px",
	fontWeight: 700,
	display: "flex",
	alignItems: "center",
	color: "#7F7F7F",
	gap: spacing(1),
	margin: spacing(4, 0, 1),
	"&.active": {
		color: "#fff",
	},
}));
export const LinkItem = styled(Link)(({ theme: { spacing } }) => ({
	fontSize: "16px",
	fontWeight: 400,
	display: "flex",
	alignItems: "center",
	color: "#fff",
	gap: spacing(1),
	margin: spacing(0.5, 0, 0.5, 4),
}));

export const StyledIconBox = styled(Box)(({ theme: { palette, breakpoints, spacing } }) => ({
	flexGrow: 0,
	display: "flex",
	svg: {
		color: palette.primary.main,
		fontSize: "18px",
		cursor: "pointer",
	},
	button: {
		padding: 0,
		paddingRight: spacing(1.4),
	},
	[`@media screen and (min-width: ${breakpoints.values.md}px)`]: {
		display: "none",
	},
}));

export const MobileIconsBox = styled(Box)(({ theme: { breakpoints, spacing } }) => ({
	display: "flex",
	marginLeft: spacing(1.4),
	[`@media screen and (min-width: ${breakpoints.values.md}px)`]: {
		display: "none",
	},
	alignItems: "center",
}));

export const LinksMainBox = styled(Box)(({ theme: { breakpoints, spacing } }) => ({
	display: "flex",
	[`@media screen and (min-width: ${breakpoints.values.md}px)`]: {
		display: "none",
	},
	gap: spacing(3),
}));

export const TokenMainBox = styled(Button)(({ theme: { palette, breakpoints } }) => ({
	padding: "8px 16px",
	width: "160px",
	maxWidth: "160px",
	display: "flex",
	justifyContent: "center",
	backgroundColor: "transparent",
	transition: "background-color 0.3s",
	color: palette.grey[800],
	border: `1px solid ${palette.grey[600]}`,
	fontWeight: 700,
	[breakpoints.down("md")]: {
		"&.hide_mobile": {
			display: "none",
		},
	},
	"&:hover": {
		border: `1px solid ${palette.grey[600]}`,
		background: palette.grey[400],
		color: palette.grey.main,
	},
}));

export const TokenTypography = styled(Typography)(({ theme: { palette, breakpoints } }) => ({
	fontSize: "14px",
	color: palette.primary.dark,
	fontSize: "14px",
}));
export const Title = styled(Typography)(({ theme: { palette, spacing } }) => ({
	color: palette.common.black,
	fontWeight: 800,
	minWidth: "max-content",
	marginLeft: spacing(2),
}));

export const AvatarIconButton = styled(IconButton)(({ theme: { palette, breakpoints } }) => ({
	padding: "0px",
}));

export const StyledLink = styled(Link)(({ theme: { palette } }) => {
	return {
		color: palette.mode === "light" ? "#5D5D5B" : "#FFFFFF80",
		fontWeight: 700,
		"&.active": {
			color: palette.common.black,
		},
	};
});

export const ThemeMode = styled(Box)(({ theme: { palette, breakpoints } }) => {
	return {
		border: `1px solid ${palette.gray[200]}`,
		height: "26px",
		width: "26px",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		borderRadius: "50%",
		"& svg": {
			color: palette.gray[300],
		},
		[breakpoints.down("md")]: {
			margin: "12px auto",
			"&.hide_mobile": {
				display: "none",
			},
		},
	};
});
export const StyledDrawer = styled(Drawer)(({ theme: { palette, spacing } }) => ({
	zIndex: 9999,
	img: {
		marginTop: spacing(4),
	},
	hr: {
		border: `1px solid ${palette.gray[700]}`,
	},
	"& .MuiPaper-root": {
		width: "50%",
	},
}));
export const SmallScreenLogo = styled(Box)(({ theme: { spacing } }) => ({
	marginBottom: spacing(4),
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
}));
export const StyledMenuItem = styled(MenuItem)(({ theme: { palette, spacing } }) => ({
	color: palette.mode === "light" ? "#5D5D5B" : "#FFFFFF80",
	fontWeight: 700,
	margin: spacing(0, 1),
	padding: spacing(1.5, 0),
	textAlign: "center",
	display: "flex",
	justifyContent: "center",
	borderBottom: `1px solid ${palette.gray[700]}`,
	"&.active": {
		color: palette.common.black,
	},
}));
export const SidebarLinks = styled(Box)(({ theme: { palette, spacing } }) => ({
	marginTop: spacing(2),
	width: "100%",
	display: "flex",
	flexDirection: "column",
	"& a": {
		margin: spacing(0, 1),
		marginTop: spacing(0.5),
		boxSizing: "border-box",
		padding: spacing(1.5, 0),
		fontSize: "12px",
		borderRadius: "0",
		textAlign: "center",
		borderBottom: `1px solid ${palette.gray[700]}`,
		"&.active": {
			background: palette.primary.main,
			color: "#fff",
		},
	},
}));
