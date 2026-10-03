/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: '/index.html', destination: '/', permanent: true },
      { source: '/privacidad.html', destination: '/privacidad', permanent: true },
      { source: '/terminos.html', destination: '/terminos', permanent: true },
      { source: '/login', destination: 'https://www.itspormi.com/login', permanent: false },
    ];
  },
};

export default nextConfig;
