const theme = require('./theme');
const fs    = require('fs');

[

  ['stayfresh-main.tmTheme', 'stayfresh-main', 'dark', '8eb04258-3f97-491b-bc97-9ba818a355e8', [
    'red',
    'blue'
  ]]

].forEach((t) => {
  fs.writeFile(`themes/${t[0]}`, theme(t[1], t[2], t[3], t[4]));
})

console.log('Updated...');
