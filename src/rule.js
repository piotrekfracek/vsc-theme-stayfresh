module.exports = function rule(name, key, foreground, restOfStyles) {
  return [
    name,
    key,
    [
      ['foreground', foreground],
    ].concat(restOfStyles)
  ]
};
