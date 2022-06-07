import { colors, createTheme, responsiveFontSizes } from "@mui/material";


function primaryColor(): any {
  const color = process.env.REACT_APP_COLOR as keyof typeof colors;
  return colors[color] || colors.deepPurple;
}

export const theme = responsiveFontSizes(createTheme({
    palette: {
        primary: primaryColor(),
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
