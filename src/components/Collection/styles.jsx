import { Typography, styled } from "@mui/material";

export const Wrapper = styled("div")(({ theme: { palette, spacing } }) => ({
	border: `1px solid rgba(207, 219, 213, 0.60)`,
	borderRadius: "12px",
	width: "100%",
	height: "70px",
	display: "flex",
	alignItems: "center",
	justifyContent: "space-between",
	gap: spacing(2.5),
	padding: spacing(0.5, 2),
}));

export const CollectionWrapper = styled("div")(({ theme: { palette, spacing } }) => ({
	width: "100%",
	display: "flex",
	alignItems: "center",
	gap: spacing(2.5),
}));
export const ActionButtons = styled("div")(({ theme: { palette, spacing } }) => ({
	display: "flex",
	alignItems: "center",
	gap: spacing(2.5),
	padding: spacing(0, 1),
	svg : {
		cursor: "pointer"
	}
}));

export const Text = styled(Typography)`
	font-size: 16px;
	font-style: normal;
	font-weight: 700;
	line-height: 24px;
`;
export const Title = styled(Text)`
	width: 100%;
`;
