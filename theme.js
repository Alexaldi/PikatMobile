import { extendTheme } from 'native-base';

const theme = extendTheme({
  components: {
    Button: {
      variants: {
        hearme: ({
          colorScheme
        }) => {
          return {
            bg: `${colorScheme}`,
          };
        },
        "hearme-outline": ({
          colorScheme
        }) => {
          return {
            borderWidth: `2`,
            borderColor: `${colorScheme}`,
          };
        }
      }
    }
  },
  fontConfig: {
    OpenSans: {
      100: {
        normal: 'OpenSans-Light',
        italic: 'OpenSans-Light-Italic',
      },
      200: {
        normal: 'OpenSans-Light',
        italic: 'OpenSans-Light-Italic',
      },
      300: {
        normal: 'OpenSans-Light',
        italic: 'OpenSans-Light-Italic',
      },
      400: {
        normal: 'OpenSans-Regular',
        italic: 'OpenSans-Italic',
      },
      500: {
        normal: 'OpenSans-Medium',
        italic: 'OpenSans-Medium-Italic',
      },
      600: {
        normal: 'OpenSans-SemiBold',
        italic: 'OpenSans-SemiBold-Italic',
      },
      700: {
        normal: 'OpenSans-Bold',
        italic: 'OpenSans-Bold-Italic',
      },
      800: {
        normal: 'OpenSans-ExtraBold',
        italic: 'OpenSans-ExtraBold-Italic',
      },
      900: {
        normal: 'OpenSans-ExtraBold',
        italic: 'OpenSans-ExtraBold-Italic',
      },
    },
  },

  fonts: {
    heading: 'OpenSans',
    body: 'OpenSans',
    mono: 'OpenSans',
  },
  colors: {
    hearme: {
      'homeMenuButton': '#CFE9E2',
      'lighter': '#C6EBE5',
      'light': '#7BD1C2',
      'secondary':'#7DCBB5',
      'alternate': '#57BBA0',
      'primary':'#3EBBA6',
      'orange' : '#FF9500'
    }
  }
});

export default theme;