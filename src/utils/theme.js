import { createTheme } from "@mui/material/styles";

// Create a theme instance.
const theme = createTheme({
	palette: {
		type: "dark",
		primary: {
			main: "#ff3d00",
		},
		secondary: {
			main: "#212121",
		},
		info: {
			main: "#2196f3",
		},
		background: {
			default: "#212121",
		},
		text: {
			primary: "#ffffff",
			secondary: "#ffffff",
			disabled: "rgba(255,255,255,0.81)",
		},
		error: {
			main: "#e53935",
		},
		success: {
			main: "#ff3d00",
		},
	},
});

export default theme;