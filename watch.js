const chokidar = require('chokidar');
const spawn    = require('lighter-spawn');

chokidar.watch('src', {ignored: /(^|[\/\\])\../}).on('change', () => {
  spawn('npm run build')
    .on('out', (files) => { console.log(files) })
    .on('close',    () => { console.log('Done') });
});
