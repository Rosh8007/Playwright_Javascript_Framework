const { createLogger, format, transports } = require('winston');
const moment = require('moment-timezone');

const logger = createLogger({
  level: 'info',
  format: format.combine(
    format.timestamp({ format: () => moment().tz('Asia/Kolkata').format('YYYY-MM-DD HH:mm:ss') }),
    format.printf(info => `[${info.timestamp}] [${info.level.toUpperCase()}]: ${info.message}`)
  ),
  transports: [
    new transports.Console(),
    new transports.File({ filename: './src/logging/test.log' }),
  ],
});

module.exports = logger;
