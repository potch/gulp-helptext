var chalk = require('chalk');

module.exports = function (gulp, descriptions) {
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
    var depString = dep.length ? 'Runs ' + dep.join(', ') : '';
    if (task in descriptions) {
      console.log(pretty + ' - ' + descriptions[task]);
      if (dep.length) {
        console.log(indentString + '   ' + depString);
      }
    } else {
      console.log(pretty + ' - ' + depString);
    }
  });
  console.log('\n');
};
