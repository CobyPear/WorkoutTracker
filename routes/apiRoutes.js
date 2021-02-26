const router = require('express').Router();
const db = require('../models/Index') || require('./models');

// get last workout
router.get('/api/workouts', (req, res) => {
    db.Workout.aggregate([
            {
                $addFields: {
                    totalDuration: {
                        $sum: '$exercises.duration',
                    },
                },
              },
            ])
        .then(workouts => res.json(workouts))
        .catch(err => res.json(err));
});

// add exercise
router.put('/api/workouts/:id', ({ body, params }, res) => {
    db.Workout.findOneAndUpdate({ _id: params.id }, { $push: { 'exercises': body } }, { new: true })
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
    db.Workout.aggregate([
            {
                $addFields: {
                    totalDuration: {
                        $sum: '$exercises.duration',
                    },
                },
              },
            ])
        .sort({ _id: -1 })
        .limit(7)
        .then(workouts => {
            console.log(workouts), res.json(workouts)
        })
        .catch(err => res.json(err));

})

module.exports = router