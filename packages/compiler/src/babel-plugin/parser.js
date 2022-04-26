import { createParser, TagType } from "htmljs-parser";
import * as t from "../babel-types";
import {
  parseScript,
  parseExpression,
  getTagDefForTagName
} from "@marko/babel-utils";

const noop = () => {};
const emptyRange = part => part.start === part.end;
const isAttrTag = tag => tag.name.value?.[0] === "@";
const toBabelPosition = ({ line, character }) => ({
  line: line + 1,
  column: character ? character - 1 : character
});

export function parseMarko(file) {
  const { code } = file;
  const { htmlParseOptions = {} } = file.markoOpts;
  const { watchFiles } = file.metadata.marko;
  let currentTag = file.path;
  let currentBody = currentTag;
  let currentAttr = undefined;
  let currentShorthandId = undefined;
  let currentShorthandClassNames = undefined;
  let { preserveWhitespace } = htmlParseOptions;
  let preservingWhitespaceUntil = preserveWhitespace;
  let onNext = noop;
  const positionAt = index => toBabelPosition(parser.positionAt(index));
  const locationAt = range => {
    // Babel columns start at 0, but that is silly.
    // Here we normalize the parsers 1 based columns.
    const { start, end } = parser.locationAt(range);
    return {
      start: toBabelPosition(start),
      end: toBabelPosition(end)
    };
  };
  const withLoc = (node, range) => {
    node.start = range.start;
    node.end = range.end;
    node.loc = locationAt(range);
    return node;
  };
  const enterTag = node => {
    currentTag = currentBody.pushContainer("body", node)[0];
    currentBody = currentTag.get("body");
    onNext(node);
  };
  const pushContent = node => {
    currentBody.node.body.push(node);
    onNext(node);
  };
  const endAttr = () => {
    if (currentAttr) {
      currentAttr.loc = locationAt(currentAttr);
      currentAttr = undefined;
    }
  };
  const parseTemplateString = ({ quasis, expressions }) => {
    switch (expressions.length) {
      case 0: {
        const [first] = quasis;
        return withLoc(t.stringLiteral(parser.read(first)), first);
      }
      case 1: {
        if (emptyRange(quasis[0]) && emptyRange(quasis[1])) {
          const [{ value }] = expressions;
          const result = parseExpression(file, parser.read(value), value.start);
          if (t.isStringLiteral(result)) {
            // convert to template literal just so that we don't mistake it for a native tag if this is a tag name.
            return t.templateLiteral(
              [
                t.templateElement({
                  raw: result.value,
                  cooked: result.value
                })
              ],
              []
            );
          } else {
            return result;
          }
        }
      }
    }

    const [{ start }] = quasis;
    const end = quasis[quasis.length - 1].end;
    return parseExpression(
      file,
      `\`${parser.read({ start, end })}\``,
      start - 1
    );
  };

  const parser = createParser({
    onError(part) {
      throw file.buildCodeFrameError({ loc: locationAt(part) }, part.message);
    },
    onText(part) {
      const rawValue = parser.read(part);

      if (preservingWhitespaceUntil) {
        pushContent(withLoc(t.markoText(rawValue), part));
        return;
      }

      if (/^(?:[\n\r]\s*)?(?:[\n\r]\s*)?$/.test(rawValue)) return;

      const { body } = currentBody.node;
      let prev;
      let prevIndex = body.length;
      // Find previous non-scriptlet or comment.
      while (prevIndex > 0) {
        prev = body[--prevIndex];

        if (t.isMarkoScriptlet(prev) || t.isMarkoComment(prev)) {
          prev = undefined;
        } else {
          break;
        }
      }

      let value = rawValue;
      switch (prev?.type) {
        case "MarkoPlaceholder":
          break;
        case "MarkoText":
          if (/\s$/.test(prev.value)) {
            value = value.replace(/^\s+/, "");
          }
          break;
        case "MarkoTag":
          if (isAttrTag(prev)) {
            value = value.replace(/^[\n\r]\s*/, "");
          }
          break;
        default:
          value = value.replace(/^[\n\r]\s*/, "");
          break;
      }

      const node = t.markoText(value);
      pushContent(node);
      onNext = next => {
        switch (next?.type) {
          case "MarkoScriptlet":
          case "MarkoComment":
            return;
          case "MarkoPlaceholder":
            break;
          case "MarkoText":
            if (/^\s/.test(next.value)) {
              value = value.replace(/\s+$/, "");
            }
            break;
          case "MarkoTag":
            if (isAttrTag(next)) {
              value = value.replace(/[\n\r]\s*$/, "");
            }

            break;
          default:
            value = value.replace(/[\n\r]\s*$/, "");
            break;
        }

        node.value = value.replace(/\s+/g, " ");

        if (node.value) {
          const trimmedStart = part.start + rawValue.indexOf(value);
          withLoc(node, {
            start: trimmedStart,
            end: trimmedStart + rawValue.length
          });
        } else {
          body.splice(body.indexOf(node), 1);
        }

        onNext = noop;
      };
    },
    onCDATA(part) {
      pushContent(withLoc(t.markoCDATA(parser.read(part.value)), part));
    },
    onDoctype(part) {
      pushContent(withLoc(t.markoDocumentType(parser.read(part.value)), part));
    },
    onDeclaration(part) {
      pushContent(withLoc(t.markoDeclaration(parser.read(part.value)), part));
    },
    onComment(part) {
      pushContent(withLoc(t.markoComment(parser.read(part.value)), part));
    },
    onPlaceholder(part) {
      pushContent(
        withLoc(
          t.markoPlaceholder(
            parseExpression(file, parser.read(part.value), part.value.start),
            part.escape
          ),
          part
        )
      );
    },
    onScriptlet(part) {
      pushContent(
        withLoc(
          t.markoScriptlet(
            parseScript(file, parser.read(part.value), part.value.start).body
          ),
          part
        )
      );
    },
    onTagName(part) {
      const tagName = parseTemplateString(part);
      const node = t.markoTag(tagName, [], t.markoTagBody());
      let parseType = TagType.html;
      node.start = part.start - (part.concise ? 0 : 1); // Account for leading `<`.
      node.end = part.end;

      if (t.isStringLiteral(tagName)) {
        const literalTagName = tagName.value || (tagName.value = "div");

        if (literalTagName === "%") {
          throw file.buildCodeFrameError(
            tagName,
            "<% scriptlets %> are no longer supported."
          );
        }

        const parseOptions = (node.tagDef = getTagDefForTagName(
          file,
          literalTagName
        ))?.parseOptions;

        if (parseOptions) {
          if (parseOptions.preserveWhitespace) {
            preservingWhitespaceUntil = node;
          }

          if (parseOptions.statement) {
            parseType = TagType.statement;
          } else if (parseOptions.openTagOnly) {
            parseType = TagType.void;
          } else if (parseOptions.text) {
            parseType = TagType.text;
          }
        }
      }

      enterTag(node);
      return parseType;
    },
    onTagShorthandId(part) {
      currentShorthandId = parseTemplateString(part);
    },
    onTagShorthandClass(part) {
      if (currentShorthandClassNames) {
        currentShorthandClassNames.push(parseTemplateString(part));
      } else {
        currentShorthandClassNames = [parseTemplateString(part)];
      }
    },

    onTagVar(part) {
      currentTag.node.var = parseExpression(
        file,
        `${parser.read(part.value)}=1`,
        part.value.start
      ).left;
    },

    onTagParams(part) {
      currentTag.node.body.params = parseExpression(
        file,
        `(${parser.read(part.value)})=>{}`,
        part.start
      ).params;
    },

    onTagArgs(part) {
      currentTag.node.arguments = parseExpression(
        file,
        `_${parser.read(part)}`,
        part.start - 1
      ).arguments;
    },

    onAttrName(part) {
      const [, name, modifier] = /^([^:]*)(?::(.*))?/.exec(parser.read(part));
      endAttr();
      currentTag.node.attributes.push(
        (currentAttr = t.markoAttribute(
          name || "default",
          t.booleanLiteral(true),
          modifier,
          undefined,
          !name
        ))
      );

      currentAttr.start = part.start;
      currentAttr.end = part.end;
    },

    onAttrArgs(part) {
      currentAttr.arguments = parseExpression(
        file,
        `_${parser.read(part)}`,
        part.start - 1
      ).arguments;
      currentAttr.end = part.end;
    },

    onAttrValue(part) {
      currentAttr.end = part.end;
      currentAttr.bound = part.bound;
      currentAttr.value = parseExpression(
        file,
        parser.read(part.value),
        part.value.start
      );
    },

    onAttrMethod(part) {
      const prefix = "function";
      currentAttr.end = part.end;
      currentAttr.value = parseExpression(
        file,
        prefix + parser.read(part),
        part.start - prefix.length
      );
    },

    onAttrSpread(part) {
      endAttr();
      currentTag.node.attributes.push(
        withLoc(
          t.markoSpreadAttribute(
            parseExpression(file, parser.read(part.value), part.value.start)
          ),
          part
        )
      );
    },

    onOpenTagEnd(part) {
      const { node } = currentTag;
      const { attributes } = node;
      const parseOptions = node.tagDef?.parseOptions;
      endAttr();

      if (currentShorthandClassNames) {
        let foundClassAttr = false;
        const classShorthandValue =
          currentShorthandClassNames.length === 1
            ? currentShorthandClassNames[0]
            : currentShorthandClassNames.every(expr => t.isStringLiteral(expr))
            ? withLoc(
                t.stringLiteral(
                  currentShorthandClassNames.map(node => node.value).join(" ")
                ),
                {
                  start: currentShorthandClassNames[0].start,
                  end: currentShorthandClassNames[
                    currentShorthandClassNames.length - 1
                  ].end
                }
              )
            : t.arrayExpression(currentShorthandClassNames);

        for (const attr of attributes) {
          if (attr.name === "class") {
            foundClassAttr = true;
            if (t.isArrayExpression(attr.value)) {
              if (t.isArrayExpression(classShorthandValue)) {
                attr.value.elements.push(...classShorthandValue.elements);
              } else {
                attr.value.elements.push(classShorthandValue);
              }
            } else if (
              t.isStringLiteral(attr.value) &&
              t.isStringLiteral(classShorthandValue)
            ) {
              attr.value.value = `${classShorthandValue.value} ${attr.value.value}`;
            } else if (t.isArrayExpression(classShorthandValue)) {
              classShorthandValue.elements.push(attr.value);
              attr.value = classShorthandValue;
            } else {
              attr.value = t.arrayExpression([classShorthandValue, attr.value]);
            }
            break;
          }
        }

        if (!foundClassAttr) {
          attributes.push(t.markoAttribute("class", classShorthandValue));
        }

        currentShorthandClassNames = undefined;
      }

      if (currentShorthandId) {
        for (const attr of attributes) {
          if (attr.name === "id") {
            throw file.buildCodeFrameError(
              attr,
              "Cannot have shorthand id and id attribute."
            );
          }
        }
        currentTag.node.attributes.push(
          t.markoAttribute("id", currentShorthandId)
        );
        currentShorthandId = undefined;
      }

      if (parseOptions) {
        if (parseOptions.rawOpenTag) {
          node.rawValue = parser.read({
            start: node.name.start,
            end: part.start
          });
        }

        if (
          part.selfClosed ||
          parseOptions.statement ||
          parseOptions.openTagOnly
        ) {
          this.onCloseTag(part);
        }
      } else if (part.selfClosed) {
        this.onCloseTag(part);
      }
    },
    onCloseTag(part) {
      const { node } = currentTag;
      const parserPlugin = node.tagDef?.parser;
      if (preservingWhitespaceUntil === node) {
        preservingWhitespaceUntil = undefined;
      }

      node.end = part.end;
      node.loc = locationAt(node);

      if (parserPlugin) {
        const { hook } = parserPlugin;
        if (parserPlugin.path) watchFiles.push(parserPlugin.path);
        (hook.default || hook)(currentTag, t);
      }

      currentTag = currentTag.parentPath.parentPath;

      if (currentTag) {
        currentBody = currentTag.get("body");
      } else {
        currentTag = currentBody = file.path;
      }

      onNext();
    }
  });

  parser.parse(code);
  onNext();

  const { ast } = file;
  const { program } = ast;
  ast.start = program.start = 0;
  ast.end = program.end = code.length - 1;
  ast.loc = program.loc = {
    start: { line: 1, column: 0 },
    end: positionAt(ast.end)
  };
}
