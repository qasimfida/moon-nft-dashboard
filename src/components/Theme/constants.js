import { Inter } from "next/font/google";
import { createTheme } from "@mui/material/styles";
const inter = Inter({
	weight: ["300", "400", "500", "700", "800"],
	subsets: ["latin"],
	display: "swap",
});

const breakpoints = {
	xs: 0,
	sm: 600,
	md: 900,
	lg: 1280,
	xl: 1600,
};

const common = {
	primary: {
		main: "#7A52F4",
		dark: "#6242c3",
		light: "#e4dcfd",
	},
	secondary: {
		main: "#f4c952",
		light: "#fff5d9",
	},
	error: {
		main: "#F20089",
		light: "#fdd9ed",
	},
	success: {
		main: "#03db80",
		light: "#03db80",
	},
};

export const theme = (mode) =>
	createTheme({
		palette: {
			mode: mode,
			...common,
		},
		components: {
			MuiButton: {
				styleOverrides: {
					root: {
						fontFamily: inter.style.fontFamily,
						borderRadius: "24px",
						fontSize: "14px",
						textWrap: "nowrap",
						textTransform: "unset",
						lineHeight: "21px",
						boxShadow: "none",
            height: '36px'
					},
				},
			},
		},
	});
