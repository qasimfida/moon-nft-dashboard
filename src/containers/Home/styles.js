import { stringToBoolean } from "@/helpers";
import { Box, Button, Typography, styled } from "@mui/material";
import Image from "next/image";

export const DaysButton = styled(Button)(({ theme: { palette, spacing }, active }) => ({
    backgroundColor: stringToBoolean(active) ? palette.primary.light : palette.common.white,
    width: "100%",
    maxWidth: "200px !important",
    height: 36,
    flexWrap:"nowrap",
    textWrap: "nowrap",
    padding: spacing(1.2, 3.7),
    fontSize: 12,
    fontWeight: 700,
    boxShadow: "none",
    color: stringToBoolean(active) ? palette.primary.main : palette.common.black,
    border: `1px solid ${stringToBoolean(active) ? "transparent" : palette.grey[800]}`,
    minWidth: 'max-content',
    "&:hover": {
      color: palette.primary.dark,
      border: `1px solid ${palette.primary.light}`,
      backgroundColor: palette.primary.light,
      boxShadow: "none",
    },
  }));

  export const CarouselWrapper = styled('div')(
    ({ theme: { palette, breakpoints, spacing }, bg }) => ({
      background: bg ? bg : palette.grey[400],
      padding: bg ? spacing(0) : spacing(7, 0),
      margin:  bg ? spacing(0) : spacing(7, 0),
      "&.m_0": {
        margin: spacing(0),
        marginTop: spacing(6.6),
      },
      "&.MuiContainer-root": {
        height: "100%",
      },
      [breakpoints.down("md")]: {
        padding: "28px 0",
        margin: "16px 0",
      },
    })
  );
  export const RecommendedCollection = styled(Typography)(
    ({ theme: { palette, breakpoints, spacing } }) => ({
      fontWeight: 800,
      paddingLeft: spacing(1),
      paddingBottom: spacing(4.6),
      color: palette.text.primary,
      textAlign: "start",
      [breakpoints.down("md")]: {
        paddingBottom: spacing(2.5),
        textAlign: "left",
        paddingLeft: spacing(0),
      },
    })
  );
  export const CollectionItem = styled(Typography)(
    ({ theme: { palette, breakpoints } }) => ({
      marginLeft: 3,
      color: palette.text.disabled,
  
      [breakpoints.down("md")]: {},
    })
  );
  
  export const ExpandAllButton = styled(Button)(({ theme: { breakpoints } }) => ({
    width: "133px",
    height: "46px",
    [breakpoints.down("sm")]: {
      display: "none",
    },
  }));
  export const IconsWrapper = styled(Box)(({ theme: { spacing } }) => ({
    display: "flex",
    gap: spacing(1),
  }));
  export const IconWrapper = styled(Box)(({ theme: { palette, spacing } }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    width: "46px",
    height: "46px",
    borderRadius: "50%",
    border: `1px solid ${palette.grey[700]}`,
    padding: spacing(2),
    svg: {
      fontSize: 20,
      color: palette.common.black,
    },
  }));
  
  export const RecommendedCollections = styled(Box)(
    ({ theme: { palette, breakpoints } }) => ({
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      gap: 30,
      padding: "0 20px",
      width: "100%",
      height: 512,
      backgroundColor: "pink",
      "&& > div:nth-child(2)": {
        display: "flex",
        gap: 6,
      },
    })
  );
  
  export const CollectionCard = styled(Box)(
    ({ theme: { palette, breakpoints } }) => ({
      padding: 24,
      borderRadius: 8,
      width: 410,
      height: 324,
      backgroundColor: palette.common.white,
      "&& > div:nth-child(1)": {
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
      },
      "&& > div:nth-child(1) > div": {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: 208,
      },
      "&& > div:nth-child(1) > img": {
        width: "241px !important",
        height: "208px !important",
      },
      "&& > div:nth-child(1) > div > img": {
        width: "109px !important",
        height: "98px !important",
      },
      "&& > h2": {
        color: palette.text.primary,
        fontSize: "18px",
        fontStyle: "normal",
        fontWeight: 800,
        lineHeight: "24px",
        marginTop: 22,
        marginLeft: 8,
      },
      "&& > h3": {
        color: palette.text.primary,
        fontSize: "14px",
        fontStyle: "normal",
        fontWeight: 400,
        lineHeight: "21px",
        marginLeft: 8,
        "& > span": {
          color: "red",
          fontSize: "14px",
          fontStyle: "normal",
          fontWeight: 400,
          lineHeight: "21px",
        },
      },
    })
  );
  
  export const Collections = styled("div")(({ theme: { breakpoints } }) => ({
    position: "relative",
    ".prev": {
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
      right: "100%",
      [breakpoints.down("md")]: {
        display: "none",
      },
    },
    ".next": {
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
      left: "100%",
      [breakpoints.down("md")]: {
        display: "none",
      },
    },
  }));
  export const Thumbnail = styled("div")(({ theme }) => ({
    position: "relative",
    overflow: "hidden",
    borderRadius: "10px",
    gridColumn: 1,
    gridRow: "1 / span 2",
    width: "100%",
    paddingTop: "100%",
  }));
  export const Tile = styled("div")(({ theme }) => ({
    position: "relative",
    overflow: "hidden",
    borderRadius: "10px",
    width: "100%",
    paddingTop: "50%",
  }));
  export const NextImage = styled(Image)({
    borderRadius: "10px",
  });
  export const CarouselContentContainer = styled(Box)(
    ({ theme: { palette, breakpoints, spacing } }) => ({
      width: "100%",
      height: "100%",
      display: "flex",
      padding: spacing(1.5),
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "start",
    })
  );
  
export const MainBoxContainer = styled(Box)(
    ({ theme: { palette, breakpoints, spacing } }) => ({
      height: "auto",
      width: "100%",
      margin: "0 auto",
      backgroundColor: palette.mode === "light" ? "white" : "#393D3B",
      boxShadow:
        palette.mode === "light"
          ? "0px 3px 4px 0px rgba(153, 155, 168, 0.25)"
          : "none",
      borderRadius: 15,
      padding: spacing(3),
      cursor: 'pointer'
    })
  );
  
  export const CollectionInnerContainer = styled(Box)(
    ({ theme: { palette, breakpoints }, item }) => ({
      flex: 1,
      display: "flex",
      flexDirection: "row",
      [breakpoints.down("md")]: {},
    })
  );
  
  export const ImagesContainer = styled(Box)(
    ({ theme: { palette, breakpoints }, item }) => ({
      width: "100%",
      display: "grid",
      gridTemplateColumns: "2fr 1fr",
      gap: "12px",
    })
  );
  
  export const TextContainer = styled(Box)(
    ({ theme: { palette, breakpoints }, item }) => ({
      marginTop: "22px",
    })
  );
  
  export const CollectionTitle = styled(Typography)(
    ({ theme: { palette, breakpoints }, item }) => ({
      fontSize: "18px",
      fontWeight: 800,
      color: palette.text.primary,
  
      [breakpoints.down("md")]: {},
    })
  );
  export const CollectionItemBox = styled(Box)(
    ({ theme: { palette, breakpoints }, item }) => ({
      flexDirection: "row",
      display: "flex",
      height: 20,
      alignItems: "center",
  
      [breakpoints.down("md")]: {},
    })
  );
  export const CollectionItemNumber = styled('div')(
    ({ theme: { palette, breakpoints }, item }) => ({
      fontSize: "14px",
      fontWeight: 700,
      color: palette.text.primary,
  
      [breakpoints.down("md")]: {},
    })
  );
  
  export const ActiveMintHeader = styled(Box)(({ theme: { palette } }) => ({
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    alignItems: "center",
    h6: {
      fontWeight: 800,
      color: palette.common.black,
    },
  }));
  export const SlidersIcons = styled(Box)(({ theme: { spacing } }) => ({
    display: "flex",
    gap: spacing(1),
  }));


  export const MintGrid = styled(Box)(({ theme: { breakpoints, spacing } }) => ({
    margin: "40px -12px 0 -12px",
    "&.m-0": {
      marginTop: 0,
    },
    "&.mb-5": {
      marginBottom: spacing(5),
      [breakpoints.down("md")]: {
        marginBottom: spacing(3),
      },
    },
  }));

  export const ServicesTitle = styled(Typography)(
    ({ theme: { palette, breakpoints, spacing } }) => ({
      fontWeight: 800,
      paddingBottom: spacing(4.6),
      color: palette.text.primary,
      textAlign: "center",
      [breakpoints.down("md")]: {
        paddingBottom: spacing(2.5),
      },
    })
  );
  