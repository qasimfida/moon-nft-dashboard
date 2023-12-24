import React from "react";
import { useTheme } from "@mui/styles";

import { Checkbox as MuiCheckBox, styled } from "@mui/material";

const StyledCheckbox = styled(MuiCheckBox)({
  padding: 0,
});
const sizes = {
  small: 2,
  medium: 2.5,
  large: 3,
};

const CheckBoxOutlineBlankIcon = ({ color, size, ...props }) => {
  const { spacing, palette } = useTheme();
  const s = sizes[size.trim() || "medium"] || sizes["medium"];
  return (
    <svg
      {...props}
      width={spacing(s)}
      height={spacing(s)}
      viewBox="0 0 22 22"
      fill={"none"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="1"
        y="1"
        width="20"
        height="20"
        rx="4"
        stroke={palette.common.black}
        strokeOpacity="0.6"
      />
      <rect
        x="1"
        y="1"
        width="20"
        height="20"
        rx="4"
        stroke={palette.common.black}
        strokeOpacity="0.2"
      />
      <rect
        x="1"
        y="1"
        width="20"
        height="20"
        rx="4"
        stroke={palette.common.black}
        strokeOpacity="0.2"
      />
    </svg>
  );
};

const CheckBoxCheckedIcon = ({ color, size, ...props }) => {
  const { spacing, palette } = useTheme();
  const s = sizes[size.trim() || "medium"] || sizes["medium"];
  return (
    <svg
      {...props}
      width={spacing(s)}
      height={spacing(s)}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="20" height="20" rx="4" fill={palette[color]?.main} />
      <path
        d="M8.6437 13.8429L5.1571 10.3563C4.94763 10.1468 4.94763 9.80718 5.1571 9.59769L5.91567 8.8391C6.12514 8.62961 6.46479 8.62961 6.67426 8.8391L9.023 11.1878L14.0537 6.1571C14.2632 5.94763 14.6029 5.94763 14.8123 6.1571L15.5709 6.91569C15.7804 7.12516 15.7804 7.46479 15.5709 7.67428L9.40229 13.8429C9.1928 14.0524 8.85317 14.0524 8.6437 13.8429Z"
        fill="#EBF0F0"
      />
    </svg>
  );
};

export const Checkbox = ({ color = "primary", size = "medium", ...props }) => {
  return (
    <StyledCheckbox
      icon={<CheckBoxOutlineBlankIcon color={color} size={size} />}
      checkedIcon={<CheckBoxCheckedIcon color={color} size={size} />}
      disableRipple
      {...props}
    />
  );
};
