/** @type {import('next').NextConfig} */
const nextConfig = {
    images : {
        remotePatterns: [
            {
                hostname: "**"
            }
        ],
        unoptimized: false
    },

};


export default nextConfig;

