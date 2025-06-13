/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["images.pexels.com", "images.unsplash.com", "i.postimg.cc"],
  },
  async redirects() {
    return [
      {
        source: "/", // this catches the root path
        has: [
          {
            type: "host",
            value: "arshad-01.netlify.app",
          },
        ],
        destination: "https://arshadqadri.com/",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
