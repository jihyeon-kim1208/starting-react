const print(message) = log(message, new Date())
const log(message, timestamp) = console.log('${timstamp.toString()}:${message}')
module.exports = {print,log}