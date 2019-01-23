var express = require('express');
var router = express.Router();

var resume = require("../Data/resume");
var projects = require("../Data/projects")

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/projects', function(req, res, next) {
  res.render('projects', {
    title: "All of my Projects!", 
    subtitle: "The place to learn what I have done and working on currently.",
    PowerShellModules : projects.PowerShell.Modules,
    PowerShellProcesses: projects.PowerShell.Processes,
    CSharp: projects.CSharp
  });
});

router.get('/about', function(req, res, next) {
  res.render('about',{title: "About Me"});
});

module.exports = router;
