const repo = "MainSite";
var assetPrefix = `/${repo}/`;
var basePath = `/${repo}`;
const createNextIntlPlugin = require('next-intl/plugin');
 
const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
}

module.exports = withNextIntl(nextConfig);

const isGithubActions = process.env.GITHUB_ACTIONS || false

//let assetPrefix = ''
//let basePath = '/'

if (isGithubActions) {
 
//   // trim off `<owner>/`
   const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '')

   assetPrefix = `/${repo}/`
   basePath = `/`
   module.exports = {
     output: 'export',
     assetPrefix: assetPrefix,
     basePath: basePath,
   }
}

// module.exports = nextConfig
