const express = require('express');
const router = express.Router();

router.get('/data', (req, res) => {
    const data = {
        message: 'Hello from the API!',
        timestamp: new Date()
    };
    res.json(data);
});

module.exports = router;
