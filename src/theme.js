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
      ['background',                  colors[4]],
      ['caret',                       colors[0]],
      ['foreground',                  colors[0]],
      ['invisibles',                  colors[2]],
      ['lineHighlight',               colors[3]],
      ['selection',                   colors[5]],
      ['selectionForeground',         colors[0]],
      ['inactiveSelection',           colors[1]],
      ['inactiveSelectionForeground', colors[4]],
    ],
    [
      //   Name                       Scope                                                                                                                      Foreground          Additional styles
      rule('String',                  'string',                                                                                                                  colors[7],          []),
      rule('Expression',              'meta.template.expression.js, support.variable.property.dom.js, support.class.builtin.js, support.constant.math.js',       colors[0],          []),
      rule('Number',                  'constant.numeric',                                                                                                        colors[8],          []),
      rule('Boolean',                 'constant.language.boolean.true.js',                                                                                       colors[8],          []),
      rule('Built-in constant',       'constant.language',                                                                                                       colors[9],          []),
      rule('User-defined constant',   'constant.character, constant.other, constant.id.tag.jade',                                                                colors[10],         []),
      rule('Keyword',                 'keyword',                                                                                                                 colors[11],         []),
      rule('Storage',                 'storage',                                                                                                                 colors[11],         []),
      rule('Storage type',            'storage.type',                                                                                                            colors[11],         []),
      rule('Class name',              'entity.name.class',                                                                                                       colors[12],         []),
      rule('Inherited class',         'entity.other.inherited-class',                                                                                            colors[12],         [['fontStyle', 'underline']]),
      rule('Function name',           'entity.name.function',                                                                                                    colors[12],         []),
      rule('Function argument',       'variable.parameter',                                                                                                      colors[9],          []),
      rule('Tag name',                'entity.name.tag',                                                                                                         colors[11],         []),
      rule('Tag attribute',           'entity.other.attribute-name',                                                                                             colors[12],         []),
      rule('Library function',        'support.function',                                                                                                        colors[11],         []),
      rule('Library constant',        'support.constant',                                                                                                        colors[11],         []),
      rule('Library class/type',      'support.type, support.class',                                                                                             colors[11],         []),
      rule('Invalid',                 'invalid',                                                                                                                 colors[0],          [['background', colors[11]]]),
      rule('Invalid deprecated',      'invalid.deprecated',                                                                                                      colors[0],          [['background', colors[10]]]),
      rule('diff.header',             'meta.diff, meta.diff.header',                                                                                             colors[13],         []),
      rule('diff.deleted',            'markup.deleted',                                                                                                          colors[11],         []),
      rule('diff.inserted',           'markup.inserted',                                                                                                         colors[12],         []),
      rule('diff.changed',            'markup.changed',                                                                                                          colors[9],          []),
      rule('FiF match',               'constant.numeric.line-number.find-in-files - match',                                                                      colors[11],         []),
      rule('FiF',                     'entity.name.filename.find-in-files',                                                                                      colors[9],          []),
      rule('Js object key',           'meta.object-literal.key.js',                                                                                              colors[0],          [['fontStyle', 'italic']]),
      rule('XMLTagss',                'punctuation.definition.tag.html, constant.name.attribute.tag.jade, punctuation.definition.tag.xml,' +
                                      'punctuation.definition.tag.begin.html, punctuation.definition.tag.end.html',                                              colors[13],         []),
      rule('Punctuation',             'punctuation.accessor.js, punctuation.definition.block.js, punctuation.separator.key-value.js,' +
                                      'punctuation.terminator.statement.js, punctuation.separator.comma, punctuation.terminator,' +
                                      'meta.brace.round, punctuation.definition.parameters.begin.js, punctuation.definition.parameters.end.js',                  colors[13],         []),
      rule('Functions',               'entity.name.function, meta.require, support.function.any-method, meta.function-call, support.function,' +
                                      'keyword.other.special-method, meta.block-level, meta.function-call.method.with-arguments variable.function',              colors[12],         []),
      rule('Comment',                 'comment, comment.line.double-slash.js, punctuation.definition.comment.js',                                                colors[6],          []),
      // Styles
      rule('Css flow selector',       'source.css, keyword.operator.combinator.css, keyword.operator.less',                                                      colors[0],          []),
      rule('Css pseudo class',        'entity.other.attribute-name.pseudo-class, entity.other.attribute-name.pseudo-element',                                    colors[7],          []),
      rule('Css selector class',      'entity.other.attribute-name.class',                                                                                       colors[9],          []),
      rule('Css selector id',         'entity.other.attribute-name.id',                                                                                          colors[10],         []),
      rule('Css units',               'meta.property-name.css, keyword.other.unit, support.type.property-name',                                                  colors[13],         []),
      rule('Sass functions',          'support.function.name.sass, meta.property-list.css.sass, meta.function.include.sass',                                     colors[0],          []),
      rule('Css values',              'constant.numeric.css, constant.numeric.scss, constant.numeric.sass,' +
                                      'string.quoted.double.css.sass, support.constant.property-value.css,' +
                                      'constant.other.rgb-value.css, support.constant.property-value.scss',                                                      colors[0],          [['fontStyle', 'bold']]),
      // Markdown
      rule('Markdown sections',       'entity.name.section.markdown, punctuation.definition.heading.markdown, markup.heading',                                   colors[11],         []),
      rule('Markdown list',           'beginning.punctuation.definition.list.markdown',                                                                          colors[8],          []),
      rule('Markdown def',            'punctuation.definition.markdown',                                                                                         colors[10],         []),
      rule('Markdown bold',           'markup.bold.markdown',                                                                                                    colors[0],          [['fontStyle', 'bold']]),
      rule('Markdown raw',            'meta.separator.markdown, markup.raw.block.markdown, markup.raw.inline.markdown',                                          colors[13],         []),
    ]
  )
}




