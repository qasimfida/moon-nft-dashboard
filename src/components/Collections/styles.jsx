import { styled } from "@mui/styles";

export const CollectionsWrapper = styled("div")(({ theme: { palette, spacing } }) => ({
	display: "flex",
	flexDirection: "column",
	gap: spacing(2.5),
}));
