/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    loader: 'custom'
  },
  env: {
    baseUrl: 'https://efremov.dev',
    baseTitle: 'efremov.dev',
    googleTagId: 'GTM-PDXCN6D'
  }
};
