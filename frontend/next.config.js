/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {

      /*   loader: "cloudinary",
        path: 'https://res.cloudinary.com/dqpimecmi/image/upload' */

              /* domains:[
           "res.cloudinary.com", "localhost",
        ],    */
               remotePatterns:[
        {
            protocol: "https",
            hostname: "res.cloudinary.com",
            port:"",
       
        }, 
       ],   
    },
};

module.exports = nextConfig
