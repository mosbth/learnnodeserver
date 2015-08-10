#!/usr/bin/env node

var path = require('path');
var adventure = require('workshopper-adventure/adventure');

// Create the adventure object
var adv = adventure({
    name: 'learnnodeserver',
    title: 'Learn To Program A Node Server',
    appDir: __dirname,
    languages: ['en']
});

// Create the problem objects and add to the adventure
var problems = require('./exercise/menu.json');

problems.forEach(function (problem) {
    var p = problem.toLowerCase().replace(/\s/g, '-');
    var dir = path.join(__dirname, 'exercise', p);
    adv.add(problem, function () { 
        return require(dir); 
    });
});

// Run the adventure with its arguments
adv.execute(process.argv.slice(2));
