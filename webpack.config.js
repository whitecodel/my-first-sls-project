const slsw = require('serverless-webpack');

module.exports = {
    entry: slsw.lib.entries,
    target: 'node',
    // mode: slsw.lib.webpack.isLocal ? 'development' : 'production',
    mode: 'production',
    optimization: {
        minimize: true,
    },
    performance: {
        hints: false,
    },
};
