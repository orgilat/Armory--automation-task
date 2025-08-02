import { createLogger, format, transports } from 'winston';

const logger = createLogger({
  level: 'info', // רמות: error, warn, info, verbose, debug, silly
  format: format.combine(
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    format.colorize(),
    format.printf(({ timestamp, level, message }) => `${timestamp} [${level}]: ${message}`)
  ),
  transports: [
    new transports.Console(), // מציג בקונסול
   
  ],
});

export default logger;
