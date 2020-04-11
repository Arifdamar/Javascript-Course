var url = 'http://logger.io/logger';
var name = 'Arif Damar';

function log(message) {
    console.log(message + ' from logger');
    console.log(__filename);
    console.log(__dirname);
}

module.exports = {
    name: name,
    log: log
}