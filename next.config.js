/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["images.pexels.com", "images.unsplash.com", "i.postimg.cc"],
  },
  async redirects() {
    return [
      {
        source: "https://arshad-01.netlify.app/", // this catches the root path
        destination: "https://arshadqadri.com/",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
