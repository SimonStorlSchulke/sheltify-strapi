const config = {
  locales: ["de"],
  theme: {
    colors: {
      alternative100: '#f6ecfc',
      alternative200: '#e0c1f4',
      alternative500: '#ac73e6',
      alternative600: '#9736e8',
      alternative700: '#8312d1',
      buttonNeutral0: '#ffffff',
      buttonPrimary500: '#b49bff',
      buttonPrimary600: '#a587ff',
      danger100: '#fcecea',
      danger200: '#f5c0b8',
      danger500: '#ff7864',
      danger600: '#fa644d',
      danger700: '#e4553f',
      neutral0: '#ffffff',
      neutral100: '#f6f6f9',
      neutral1000: '#181826',
      neutral150: '#efedea',
      neutral200: '#e4e0dc',
      neutral300: '#ddd',
      neutral400: '#c4c4c4',
      neutral500: '#aaaaaa',
      neutral600: '#7c7c7c',
      neutral700: '#626262',
      neutral800: '#424242',
      neutral900: '#272727',
      primary100: '#fff',
      primary200: '#d0c0fe',
      primary500: '#b49bff',
      primary600: '#a587ff',
      primary700: '#9b7bfc',
      secondary100: '#fff3ea',
      secondary200: '#fff5dd',
      secondary500: '#ffedc2',
      secondary600: '#f8e2ad',
      secondary700: '#f5d895',
      success100: '#eafbe7',
      success200: '#c6f0c2',
      success500: '#5cb176',
      success600: '#328048',
      success700: '#2f6846',
      warning100: '#fdf4dc',
      warning200: '#fae7b9',
      warning500: '#f29d41',
      warning600: '#d9822f',
      warning700: '#be5d01',
    }
  },
};

const bootstrap = (app) => {
  console.log(app);
};

export default {
  config,
  bootstrap,
};
