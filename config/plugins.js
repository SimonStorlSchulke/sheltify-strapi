module.exports = ({ env }) => ({
  ezforms: {
    config: {
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
  email: {
    config: {
      provider: 'nodemailer',
      providerOptions: {
        host: 'smtp.gmail.com',
        port: 465,
        auth: {
          user: env('GMAIL_USERNAME'),
          pass: env('GMAIL_PASSWORD'),
        },
      },
      settings: {
        defaultFrom: env('GMAIL_USERNAME'),
        defaultReplyTo: env('GMAIL_USERNAME'),
      },
    },
  },
  'users-permissions': {
    config: {
      ratelimit: {
        // 1 mail every 5sec allowed
        interval: 5000,
        max: 1
      }
    }
  }
});
