const taskService = require('../services/task.service');

const notFound = (res) => res.status(404).json({ error: 'Task not found' });

exports.create = async (req, res, next) => {
  try {
    res.status(201).json(await taskService.create(req.body));
  } catch (err) { next(err); }
};

exports.getAll = async (req, res, next) => {
  try {
    res.json(await taskService.findAll());
  } catch (err) { next(err); }
};

exports.getOne = async (req, res, next) => {
  try {
    const task = await taskService.findById(req.params.id);
    task ? res.json(task) : notFound(res);
  } catch (err) { next(err); }
};

exports.update = async (req, res, next) => {
  try {
    const task = await taskService.update(req.params.id, req.body);
    task ? res.json(task) : notFound(res);
  } catch (err) { next(err); }
};

exports.remove = async (req, res, next) => {
  try {
    const task = await taskService.remove(req.params.id);
    task ? res.status(204).end() : notFound(res);
  } catch (err) { next(err); }
};