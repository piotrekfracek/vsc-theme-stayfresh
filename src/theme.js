const parser = require('./parser');
const rule   = require('./rule');

module.exports = function(name, style, uuid, colors) {
  return parser(
    {
      name:  name,
      style: style,
      uuid:  uuid
    },
    [
      ['background',                  '#222326'],
      ['caret',                       '#F8F8F0'],
      ['foreground',                  '#ffffff'],
      ['invisibles',                  '#3B3A32'],
      ['lineHighlight',               '#2D2E35'],
      ['selection',                   '#685247'],
      ['selectionForeground',         '#fffff8'],
      ['inactiveSelection',           '#bbbbbb'],
      ['inactiveSelectionForeground', '#222222'],
      ['findHighlight',               '#FFE792'],
      ['findHighlightForeground',     '#000000'],
      ['activeGuide',                 '#343592'],
      ['bracketsForeground',          '#F8F8F2A5'],
      ['bracketsOptions',             'underline'],
      ['bracketContentsForeground',   '#F8F8F2A5'],
      ['bracketContentsOptions',      'underline'],
      ['tagsOptions',                 'stippled_underline']
    ],
    [
      //   Name                       Scope                                                                                                                      Foreground          Additional styles
      rule('String',                  'string',                                                                                                                  '#D9FF85',          []),
      rule('Expression',              'meta.template.expression.js, support.variable.property.dom.js, support.class.builtin.js, support.constant.math.js',       '#ffffff',          []),
      rule('Number',                  'constant.numeric',                                                                                                        '#FAD057',          []),
      rule('Boolean',                 'constant.language.boolean.true.js',                                                                                       '#FAD057',          []),
      rule('Built-in constant',       'constant.language',                                                                                                       '#FBFA5F',          []),
      rule('User-defined constant',   'constant.character, constant.other, constant.id.tag.jade',                                                                '#C5A3F5',          []),
      rule('Keyword',                 'keyword',                                                                                                                 '#FF62AD',          []),
      rule('Storage',                 'storage',                                                                                                                 '#FF62AD',          []),
      rule('Storage type',            'storage.type',                                                                                                            '#FF62AD',          []),
      rule('Class name',              'entity.name.class',                                                                                                       '#50E3D9',          []),
      rule('Inherited class',         'entity.other.inherited-class',                                                                                            '#50E3D9',          [['fontStyle', 'underline']]),
      rule('Function name',           'entity.name.function',                                                                                                    '#50E3D9',          []),
      rule('Function argument',       'variable.parameter',                                                                                                      '#FBFA5F',          []),
      rule('Tag name',                'entity.name.tag',                                                                                                         '#FF62AD',          []),
      rule('Tag attribute',           'entity.other.attribute-name',                                                                                             '#50E3D9',          []),
      rule('Library function',        'support.function',                                                                                                        '#FF62AD',          []),
      rule('Library constant',        'support.constant',                                                                                                        '#FF62AD',          []),
      rule('Library class/type',      'support.type, support.class',                                                                                             '#FF62AD',          []),
      rule('Invalid',                 'invalid',                                                                                                                 '#ffffff',          [['background', '#FF62AD']]),
      rule('Invalid deprecated',      'invalid.deprecated',                                                                                                      '#ffffff',          [['background', '#CC70FC']]),
      rule('diff.header',             'meta.diff, meta.diff.header',                                                                                             '#655c2d',          []),
      rule('diff.deleted',            'markup.deleted',                                                                                                          '#FF62AD',          []),
      rule('diff.inserted',           'markup.inserted',                                                                                                         '#50E3D9',          []),
      rule('diff.changed',            'markup.changed',                                                                                                          '#FBFA5F',          []),
      rule('FiF match',               'constant.numeric.line-number.find-in-files - match',                                                                      '#000000',          []),
      rule('FiF',                     'entity.name.filename.find-in-files',                                                                                      '#FBFA5F',          []),
      rule('Js object key',           'meta.object-literal.key.js',                                                                                              '',                 [['fontStyle', 'italic']]),
      rule('XMLTagss',                'punctuation.definition.tag.html, constant.name.attribute.tag.jade, punctuation.definition.tag.xml,' +
                                      'punctuation.definition.tag.begin.html, punctuation.definition.tag.end.html',                                              '#B5BACF',          []),
      rule('Punctuation',             'punctuation.accessor.js, punctuation.definition.block.js, punctuation.separator.key-value.js,' +
                                      'punctuation.terminator.statement.js, punctuation.separator.comma, punctuation.terminator,' +
                                      'meta.brace.round, punctuation.definition.parameters.begin.js, punctuation.definition.parameters.end.js',                  '#B5BACF',          []),
      rule('Functions',               'entity.name.function, meta.require, support.function.any-method, meta.function-call, support.function,' +
                                      'keyword.other.special-method, meta.block-level, meta.function-call.method.with-arguments variable.function',              '#50E3D9',          []),
      rule('Comment',                 'comment, comment.line.double-slash.js, punctuation.definition.comment.js',                                                '#556270',          []),
      // Styles
      rule('Css pseudo class',        'entity.other.attribute-name.pseudo-class.css',                                                                            '#D9FF85',          []),
      rule('Css selector class',      'entity.other.attribute-name.class.css',                                                                                   '#FBFA5F',          []),
      rule('Css selector id',         'entity.other.attribute-name.id.css',                                                                                      '#C5A3F5',          []),
      rule('Css pseudo class',        'meta.property-name.css, keyword.other.unit.css, support.type.property-name.css.sass',                                     '#B5BACF',          []),
      rule('Sass functions',          'support.function.name.sass, meta.property-list.css.sass',                                                                 '#FFFFFF',          []),
      rule('Css values',              'constant.numeric.css, string.quoted.double.css.sass, support.constant.property-value.css, constant.other.rgb-value.css',  '#ffffff',          [['fontStyle', 'bold']]),
      // Markdown
      rule('Markdown sections',       'entity.name.section.markdown, punctuation.definition.heading.markdown',                                                   '#FF62AD',          []),
      rule('Markdown list',           'beginning.punctuation.definition.list.markdown',                                                                          '#FBFA5F',          []),
      rule('Markdown raw',            'meta.separator.markdown, markup.raw.block.markdown, markup.raw.inline.markdown',                                          '#B5BACF',          []),
    ]
  )
}

