import { colors, createTheme, responsiveFontSizes } from "@mui/material";

export const theme = responsiveFontSizes(createTheme({
    palette: {
        primary: colors.deepPurple,
        text: {
          secondary: '#757575'
        }
    },
    typography: {
      h5: {
        opacity: 0.6,
        fontWeight: 'bold',
        fontSize: '1.35rem'
      },
      h6: {
        fontWeight: 'normal',
        fontSize: '1.1rem'
      }
    }
}), {});
