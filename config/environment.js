var config = {
    development: {
        mode: 'development',
        port: 9000,
        database:'starter'
    },
    staging: {
        mode: 'staging',
        port: 4000,
        database:'starter'
    },
    production: {
        mode: 'production',
        port: 8080,
        database:'starter'
    }
}
module.exports = function(mode) {
    return config[mode || process.argv[2] || 'development'] || config.development;
}