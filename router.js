const express = require('express');
const router = express.Router();
const cors = require('cors');

router.use(cors({ origin: true }));

router.get('/', (req, res, next) => {
    res.render('index', { title: 'tol-node-public' });
});

module.exports = router;