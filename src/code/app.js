var greeter = require('modules/sample');
var greeter2 = require('modules/sample2');
var $ = require('jquery');

$(document.body).html(greeter("World"));
greeter2("blah");

