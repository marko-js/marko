import { createParser, EventTypes, OpenTagEnding } from "htmljs-parser";
import * as t from "../babel-types";
import {
  withLoc,
  getLoc,
  getLocRange,
  parseScript,
  parseExpression,
  getTagDefForTagName
} from "@marko/babel-utils";

const noop = () => {};
const emptyRange = part => part.start === part.end;
const isAttrTag = tag => tag.name.value?.[0] === "@";

export function parseMarko(file) {
  const { code } = file;
  const { htmlParseOptions = {} } = file.markoOpts;
  const { watchFiles } = file.metadata.marko;
  const parser = createParser(code, file.opts.filename);
  let currentTag = file.path;
  let currentBody = currentTag;
  let currentAttr = undefined;
  let currentShorthandId = undefined;
  let currentShorthandClassNames = undefined;
  let { preserveWhitespace } = htmlParseOptions;
  let preservingWhitespaceUntil = preserveWhitespace;
  let onNext = noop;

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
      withLoc(file, currentAttr, currentAttr.start, currentAttr.end);
      currentAttr = undefined;
    }
  };
  const parseTemplateString = ({ quasis, expressions }) => {
    switch (expressions.length) {
      case 0: {
        const [first] = quasis;
        return withLoc(
          file,
          t.stringLiteral(parser.read(first)),
          first.start,
          first.end
        );
      }
      case 1: {
        if (emptyRange(quasis[0]) && emptyRange(quasis[1])) {
          const [{ value }] = expressions;
          return parseExpression(file, parser.read(value), value.start);
        }
      }
    }

    const [{ start }] = quasis;
    const end = quasis[quasis.length - 1].end - 1;
    return parseExpression(
      file,
      `\`${parser.read({ start, end })}\``,
      start - 1
    );
  };

  for (const part of parser) {
    switch (part.type) {
      case EventTypes.Error:
        throw file.buildCodeFrameError(
          { loc: getLocRange(file, part.start, part.end) },
          part.message
        );

      case EventTypes.Text: {
        const rawValue = parser.read(part);
        const start = part.start;

        if (preservingWhitespaceUntil) {
          pushContent(withLoc(file, t.markoText(rawValue), start, part.end));
          break;
        }

        if (/^(?:[\n\r]\s*)?(?:[\n\r]\s*)?$/.test(rawValue)) break;

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
            const trimmedStart = start + rawValue.indexOf(value);
            withLoc(file, node, trimmedStart, trimmedStart + rawValue.length);
          } else {
            body.splice(body.indexOf(node), 1);
          }

          onNext = noop;
        };
        break;
      }

      case EventTypes.CDATA:
        pushContent(
          withLoc(
            file,
            t.markoCDATA(parser.read(part.value)),
            part.value.start,
            part.value.end
          )
        );
        break;

      case EventTypes.DocType:
        pushContent(
          withLoc(
            file,
            t.markoDocumentType(parser.read(part.value)),
            part.value.start,
            part.value.end
          )
        );
        break;

      case EventTypes.Declaration:
        pushContent(
          withLoc(
            file,
            t.markoDeclaration(parser.read(part.value)),
            part.value.start,
            part.value.end
          )
        );
        break;

      case EventTypes.Comment:
        pushContent(
          withLoc(
            file,
            t.markoComment(parser.read(part.value)),
            part.value.start,
            part.value.end
          )
        );
        break;

      case EventTypes.Placeholder:
        pushContent(
          withLoc(
            file,
            t.markoPlaceholder(
              parseExpression(file, parser.read(part.value), part.value.start),
              part.escape
            ),
            part.start,
            part.end
          )
        );
        break;

      case EventTypes.Scriptlet:
        pushContent(
          withLoc(
            file,
            t.markoScriptlet(
              parseScript(file, parser.read(part.value), part.value.start).body
            ),
            part.start,
            part.end
          )
        );
        break;

      case EventTypes.TagName: {
        const tagStart = part.start - (part.concise ? 0 : 1); // Account for leading `<`.
        let tagName = parseTemplateString(part);
        let tagDef;

        if (t.isStringLiteral(tagName)) {
          if (part.expressions.length) {
            // convert to template literal just so that we don't mistake it for a native tag.
            tagName = t.templateLiteral(
              [
                t.templateElement({
                  raw: tagName.value,
                  cooked: tagName.value
                })
              ],
              []
            );
          } else {
            const literalTagName = tagName.value || (tagName.value = "div");
            if (literalTagName === "%") {
              throw file.buildCodeFrameError(
                tagName,
                "<% scriptlets %> are no longer supported."
              );
            }

            tagDef = getTagDefForTagName(file, literalTagName);
          }
        }

        const node = withLoc(
          file,
          t.markoTag(tagName, [], t.markoTagBody()),
          tagStart,
          part.end
        );

        if (
          !preservingWhitespaceUntil &&
          tagDef?.parseOptions?.preserveWhitespace
        ) {
          preservingWhitespaceUntil = node;
        }

        node.tagDef = tagDef;
        enterTag(node);
        break;
      }

      case EventTypes.TagShorthandId:
        currentShorthandId = parseTemplateString(part);
        break;

      case EventTypes.TagShorthandClass:
        if (currentShorthandClassNames) {
          currentShorthandClassNames.push(parseTemplateString(part));
        } else {
          currentShorthandClassNames = [parseTemplateString(part)];
        }
        break;

      case EventTypes.TagVar:
        currentTag.node.var = parseExpression(
          file,
          `${parser.read(part.value)}=1`,
          part.value.start
        ).left;
        break;

      case EventTypes.TagParams:
        currentTag.node.body.params = parseExpression(
          file,
          `(${parser.read(part.value)})=>{}`,
          part.start
        ).params;
        break;

      case EventTypes.TagArgs:
        currentTag.node.arguments = parseExpression(
          file,
          `_${parser.read(part)}`,
          part.start - 1
        ).arguments;
        break;

      case EventTypes.AttrName: {
        const [, name, modifier] = /^([^:]*)(?::(.*))?/.exec(parser.read(part));
        endAttr();
        currentTag.node.attributes.push(
          (currentAttr = t.markoAttribute(
            part.default ? "default" : name,
            t.booleanLiteral(true),
            modifier,
            undefined,
            part.default
          ))
        );

        currentAttr.start = part.start;
        break;
      }

      case EventTypes.AttrArgs:
        currentAttr.arguments = parseExpression(
          file,
          `_${parser.read(part)}`,
          part.start - 1
        ).arguments;
        currentAttr.end = part.end;
        break;

      case EventTypes.AttrValue:
        currentAttr.end = part.end;
        currentAttr.bound = part.bound;
        currentAttr.value = parseExpression(
          file,
          parser.read(part.value),
          part.value.start
        );
        break;

      case EventTypes.AttrMethod: {
        const prefix = "function";
        currentAttr.end = part.end;
        currentAttr.value = parseExpression(
          file,
          prefix + parser.read(part),
          part.start - prefix.length
        );
        break;
      }

      case EventTypes.AttrSpread:
        endAttr();
        currentTag.node.attributes.push(
          withLoc(
            file,
            t.markoSpreadAttribute(
              parseExpression(file, parser.read(part.value), part.value.start)
            ),
            part.start,
            part.end
          )
        );
        break;

      case EventTypes.OpenTagEnd: {
        const { node } = currentTag;
        const { attributes } = node;
        endAttr();

        if (currentShorthandClassNames) {
          let foundClassAttr = false;
          const classShorthandValue =
            currentShorthandClassNames.length === 1
              ? currentShorthandClassNames[0]
              : currentShorthandClassNames.every(expr =>
                  t.isStringLiteral(expr)
                )
              ? withLoc(
                  file,
                  t.stringLiteral(
                    currentShorthandClassNames.map(node => node.value).join(" ")
                  ),
                  currentShorthandClassNames[0].start,
                  currentShorthandClassNames[
                    currentShorthandClassNames.length - 1
                  ].end
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
                attr.value = t.arrayExpression([
                  classShorthandValue,
                  attr.value
                ]);
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

        if (
          part.ending & OpenTagEnding.code ||
          node.tagDef?.parseOptions?.rawOpenTag
        ) {
          node.rawValue = parser.read({
            start: node.name.start,
            end: part.start
          });
        }
        break;
      }

      case EventTypes.CloseTag: {
        const { node } = currentTag;
        const parserPlugin = node.tagDef?.parser;
        if (preservingWhitespaceUntil === node) {
          preservingWhitespaceUntil = undefined;
        }

        node.end = part.end;
        node.loc.end = getLoc(file, part.end);

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
        break;
      }
    }
  }

  onNext();
}
