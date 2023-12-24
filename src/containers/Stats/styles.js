import { Box, styled } from "@mui/material";

export const MainBox = styled(Box)(({ theme }) => ({}));

export const MainSetion = styled(Box)(
  ({ theme: { palette, breakpoints } }) => ({
    display: "flex",
    flexDirection: "column",
    backgroundColor: palette.common.white,
    width: "100%",
  })
);
