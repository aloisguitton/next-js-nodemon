import {createMuiTheme} from "@material-ui/core/styles";
import {frFR} from "@material-ui/core/locale";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#2B5C70',
        },
        secondary: {
            main: '#82A4B5'
        }
    },
    typography: {
        h1: {
            fontSize: "1.875rem",
            fontWeight: 500
        },
        h2: {
            fontSize: "1.563rem",
            fontWeight: 500
        },
        h3: {
            fontSize: "1.5rem",
            fontWeight: 500
        },
        h4: {
            fontSize: "1.4rem"
        },
        h5: {
            fontSize: "1.3rem"
        },
        h6: {
            fontSize: "1.2rem"
        },
        body1: {
            fontSize: "1rem",
            fontWeight: 300,
            fontFamily: "'Open Sans', sans-serif"
        }
    },
    zIndex: {
        appBar: 1000
    }
}, frFR)
export default theme;