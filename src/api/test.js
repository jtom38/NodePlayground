var express = require('express');
var router = express.Router();
var resume = require("../Data/resume");
var projects = require("../Data/projects");


router.get('/', function (req, res, next) {
    res.status(200).send({
        status: true,
        message: "You found my API!",
        resume : "/api/resume",
        projects : "/api/projects"

    });
});

router.get('/resume', function( req, res, next){
    res.status(200).send({
        resume: resume
    });
});

router.get('/projects', function(req,res,next){
    res.status(200).send({
        projects: projects
    });
});

module.exports = router;