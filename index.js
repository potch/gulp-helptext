var chalk = require('chalk');
var gulp = require('gulp');

module.exports = function (descriptions) {
  return function () {
    descriptions = descriptions || {};
    console.log('\n' + chalk.bold.yellow('Registered tasks:') + '\n');
    var tasks = Object.keys(gulp.tasks);
    var indent = tasks.reduce(function (winner, current) {
      return Math.max(current.length, winner);
    }, 0);
    var indentString = (new Array(indent+1)).join(' ');
    Object.keys(gulp.tasks).forEach(function (task) {
      var pretty = chalk.bold((task + indentString).substr(0,indent));
      var dep = gulp.tasks[task].dep;
      for (var i = 0; i < dep.length; i++) {
        dep[i] = chalk.bold(dep[i]);
      }
      var depString = 'Runs ' + dep.join(', ');
      if (task in descriptions) {
        console.log(pretty + ' - ' + descriptions[task]);
        if (dep.length) {
          console.log(indentString + '   ' + depString);
        }
      } else {
        if (dep.length) {
          console.log(pretty + ' - ' + depString);
        } else {
          console.log(pretty);
        }
      }
    });
    console.log('\n');
  };
};
