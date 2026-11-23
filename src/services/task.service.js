const Task = require('../models/task.model');

module.exports = {
  create: (data) => Task.create(data),
  findAll: () => Task.find().sort({ createdAt: -1 }),
  findById: (id) => Task.findById(id),
  update: (id, data) => Task.findByIdAndUpdate(id, data, { new: true, runValidators: true }),
  remove: (id) => Task.findByIdAndDelete(id),
};