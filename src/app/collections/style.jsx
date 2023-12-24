"use client";

import { styled } from "@mui/material";

export const Body = styled("body")(({ theme: { palette, spacing }, hasNav }) => ({
	background: palette.common.white,
}));
export const Wrapper = styled("div")(({ theme: { spacing } }) => ({
	padding: spacing(4.4, 7.4),
}));
