const config = require('../config');
const { connect } = require('./db/connection');
const app = require('./app');

(async () => {
  try {
    await connect();
    app.listen(config.port, () =>
      console.log(`[${config.env}] Server listening on port ${config.port}`)
    );
  } catch (err) {
    console.error('Startup failed:', err.message);
    process.exit(1);
  }
})();