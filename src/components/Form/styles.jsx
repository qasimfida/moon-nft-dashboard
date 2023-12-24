import { Button, InputBase } from "@mui/material";
import { styled } from "@mui/styles";

export const FromWrapper = styled("div")(({ theme: { palette, spacing } }) => ({
	display: "flex",
	flexDirection: "column",
	gap: spacing(2.5),
}));

export const Group = styled("div")(({ theme: { palette, spacing } }) => ({
	display: "flex",
	flexDirection: "column",
	gap: spacing(2),
}));
export const Label = styled("label")(({ theme: { palette, spacing } }) => ({
	color: "#000",
	fontSize: "18px",
	fontWeight: "500",
	lineHeight: "24px",
}));
export const Input = styled(InputBase)(({ theme: { palette, spacing } }) => ({
	height: 48,
	borderRadius: 10,
	border: "1px solid rgba(207, 219, 213, 0.60)",
	fontSize: "14px",
	fontWeight: 700,
	lineHeight: "21px",
	padding: spacing(0, 2.5),
}));
export const ActionButtons = styled("div")(({ theme: { palette, spacing } }) => ({
	display: "flex",
	alignItems: "center",
	gap: spacing(2.5),
	margin: spacing(3, 0),
}));
export const ActionButton = styled(Button)(({ theme: { palette, spacing } }) => ({
	width: '120px'
}));
