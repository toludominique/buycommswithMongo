/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {

          /*  domains:[
            "localhost","buycommswith-mongo.vercel.app"
        ], */  
            remotePatterns:[
        {
            protocol: "https",
            hostname: "**.vercel.app",
            port:"",
       
        },
       ],     
    },
};

module.exports = nextConfig
