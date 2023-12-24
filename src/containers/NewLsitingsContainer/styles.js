import { Box, Button, Drawer, Grid, Modal, Typography, alpha, styled } from "@mui/material";
import { DatePicker, TimePicker } from "@mui/x-date-pickers";
export const Wrapper = styled("div")(({theme:{spacing,breakpoints, palette}})=>({
    position: 'relative',
    overflow: 'auto',
    maxHeight: '100vh',
    width: '100%',
    display: 'flex',
    margin: spacing(7, 'auto'),
    padding: spacing(0, 7),
    "& .mt__34":{
        marginTop:spacing(4.3),
    },
    'textarea': {
        fontFamily: "inherit"
    },
    "input::placeholder, textarea::placeholder": {
        // color: `red !important`,
        color: `${palette.grey[800]} !important`,
        fontSize: '14px !important',
        fontWeight: '700 !important',
        opacity: 1
    },
    ".p-5": {
        padding: spacing(2.5)
    },
    ".input-p-5 input": {
        padding: spacing(2.5),
    },
    ".input-p-5 .MuiInputBase-root": {
        height: 48,
    },
    "&::-webkit-scrollbar" : {
        width: "0",
        background: "transparent" /* Hide scrollbar track in Webkit browsers (Chrome, Safari, etc.) */
      }
}) )
export const TitleTypo = styled(Typography)(({theme:{palette}})=>({
    fontWeight:800,
    color:palette.common.black,
}) )
export const SelectItemBox = styled(Box)(({theme:{spacing}})=>({
    display:"flex",
    flexWrap:"wrap",
    gap:spacing(3)
}) )
export const SubTitleTypo = styled(Typography)(({theme:{palette,spacing, breakpoints}})=>({
    fontWeight:800,
    color:palette.common.black,
    marginBottom:spacing(2),
    "&.mb__0":{
        marginBottom:spacing(0),
    },
    [breakpoints.down('md')]:{
        marginBottom:spacing(0),
        fontSize: '28px',
        lineHeight: "normal",
        textAlign: "center"
    }
}) )
export const Desc = styled(Typography)(({theme:{palette,spacing}})=>({
    color:palette.grey[800],
    marginTop:spacing(1),
    textAlign: 'center'
}) )
export const Title = styled('div')(({theme:{palette,spacing}})=>({
    color:palette.grey[800],
    marginBottom:spacing(2.4),
    textAlign: 'center'
}) )
export const ItemBox = styled(Box)(({theme:{palette,spacing, breakpoints}})=>({
    display:"flex",
    alignItems:"center",
    justifyContent: "center",
    gap:spacing(1.5),
    padding:spacing(1.5),
    width:"calc(50% - 12px)",
    maxWidth:302,
    border:`1px solid ${palette.grey[700]}`,
    borderRadius:10,
    cursor:"pointer",
    "&.item.active": {
        border:`1px solid ${palette.primary.main}`,
        boxShadow:" 0px 3px 4px 0px rgba(153, 155, 168, 0.25)",
        [breakpoints.down('md')]:{
            border:`1px solid ${palette.grey[700]}`,
        }
      },
      "& button": {
            margin: "0 auto",
            display: "block",
            width: "98px"
      },
    [breakpoints.down('md')]:{
        width: '100%',
        padding: spacing(3),
        maxWidth: "calc(100% - 28px)",
        margin: spacing(1.6),
    }
}) )
export const ItemImage = styled(Box)(({theme:{ breakpoints }})=>({
    display:"flex",
    alignItems:"center",
    " & img": {
        width: "48px",
        height: "48px",
        objectFit: "cover"
    },
    [breakpoints.down('md')]:{
        " & img": {
            width: "100%",
            height: "auto",
        }
    }
}) )
export const BoxTypo = styled(Typography)(({theme:{palette,spacing, breakpoints}})=>({
    fontWeight:700,
    color:palette.common.black,
    [breakpoints.down('md')]:{
        textAlign: 'center',
        fontSize: "18px",
        lineHeight: "24px",
        margin: spacing(3, 'auto', 2, 'auto')
    }
}) )
export const ProjectDetailsBox = styled("div")(({theme:{breakpoints,spacing}})=>({
    marginTop:spacing(5),
    maxWidth:628,
    display:"flex",
    flexDirection:"column",
    width:"100%",
    [breakpoints.down('md')]:{
        marginTop:spacing(0),
    }
}) )
export const Label = styled(Typography)(({theme:{palette,spacing}})=>({
    marginTop:spacing(2),
    marginBottom:spacing(1),
    fontWeight:500,
    color:palette.common.black,
    display:"inline-block",
    "&.mb__5":{
        marginTop:spacing(0),
        marginBottom:spacing(.6),
    }
}) )
export const DropdownWrapper = styled(Box)(({theme:{palette,spacing}})=>({
    width:"100%",
    maxWidth:360,
    minHeight:48
}) )
export const BlockChainGrid = styled(Grid)(({theme:{palette,spacing}})=>({
    display: 'flex',
    justifyContent: 'flex-end'
}) )
export const BlockchainWrapper = styled(Box)(({theme:{spacing,palette}})=>({
    width:"100%",
    maxWidth:494,
    marginTop:spacing(7),
    paddingTop:spacing(3.8),
    paddingBottom:spacing(5.3),
    paddingLeft:spacing(5),
    paddingRight:spacing(4),
    boxShadow:" 0px 20px 24px 0px rgba(153, 155, 168, 0.18)",
    position: 'sticky',
    top: '100px',
    right: '100px',
    top: '50px',
    height: 'fit-content',
    borderRadius:14,
    background: palette.common.white
}) )
export const BlockchainBox = styled(Box)(({theme:{palette,spacing}})=>({
    display:"flex",
    flexWrap:"wrap",
    gap:spacing(1.5)
}) )
export const BlockChainMainBox = styled(Box)(({theme:{palette,spacing}})=>({
    width:"100%",
    maxWidth:202,
}) )
export const BlockChainItem = styled(Box)(({theme:{palette,spacing}, status})=>({
    display:"flex",
    justifyContent:"space-between",
    alignItems:"center",
    width:"100%",
    height:34,
    flexWrap:"nowrap",
    borderRadius:24,
    border:`1px solid ${status === "complete" ? alpha(palette.grey[700], 0.6) :palette.error.light}`,
    padding:spacing(1,0),
    paddingLeft:spacing(2.5),
    paddingRight:spacing(2)
}) )
export const BlockChainTitle = styled(Typography)(({theme:{palette,spacing}})=>({
   color:palette.common.black,
   fontWeight:700,
}) )
export const BlockChainIcon = styled(Box)(({theme:{palette,spacing}})=>({
    display: 'flex'
}) )
export const BodyContent = styled(Box)(({theme:{palette,spacing}})=>({
    display:"flex",
    flexDirection:"column",
    marginTop:spacing(4),
    width:"100%",
    maxWidth:628,
}) )
export const ProjectMedia = styled(Box)(({theme:{palette,spacing}})=>({
    display:"flex",
    flexDirection:"column",
    marginTop:spacing(4),
    marginBottom:spacing(2),
    width:"100%",
    maxWidth:628,
}) )
export const NFTPreview = styled(Box)(({theme:{palette,spacing}})=>({
    display:"flex",
    flexDirection:"column",
    width:"100%",
    maxWidth:516,
}) )
export const NFTPreviewBox = styled(Box)(({theme:{breakpoints,spacing}})=>({
    display:"flex",
    gap:spacing(2),
    width:"100%",
   "&.mt__16":{
        marginTop:spacing(1)
    },
    [breakpoints.down("md")]:{
        flexWrap:"wrap",
        maxWidth: 280,
        paddingTop:  '20px',
        margin:  '0 auto'

    }
}) )
export const NFTPreviewBox1 = styled(Box)(({theme:{palette,breakpoints}})=>({
    width:"100%",
    "&.nft__Box":{
        width:"100%",
        maxWidth:250,
        [breakpoints.down("sm")]:{
            maxWidth:"100%",
        }
    }
}) )
export const NFTPreviewBox2 = styled(Box)(({theme:{palette,spacing}})=>({
    width:"100%",
}) )
export const TextareaWrapper = styled(Box)(({theme:{palette,spacing}})=>({
    marginTop:spacing(1)
}) )
export const Ziptext = styled(Typography)(({theme:{palette,spacing}})=>({
    marginTop:spacing(2),
    marginBottom:spacing(2),
    color:palette.grey[800]
}) )
export const MintsDetails = styled(Box)(({theme:{breakpoints,spacing}})=>({
    display:"flex",
    flexDirection:"column",
    marginTop:spacing(4),
    width:"100%",
    maxWidth:550,
    [breakpoints.down("sm")]:{
        maxWidth:"100%",
    }
}) )
export const PlannedInput = styled(Box)(({theme:{breakpoints,spacing}})=>({
    width: "50%",
    "& .random__btn":{
        width:"100%",
        maxWidth:131,
    },
    "&.royalty":{
        width:"100%",
    },
   [breakpoints.down("md")]:{
        width:"100%",
   }
}) )
export const PlannedMint = styled(Box)(({theme:{breakpoints,spacing, palette}})=>({
    display:"flex",
    flexDireaction:"row",
    gap:spacing(2),
    width:"100%",
   "& .MuiFormControl-root":{
        width:"100%",
        "& svg": {
            fill: palette.grey[800]
           }
   },
    "& .mint__type":{
        flex:1,
   },
   "&.mint__type__Wrapper":{
    [breakpoints.down("sm")]:{
        flexDirection:"column",
   },
   
},
   [breakpoints.down("sm")]:{
    flexWrap:"wrap"
   }
}) )
export const RevealWrapper = styled(Box)(({theme:{palette,spacing}})=>({
    display:"flex",
    gap:spacing(1)
}) )
export const RevealButton = styled(Button)(({theme:{palette,spacing}})=>({
    backgroundColor:palette.primary.light,
    color:palette.primary.main,
    width:"100%",
    maxWidth:131,
    fontWeight:700,
    "&:hover":{
        backgroundColor:palette.primary.main,
        color:"#fff",
    }
}) )
export const FinalizeWrapper = styled(Box)(({theme:{palette,spacing}})=>({
   display:"flex",
   gap:spacing(2.8),
   "& .publish":{
        width:"100%",
        maxWidth:193,
        height:46,
   }
}) )
export const DiscardButton = styled(Button)(({theme:{palette,breakpoints}})=>({
    backgroundColor:palette.primary.light,
    color:palette.primary.main,
    width:"100%",
    maxWidth:193,
    minHeight:46,
    fontWeight:700,
    "&:hover":{
        backgroundColor:palette.primary.main,
        color:"#fff",
    },
    [breakpoints.down('md')]:{
        maxWidth: '100%'
    }
}) )
export const MintPriceWrapper = styled(Box)(({theme:{palette,breakpoints}})=>({
    minHeight:44,
    "& .MuiInputBase-root":{
        height: "44px"
    },
    [breakpoints.down("sm")]:{
        width:"100%",
    }
}) )
export const Relative = styled(Box)(({theme:{palette,breakpoints}})=>({
    position: 'relative',
    height: 'auto',
    overflow: 'auto'
}) )

// MOBILE MODAL

export const StyledModal = styled(Drawer)(({ theme: { palette } }) => ({
    "& .MuiBackdrop-root .MuiModal-backdrop": {
      backgroundColor: "red",
    },
}));
export const ModalWrapper = styled(Box)(({ theme: { palette, spacing, breakpoints } }) => ({
    position: "relative",
    width: "100%",
    maxWidth: "calc(100% - 2px)",
    boxShadow: 24,
    borderRadius: "16px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    gap: spacing(5.5),
    padding: spacing(3),
    background: palette.common.white,
    "& .mt__34":{
        marginTop:spacing(4.3),
    },
    'textarea': {
        fontFamily: "inherit"
    },
    "input::placeholder, textarea::placeholder": {
        color: palette.grey[800],
        opacity: 1
    },
    ".p-5": {
        padding: spacing(2.5)
    },
    ".input-p-5 input": {
        padding: spacing(2.5),
    },
    ".input-p-5 .MuiInputBase-root": {
        height: 48,
    }
  }));
  export const CrossIconWrapper = styled(Box)(({ theme: { palette } }) => ({
    position: "absolute",
    right: 24,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    width: "32px",
    height: "32px",
    borderRadius: "50%",
    border: `1px solid ${palette.gray[300]}`,
    "& svg": {
      fontSize: "1.4rem",
      color: palette.common.black,
    },
  }));

  export const Header = styled(Button)(({theme: {palette}})=>({
    width: '92px',
    marginLeft: 'auto',
    border: `1px solid ${palette.common.black}`,
    color: palette.common.black
  }))
  export const Footer = styled(Button)(({theme})=>({
    display: 'flex',
    width: "100%"
  }))
  export const Content = styled('div')(({theme})=>({
  }))
  export const Finalize = styled('div')(({theme: {spacing}})=>({
    display: 'flex',
    gap: spacing(2.5)
  }))

  export const Time = styled(TimePicker)(({theme: { spacing}})=>({
      ".MuiOutlinedInput-root":{
        borderColor: "",
        borderRadius: spacing(3),
        height: '46px',
        boxSizing: 'border-box',

    }
  }))
  export const Date = styled(DatePicker)(({theme: { spacing}})=>({
      ".MuiOutlinedInput-root":{
        borderColor: "",
        borderRadius: spacing(3),
        height: '46px',
        boxSizing: 'border-box',

    }
  }))