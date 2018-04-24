const Client = require('mysql-pro');
const client = new Client({
    mysql: {
        database: 'ruige',
        user: 'root',
        paddword: 'admin',
        PORT: '3306',
        host: '127.0.0.1'
    }
})

module.exports = client