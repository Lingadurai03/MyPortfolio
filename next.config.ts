// next.config.js
module.exports = {
    webpack(config: any) {
        // Add a rule to handle .svg files as React components
        config.module.rules.push({
            test: /\.svg$/,
            use: ['@svgr/webpack'],
        });

        return config;
    },
};
