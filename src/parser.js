const xml = require('xml');

function parseBase(base) {
  return xml([
    {key:    base[0]},
    {string: base[1]}
  ], true)
}

function parseRule(rule) {
  return xml({
    dict: [
      {key:    'name'},
      {string: rule[0]},
      {key:    'scope'},
      {string: rule[1]},
      {key:    'settings'},
      {dict:   [].concat.apply([], rule[2].map((setting) => {
        return [
          {key: setting[0]},
          {string: setting[1]}
        ]
      }))}
    ]
  }, true)
}

module.exports = function(settings, bases, rules) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple Computer//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
  <key>name</key>
  <string>${settings.name}</string>
  <key>settings</key>
  <array>
    <dict>
      <key>settings</key>
      <dict>
        ${bases.map(parseBase).join('\n')}
      </dict>
    </dict>
    ${rules.map(parseRule).join('\n')}
  </array>
  <key>uuid</key>
  <string>${settings.uuid}</string>
  <key>colorSpaceName</key>
  <string>sRGB</string>
  <key>semanticClass</key>
  <string>theme.${settings.style}.${settings.name}</string>
</dict>
</plist>
  `
}
