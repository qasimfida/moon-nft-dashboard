import { Typography, alpha, styled } from "@mui/material";
import Image from "next/image";

export const ImageUploadContainer = styled("div")(({ theme: { palette } }) => ({
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "8px",
    border: `2px dashed ${palette.mode === "dark" ? alpha(palette.common.gray, 0.2) : alpha(palette.common.gray, 0.6)}`,
    borderRadius: '24px',
    overflow: 'hidden',
    cursor: 'pointer',
    '&:hover .icon': {
        opacity: '1',
    },
    'svg': {
        color: palette.grey[800]
    }
}));

export const ImageContainer = styled('label')({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    position: "relative",
    height: '164px',
    width: '100%',
    cursor: 'pointer',

});

export const ImagePreview = styled(Image)({
    maxWidth: "100%",
    maxHeight: '164px',
    objectFit: "cover",
});

export const ImageInput = styled("input")({
    display: "none",
});
export const Overlay = styled("div")(({ theme: { palette } }) => ({
    opacity: '0',
    background: alpha(palette.common.black, 0.4),
    position: "absolute",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: '0.2s all ease',
    zIndex: '2',
    height: '100%',
    width: '100%',
}));

 export const CrossIconWrapper = styled('div')(({ theme: { palette } }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    width: "32px",
    height: "32px",
    borderRadius: "50%",
    border: `1px solid ${palette.common.white}`,
    "& svg": {
        fontSize: "1.4rem",
        color: `${palette.common.white} !important`,
    },
}));

export const Label = styled(Typography)(({ theme: { palette, spacing } }) => ({
    color: palette.mode === "dark" ? palette.gray[800] : palette.common.black,
    fontWeight: 700,
    marginTop: spacing(1),
    "&.error":{
        textAlign: "center",
        fontSize: "12px",
        color: palette.error.main
    }
}))