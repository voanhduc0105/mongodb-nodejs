const path = require('path');
const dotenv = require('dotenv');

const ENVIRONMENTS = ['staging', 'preprod', 'prod'];
const env = process.env.APP_ENV || 'staging';

if (!ENVIRONMENTS.includes(env)) {
  throw new Error(`Invalid APP_ENV "${env}". Use one of: ${ENVIRONMENTS.join(', ')}`);
}

dotenv.config({ path: path.resolve(__dirname, '..', `.env.${env}`) });

const envConfig = require(`./${env}`);

module.exports = {
  env,
  ...envConfig,
  mongo: { ...envConfig.mongo, uri: process.env.MONGO_URI },
};