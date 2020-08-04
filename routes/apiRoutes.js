const router = require('express').Router();
const db = require('../models');
const mongojs = require('mongojs');

module.exports = function (router) {
    // get last workout
    router.get('/api/workouts', (req, res) => {
        db.Workout.find({})
            // .populate('exercises')
            .then(workouts => res.json(workouts))
            .catch(err => res.json(err));
    });

    // add exercise
    router.put('/api/workouts/:id', ({ body, params }, res) => {
        db.Workout.findOneAndUpdate(
            { _id: params.id },
            { $push: { 'exercises': body } }, {new: true })
            .then(exercise => res.json(exercise))
            .catch(err => res.json(err));

    });

    // create workout
    router.post('/api/workouts', ({ body }, res) => {
        db.Workout.create(body)
            .then(workout => res.json(workout))
            .catch(err => res.json(err));
    });

};