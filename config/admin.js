module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'd4b90b70a65e3f909895a79534c30ce6'),
  },
});
