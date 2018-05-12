import indigo from 'material-ui/colors/indigo';
import pink from 'material-ui/colors/pink';

export default {
    palette: {
        primary: {
            light: indigo[300],
            main: indigo[500],
            dark: indigo[700],
        },
        secondary: {
            light: pink[300],
            main: pink['A200'],
            dark: pink[700],
        }
    },
    status: {
        danger: 'orange',
    },
    typography: {
        button: {
            fontWeight: 400,
            textAlign: 'capitalize'
        },
    },
};
