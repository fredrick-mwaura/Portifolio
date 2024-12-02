/** @type {import('next').NextConfig} */

import somePlugin from 'module';
const nextConfig = {
    experimental: {
        scrollRestoration: true, // Optional: helps with scroll restoration
    },
    reactStrictMode: true,
    trailingSlash: true,
    
};


export default nextConfig;
