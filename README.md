# gulp-helptext

Generates pretty help text for your gulpfile.

## Usage

Supply an optional `description` object to specify pretty descriptions for tasks. Tasks will automatically print out their names and dependent tasks.

```js
var helptext = require('gulp-helptext');

gulp.task('help', helptext({
  'default': 'Shows the help message',
  'help': 'Shis help message',
  'styles': 'Compiles stylus',
  'lint': 'Runs JSHint on your code',
  'server': 'Start the development server'
}));
```
