const withPWA = require("next-pwa")

module.exports = withPWA({
  future: { webpack5: true },
  pwa: {
    dest: "public",
    disable: process.env.NODE_ENV === "development",
  },
  env: {
    siteTitle: "next shopify template",
    siteDescription: "next shopify template",
    siteKeywords: "next, shopify, template",
    siteUrl: "https://localhost:3000",
    siteImagePreviewUrl: "/images/main.jpg",
    twitterHandle: "@",
  },
  images: {
    domains: ["cdn.shopify.com"],
  },
})
