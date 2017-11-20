/**
 * Babel plugin for production builds which converts "MARKO_DEBUG"
 * strings to false to be removed by babel-plugin-minify-dead-code-elimination.
 */
module.exports = function babelPluginMarkoDebug (babel) {
  const t = babel.types;
  return {
    visitor: {
      IfStatement: (path) => {
        const node = path.node;
        return replaceMarkoDebug(path, node.test, node.consequent, node.alternate);
      },
      ConditionalExpression: (path) => {
        const node = path.node;
        return replaceMarkoDebug(path, node.test, node.consequent, node.alternate);
      },
      LogicalExpression: (path) => {
        const node = path.node;

        if (node.operator === '&&') {
          return replaceMarkoDebug(path, node.left, node.right);
        } else {
          return replaceMarkoDebug(path, node.left, null, node.right);
        }
      }
    }
  }
}

/**
 * Replaces any conditions containing "MARKO_DEBUG" or !"MARKO_DEBUG" and collapses them.
 */
function replaceMarkoDebug (path, test, consequent, alternate) {
  // Reverse replacement when negating the expression.
  if (test.type === 'UnaryExpression' && test.operator === '!') {
    const temp = consequent;
    consequent = alternate;
    alternate = temp;
    test = test.argument;
  }

  // Only look for "MARKO_DEBUG" strings.
  if (test.type !== 'StringLiteral') {
    return;
  }

  // If we found a condition that is a string (and isn't "MARKO_DEBUG") it's most likely a mistake.
  if (test.value !== 'MARKO_DEBUG') {
    throw new Error(`Found if statement with StringLiteral "${test.value}", did you mean "MARKO_DEBUG".`);
  }

  if (alternate) {
    if (alternate.type === 'BlockStatement') {
      path.replaceWithMultiple(alternate.body);
    } else {
      path.replaceWith(alternate);
    }
  } else {
    path.remove();
  }
}

