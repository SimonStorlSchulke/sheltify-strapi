module.exports = () => ({
    ezforms: {
        config:{
          captchaProvider: {
            name: 'none',
          },
          notificationProviders: []
        },
    },
    upload: {
      config: {
        breakpoints: {
          xlarge: 1920,
          large: 1000,
          medium: 750,
          small: 500,
        },
      }
    },
});
