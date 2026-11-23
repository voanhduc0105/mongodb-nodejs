const express = require('express');
const taskRoutes = require('./routes/task.routes');

const app = express();
app.use(express.json());

app.get('/health', (req, res) => res.json({ status: 'ok' }));
app.use('/api/tasks', taskRoutes);

app.use((err, req, res, next) => {
  const status = err.name === 'ValidationError' || err.name === 'CastError' ? 400 : 500;
  res.status(status).json({ error: err.message });
});

module.exports = app;