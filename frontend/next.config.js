/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {

         /*  domains:[
            "localhost","https://buycomms-fullstack-h58c.vercel.app"
        ], */   
           remotePatterns:[
        {
            protocol: "https",
            hostname: "**",
       
        },
       ],     
    },
};

module.exports = nextConfig
