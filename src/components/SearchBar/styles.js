"use client";

import { Box, Typography, styled } from "@mui/material";
import { Search } from "@mui/icons-material";

export const SearchMainBox = styled(Box)(({ theme: { breakpoints }, width }) => ({
	position: "relative",
	display: "flex",
	alignItems: "center",
	width: "100%",
	height: "40px",
	borderRadius: 23,
	gap: "10px",
}));

export const TotalLengthBox = styled(Box)(({ theme: { palette } }) => ({
	padding: "5px 10px",
	position: "absolute",
	width: "100%",
	maxWidth: "88px",
	right: "15px",
	borderRadius: 23,
	fontSize: 12,
	fontSize: "10px",
	fontWeight: 700,
	gap: 8,
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	cursor: "pointer",
	border: palette.mode === "light" ? "1px solid #CFDBD5" : "1px solid #EBF0F01A",
	color: palette.common.black,
}));

export const LengthTextBox = styled(Box)(({ theme: { palette } }) => ({
	height: "70%",
	borderRadius: "4px",
	fontSize: "10px",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	svg: {
		fontSize: 16,
	},
}));

export const ResultsMainBox = styled(Box)(({ theme: { palette, breakpoints } }) => ({
	position: "absolute",
	width: "100%",
	minWidth: "300px",
	padding: "20px 24px",
	paddingBottom: "25px",
	minHeight: "50px",
	marginTop: "10px",
	borderRadius: "12px",
	display: "flex",
	flexDirection: "column",
	gap: "20px",
	backgroundColor: [palette.common.white],
	color: palette.mode === "light" ? "#000" : "#fff",
	zIndex: 999,
	boxShadow: "0px 20px 24px 0px rgba(153, 155, 168, 0.18)",
}));
export const MobileResultsMainBox = styled(Box)(({ theme: { palette, breakpoints } }) => ({
	position: "fixed",
	width: "100%",
	minWidth: "300px",
	padding: "20px 24px",
	paddingBottom: "25px",
	minHeight: "50px",
	marginTop: "10px",
	borderRadius: "12px",
	display: "flex",
	left: "50%",
	flexDirection: "column",
	transform: "translateX(-50%)",
	gap: "20px",
	backgroundColor: [palette.common.white],
	color: palette.mode === "light" ? "#000" : "#fff",
	zIndex: 999,
	boxShadow: "0px 20px 24px 0px rgba(153, 155, 168, 0.18)",
}));

export const SearchTypeTypography = styled(Typography)(({ theme }) => ({
	width: "100%",
	fontSize: "14px",
}));

export const CollectionMainBox = styled(Box)(({ theme }) => ({
	padding: "12px 0px",
	display: "flex",
	gap: "10px",
	justifyContent: "space-between",
}));

export const CollectionBox = styled(Box)(({ theme }) => ({
	display: "flex",
	gap: "3px",
	alignItems: "center",
}));

export const CollectionNameTypography = styled(Typography)(({ theme }) => ({
	fontSize: "14px",
	fontWeight: "700",
	marginLeft: "10px",
}));

export const CollectionCountBox = styled(Box)(({ theme }) => ({
	display: "flex",
	gap: "4px",
	alignItems: "center",
}));

export const CollectionCountTypography = styled(Typography)(({ theme }) => ({
	fontSize: "14px",
	fontWeight: "400",
	marginLeft: "10px",
}));

export const SeeAllMainBox = styled(Box)(({ theme: { palette } }) => ({
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	backgroundColor: palette.mode === "dark" ? "#171818" : "#EBF0F0",
	padding: "9px 18px",
	borderRadius: "30px",
	width: "fit-content",
	cursor: "pointer",
	maxWidth: "139px",
}));

export const SeeAllTypography = styled(Typography)(({ theme: { palette } }) => ({
	fontSize: "12px",
	fontWeight: "700",
	color: palette.mode === "dark" ? "white" : palette.grey[800],
}));
export const Input = styled("input")(({ theme: { palette } }) => ({
	padding: "0 42px",
	borderRadius: "24px",
	background: palette.mode === "light" ? "#EBF0F080" : "#EBF0F01A",
	color: palette.mode === "light" ? "#5D5D5B" : "#fff",
	border: "0",
	outline: "none",
	height: "40px",
	width: "100%",
	"::placeholder": {
		color: palette.grey[800],
	},
}));
export const SearchIcon = styled(Search)(({ theme: { palette } }) => ({
	position: "absolute",
	left: "15px",
	color: palette.common.black,
	fontSize: "20px",
	fontWeight: 400,
	lineHeight: "21px",
	height: "18px",
	width: "18px",
}));
export const SearchWrapper = styled(Box)(({ theme: { palette } }) => ({
	position: "relative",
	width: "100%",
	maxWidth: "519px",
}));
export const MobileSearchWrapper = styled(Box)(({ theme: { breakpoints, spacing } }) => ({
	position: "relative",
	width: "100%",
	width: "40px",
	display: "none",
	[breakpoints.down("md")]: {
		display: "block",
	},
	".mobile-clear": {
		right: spacing(4),
		marginTop: 6,
	},
}));
