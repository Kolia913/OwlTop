/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['courses-top.ru'],
    },
    reactStrictMode: true,
    webpack(config, options) {
        config.module.rules.push({
            test: /\.svg$/,
            issuer: /\.[jt]sx?$/,
            use: [{
                loader: '@svgr/webpack',
                options: {
                    prettier: false,
                    svgo: true,
                    svgoConfig: {
                        plugins: [{
                            name: 'preset-default',
                            params: {
                                overrides: {
                                    removeViewBox: false
                                }
                            }
                        }],
                    },
                    titleProp: true,
                },
            }]
        });
        return config;
    },
};

module.exports = nextConfig
