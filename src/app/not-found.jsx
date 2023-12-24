"use client"
import { Box, Container, Typography, styled } from "@mui/material";

const Wrapper = styled(Box)(({ theme: { palette } }) => ({
  background: palette.common.white,
}));
const StyledContainer = styled(Container)(({ theme: { palette } }) => ({
  backgroundImage: `url('${"/images/404-img.png"}')`,
  backgroundSize: "contain",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  height: "100vh",
}));
const ContentWrappper = styled(Box)(({ theme: { breakpoints } }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "start",
  justifyContent: "center",
  height: "100%",
  maxHeight: "400px",
  [breakpoints.down("md")]: {
    maxHeight: "250px",
  },
}));

const StyledTitle = styled(Typography)(({ theme: { palette } }) => ({
  color: palette.common.black,
  fontWeight: 800,
}));

const StyledSubTitle = styled(Typography)(({ theme: { palette } }) => ({
  color: palette.common.black,
  fontWeight: 800,
}));

const ErrorTypo = styled(Typography)(({ theme: { palette } }) => ({
  color: palette.mode === "light" ? palette.grey[800] : palette.gray[100],
}));

const NotFound = () => {
  return (
    <Wrapper>
      <StyledContainer>
        <ContentWrappper>
          <StyledTitle variant="h1">Oops!</StyledTitle>
          <StyledSubTitle variant="h4">
            We can’t seem to find the page you’re looking for.
          </StyledSubTitle>
          <ErrorTypo variant="body1">Error code: 404</ErrorTypo>
        </ContentWrappper>
      </StyledContainer>
    </Wrapper>
  );
};

export default NotFound;
