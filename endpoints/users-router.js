const router = require('express').Router();
const protected = require('../auth/restricted-middleware.js');

const Users = require('../data/user-model.js');

router.get('/', protected, (req, res) => {
    Users.find()
        .then(data => {
            res.json(data);
        })
        .catch(err => res.send(err));
});

module.exports = router;