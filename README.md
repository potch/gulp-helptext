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

Output looks like the following:

```
Registered tasks:

lint    - Runs JSHint on your code
styles  - Compiles stylus
build   - Runs lint, styles
connect
watch
server  - Start the development server
          Runs build, connect, watch
bump
help    - This help message
deploy
default - Shows the help message
          Runs help
```
