module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'e67f884e45f3dde49b04811b6ff9eb0b'),
  },
});
