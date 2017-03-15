const theme = require('./theme');
const fs    = require('fs');

[

  ['stayfresh-main.tmTheme', 'stayfresh-main', 'dark', '8eb04258-3f97-491b-bc97-9ba818a355e8', [
    '#ffffff', '#444444', '#3B3A32', '#2D2E35', '#222326', '#7259B1', '#556270',
    '#d9ff85', '#fad057', '#fbfa5f', '#c5a3f5', '#ff62ad', '#50e3d9', '#b5bacf',
  ]],

  ['stayfresh-blue.tmTheme', 'stayfresh-blue', 'dark', '8eb04258-3f97-491b-bc97-9ba818a355e9', [
    '#ffffff', '#3F3F67', '#433A14', '#1E1EAE', '#0D2843', '#5B30CA', '#246BC4',
    '#D8FF85', '#FDCF4E', '#FDFD45', '#C59FFB', '#FF5DBF', '#2FF3DC', '#ACB8EB',
  ]],

  ['stayfresh-warm.tmTheme', 'stayfresh-warm', 'dark', '8eb04258-3f97-491b-bc97-9ba818a355e0', [
    '#FFFCFC', '#634B29', '#593F1C', '#45331E', '#352614', '#764959', '#796A4F',
    '#ECFD63', '#FCD439', '#FDF83F', '#DFA8ED', '#FF6A8E', '#72E4C6', '#D4C0B8',
  ]],

  ['stayfresh-lowcontrast.tmTheme', 'stayfresh-lowcontrast', 'dark', '8eb04258-3f97-491b-bc97-9ba818a355e1', [
    '#ffffff', '#45565A', '#3D4C45', '#31404B', '#28353B', '#7259B1', '#547587',
    '#D4FF8B', '#FFD85B', '#FDFD60', '#C5AEFF', '#FF70C1', '#42ECE3', '#B1C5DC',
  ]],

  ['stayfresh-highcontrast.tmTheme', 'stayfresh-highontrast', 'dark', '8eb04258-3f97-491b-bc97-9ba818a355e2', [
    '#ffffff', '#3B3B3B', '#313024', '#21222C', '#15161B', '#7259B1', '#495C70',
    '#D7FF5F', '#FFD427', '#FFFF29', '#CF9EFF', '#FF4FBA', '#22F4E5', '#B5BCDA',
  ]],

].forEach((t) => {
  fs.writeFile(`themes/${t[0]}`, theme(t[1], t[2], t[3], t[4]));
  console.log(`Updated ${t[0]}`);
});
