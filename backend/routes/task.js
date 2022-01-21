import { Router } from 'express';
import Task from '../model/Task.js';

const router = Router();

router
    .get('/', async (req, res) => {
    
        try {
            const tasks = await Task.find();

            res.status(200).json(tasks);
        } catch (err) {
            res.status(400).json(err);
        }
    })

    .get('/:id', async (req, res) => {

        try {  
            const task = await Task.findById(req.params.id);

            res.status(200).json(task);
        } catch (err) {
            res.status(404).json(err);
        }
    })

    .post('/', async (req, res) => {
        const { content, done } = req.body;

        try {
            const newTask = await new Task({
                content,
                done
            });
            const savedTask = await newTask.save();

            res.status(201).json(savedTask);
        } catch (err) {
            res.status(400).json(err);
        }
    })

    .delete('/:id', async (req, res) => {
        try {
            const deletedTask = await Task.findByIdAndDelete(req.params.id);

            res.status(200).json(deletedTask);
        } catch (err) {

            res.status(404).json(err);
        }
    })

    .put('/:id', async (req, res) => {
        const newTask = {
            content: req.body.content,
            done: !req.body.done
        }

        try {
            const updatedTask = await Task.findByIdAndUpdate(req.params.id, {
                $set: newTask,
            }, { new: true });
            
            res.status(200).json(updatedTask);
        } catch (err) {
            res.status(404).json(err);
        }
    })

export default router;