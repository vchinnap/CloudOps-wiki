const Wiki = require('wiki.js');

let config = {
    storage: {
        type: 'git',
        repo: '<your-github-repo-url>',
        branch: 'main',
    },
    db: {
        type: 'postgres',
        host: '127.0.0.1',
        user: '<your-db-username>',
        password: '<your-db-password>',
        database: 'wikijs',
    }
};

// Start the server
const server = new Wiki(config);
server.start();