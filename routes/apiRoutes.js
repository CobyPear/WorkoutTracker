const router = require('express').Router();
const db = require('../models');
const { mongo } = require('mongoose');

module.exports = function (router) {
    // get last workout
    router.get('/api/workouts', (req, res) => {
        db.Workout.find({})
            // .populate('exercises')
            .then(workouts => res.json(workouts))
            .catch(err => res.json(err));
    });

    // add an exercise
    router.put('/api/workouts/:id', ({ body }, res) => {
        db.Exercise.create(body)
            .then(({ _id }) => {
                db.Workout.findOneAndUpdate({ _id: _id }, { $push: { excersise: body.id } })
                .then(excersise => res.json(excersise))
                .catch(err => res.json(err))
            });
    });


};