/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env: {
    PUBLIC_IMAGE_URL: process.env.PUBLIC_IMAGE_URL,
    MYSQL_HOST: process.env.MYSQL_HOST,
    MYSQL_PORT: process.env.MYSQL_PORT,
    MYSQL_DATABASE: process.env.MYSQL_DATABASE,
    MYSQL_USERNAME: process.env.MYSQL_USERNAME,
    MYSQL_PASSWORD: process.env.MYSQL_PASSWORD,
    JWT_SECRET_KEY: process.env.JWT_SECRET_KEY,
    REACT_APP_BASE_MODULE_URL: process.env.REACT_APP_BASE_MODULE_URL,
  },
};

module.exports = nextConfig;
