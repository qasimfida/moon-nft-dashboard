import { Box, Grid, styled } from "@mui/material";

export const Wrapper = styled(Box)(({ theme: { palette, spacing } }) => ({
  backgroundColor: palette.common.white,
  ".wrapper":{
    padding: spacing(5.5, 0),
    ".service-heading":{
      margin: '0 auto',
      marginBottom: spacing(4),
      maxWidth: '70%',
    },
    ".shadow-light":{
      boxShadow: palette.mode === "light" ? "0px 3px 4px 0px rgba(153, 155, 168, 0.25)": ""
    }
  },
 
}));
export const StyledGrid = styled(Grid)(({ theme: { spacing } }) => ({
  width: "100%",
  boxSizing: "border-box",
}));