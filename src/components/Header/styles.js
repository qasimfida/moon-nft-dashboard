import { Button, Typography, styled } from "@mui/material";
export const Wrapper = styled("div")`
    &.mb-60 {
        margin-bottom: 60px;
    }
    &.mb-14 {
        margin-bottom: 14px;
    }
`;
export const ActionButton = styled(Button)``;
export const Top = styled('div')`
display: flex;
justify-content: space-between;
`;
export const Title = styled(Typography)`
	font-size: 39px;
	font-style: normal;
	font-weight: 800;
	line-height: normal;
    margin-bottom: 20px;
`;
