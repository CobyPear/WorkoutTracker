const router = require('express').Router();
const db = require('../models/Index') || require('./models');
const mongojs = require('mongojs');

// get last workout
router.get('/api/workouts', (req, res) => {
    console.log(find)
    db.Workout.find({})
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
    
    // get workouts in range
    router.get('/api/workouts/range', (req, res) => {
        db.Workout.find({})
        .then(workouts => res.json(workouts))
        .catch(err => res.json(err));
        
    })

module.exports = router