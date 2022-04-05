module.exports = ({ env }) => ({
  url: env("MY_HEROKU_URL"),
  proxy: true,
  app: {
    keys: env.array("APP_KEYS", [
      "aSvsp74CKI1oRzqO+026RA==",
      "3cxux7TbxxKbqUu/GZ+1Xg==",
      "7pPkxBFqhEvazYE066vH7w==",
      "aA6Or0vs4sHHjFqUupaeaw==",
    ]),
  },
});
