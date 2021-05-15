const express = require("express");
const router = express.Router();
const cors = require('cors');

router.use(cors());

router.get("/", (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-with, Content-Type, Accept")
    res.send({ response: "Server is up and running." }).status(200);
});

module.exports = router;