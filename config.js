// Using dotenv with Configuration

require("dotenv").config();
// .env file theke variable gulo load kora......
// mane .env file e jshob value likhbo (APP_NAME, PORT etc), segulo process.env er madhdhome pawa jabe..

const config = {
  app: {
    name: process.env.APP_NAME || "DefaultAPP",
    version: process.env.APP_Version || "1.0.0",
    port: process.env.PORT || 8080,
    env: process.env.NODE_ENV,
  },
};

console.log(config.app);

module.exports = config;