var config = {
    development: {
        database: 'ngo',
        username:'root',
        password:'root',
        port: 3306,
        adaptor: 'mysql',
        host: '127.0.0.1'
    },
    staging: {
        database: 'ngo',
        username:'root',
        password:'root',
        port: 3306,
        adaptor: 'mysql',
        host: '127.0.0.1'
    },
    production: {
        database: 'ngo',
        username:'root',
        password:'root',
        port: 3306,
        adaptor: 'mysql',
        host: '127.0.0.1'
    }
}
module.exports = function(mode) {
    return config[mode || process.argv[2] || 'development'] || config.development;
}