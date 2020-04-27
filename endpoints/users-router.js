const router = require('express').Router();

const Users = require('../data/user-model.js');

router.get('/', (req, res) => {
    Users.find()
        .then(data => {
            res.json(data);
        })
        .catch(err => res.send(err));
});

module.exports = router;