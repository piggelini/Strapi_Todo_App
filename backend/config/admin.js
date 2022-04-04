module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '5038324c2fae05da761009a720f52340'),
  },
});
