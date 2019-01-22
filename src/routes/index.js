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
    title: "Projects", 
    PowerShellModules : projects.PowerShell.Modules,
    PowerShellProcesses: projects.PowerShell.Processes,
    CSharp: projects.CSharp
  });
});

router.get('/about', function(req, res, next) {
  res.render('about',{title: "About Me"});
});

module.exports = router;
