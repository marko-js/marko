import { createLegacyParser } from "htmljs-parser";
import parseAttributes from "./util/parse-attributes";
import parseArguments from "./util/parse-arguments";
import parseParams from "./util/parse-params";
import parseVar from "./util/parse-var";
import parseIDShorthand from "./util/parse-id-shorthand";
import parseClassnameShorthand from "./util/parse-classname-shorthand";
import * as t from "../babel-types";
import {
  withLoc,
  getLoc,
  getLocRange,
  parseScript,
  parseExpression,
  getTagDefForTagName
} from "@marko/babel-utils";

const EMPTY_OBJECT = {};
const EMPTY_ARRAY = [];
const htmlTrimStart = t => t.replace(/^[\n\r]\s*/, "");
const htmlTrimEnd = t => t.replace(/[\n\r]\s*$/, "");
const htmlTrim = t => htmlTrimStart(htmlTrimEnd(t));
const isAttributeTag = node =>
  t.isStringLiteral(node.name) && node.name.value[0] === "@";

export function parseMarko(file) {
  const { code } = file;
  const { htmlParseOptions = {} } = file.markoOpts;
  const { watchFiles } = file.metadata.marko;
  const pushTagBody = node => getTagBody().pushContainer("body", node);
  const getTagBody = () =>
    currentTag.isProgram() ? currentTag : currentTag.get("body");
  let currentTag = file.path;
  let { preserveWhitespace } = htmlParseOptions;
  let preservingWhitespaceUntil = preserveWhitespace;
  let wasSelfClosing = false;
  let handledTagName = false;
  let onNext;

  const handlers = {
    onDocumentType({ value, pos, endPos }) {
      const node = withLoc(file, t.markoDocumentType(value), pos, endPos);
      pushTagBody(node);
      /* istanbul ignore next */
      onNext = onNext && onNext(node);
    },

    onDeclaration({ value, pos, endPos }) {
      const node = withLoc(file, t.markoDeclaration(value), pos, endPos);
      pushTagBody(node);
      /* istanbul ignore next */
      onNext = onNext && onNext(node);
    },

    onComment({ value, pos, endPos }) {
      const node = withLoc(file, t.markoComment(value), pos, endPos);
      pushTagBody(node);
      onNext = onNext && onNext(node);
    },

    onCDATA({ value, pos, endPos }) {
      const node = withLoc(file, t.markoCDATA(value), pos, endPos);
      pushTagBody(node);
      onNext = onNext && onNext(node);
    },

    onText({ pos, value }) {
      const shouldTrim = !preservingWhitespaceUntil;
      const { body } = getTagBody().node;

      if (shouldTrim) {
        if (htmlTrim(value) === "") {
          return;
        }

        // Find previous non-scriptlet/@tag.
        let prev;
        let prevIndex = body.length;
        while (prevIndex > 0) {
          prev = body[--prevIndex];

          if (
            t.isMarkoClass(prev) ||
            t.isMarkoComment(prev) ||
            t.isMarkoScriptlet(prev) ||
            isAttributeTag(prev)
          ) {
            prev = undefined;
          } else {
            break;
          }
        }

        if (!prev) {
          const originalValue = value;
          value = htmlTrimStart(value);
          pos += originalValue.indexOf(value);
        } else if (
          t.isMarkoText(prev) &&
          /\s/.test(prev.value[prev.value.length - 1])
        ) {
          const originalValue = value;
          value = value.replace(/^\s+/, "");
          pos += originalValue.indexOf(value);
        }
      }

      const endPos = pos + value.length;
      const node = withLoc(file, t.markoText(value), pos, endPos);
      const prevBody = getTagBody().node.body;
      pushTagBody(node);
      onNext && onNext(node);
      onNext =
        shouldTrim &&
        (next => {
          if (!next || prevBody.indexOf(next) === -1) {
            node.value = htmlTrimEnd(node.value);
          }

          node.value = node.value.replace(/\s+/g, " ");
        });
    },

    onPlaceholder({ escape, value, pos, endPos }) {
      const node = withLoc(
        file,
        t.markoPlaceholder(
          parseExpression(
            file,
            value,
            pos + (escape ? 2 /* ${ */ : 3) /* $!{ */
          ),
          escape
        ),
        pos,
        endPos
      );

      pushTagBody(node);
      onNext = onNext && onNext(node);
    },

    onScriptlet({ value, line, block, pos, endPos }) {
      if (!line && !block) {
        throw file.buildCodeFrameError(
          { loc: getLocRange(file, pos, endPos) },
          "<% scriptlets %> are no longer supported."
        );
      }

      pos -= 1; // Include $.
      // Scriptlets are ignored as content and don't call `onNext`.
      pushTagBody(
        withLoc(
          file,
          t.markoScriptlet(
            parseScript(file, value, pos + 2 /** Ignores leading `$ ` */).body
          ),
          pos,
          endPos
        )
      );
    },

    onOpenTagName(event) {
      const { pos, endPos } = event;
      const tagName = event.tagName || "div";
      const [, tagNameExpression] =
        /^\$\{([\s\S]*)\}/.exec(tagName) || EMPTY_ARRAY;
      const tagDef = !tagNameExpression && getTagDefForTagName(file, tagName);
      const tagNameStartPos = pos + (event.concise ? 0 : 1); // Account for leading `<`.

      handledTagName = true;

      if (tagNameExpression === "") {
        throw file.buildCodeFrameError(
          { loc: getLocRange(file, tagNameStartPos + 1, tagNameStartPos + 3) },
          "Missing expression for <${dynamic}> tag."
        );
      }

      let tagNameNode;

      if (tagNameExpression) {
        tagNameNode = parseExpression(
          file,
          tagNameExpression,
          tagNameStartPos + 2 /* ${ */
        );

        if (t.isStringLiteral(tagNameNode)) {
          // convert to template literal just so that we don't mistake it for a native tag.
          tagNameNode = t.templateLiteral(
            [
              t.templateElement({
                raw: tagNameNode.value,
                cooked: tagNameNode.value
              })
            ],
            []
          );
        }
      } else {
        tagNameNode = withLoc(
          file,
          t.stringLiteral(tagName),
          tagNameStartPos,
          tagNameStartPos + tagName.length
        );
      }

      const node = withLoc(
        file,
        t.markoTag(tagNameNode, [], t.markoTagBody()),
        pos,
        endPos
      );

      node.tagDef = tagDef;

      [currentTag] = pushTagBody(node);

      // @tags are not treated as content and do not call next.
      if (!isAttributeTag(node)) {
        onNext = onNext && onNext(node);
      }
    },

    onOpenTag(event) {
      if (!handledTagName) {
        // There is a bug in htmljs parser where a single top level concise mode tag with nothing else
        // does not emit the openTagNameEvent.
        handlers.onOpenTagName(event);
      }

      handledTagName = false;
      const { pos, endPos, tagNameEndPos } = event;
      const { tagDef } = currentTag.node;
      const parseOptions = (tagDef && tagDef.parseOptions) || EMPTY_OBJECT;
      wasSelfClosing = event.selfClosed;

      if (parseOptions.rawOpenTag) {
        currentTag.set(
          "rawValue",
          code.slice(pos, endPos).replace(/^<|\/>$|>$/g, "")
        );
      }

      if (!parseOptions.ignoreAttributes) {
        currentTag.set("var", parseVar(file, event.var));
        currentTag.get("body").set("params", parseParams(file, event.params));
        currentTag.set("arguments", parseArguments(file, event.argument));
        currentTag.set(
          "attributes",
          parseIDShorthand(
            file,
            event.shorthandId,
            parseClassnameShorthand(
              file,
              event.shorthandClassNames,
              parseAttributes(file, event.attributes, tagNameEndPos)
            )
          )
        );
      }

      if (!preservingWhitespaceUntil && parseOptions.preserveWhitespace) {
        preservingWhitespaceUntil = currentTag;
      }
    },

    onCloseTag(event) {
      let { pos, endPos } = event;
      const tag = currentTag;
      const { node } = tag;
      const { tagDef } = node;
      const isConcise = code[node.start - 1] !== "<";

      if (preservingWhitespaceUntil === currentTag) {
        preservingWhitespaceUntil = undefined;
      }

      node.end = endPos;
      node.loc.end = getLoc(file, endPos);

      if (
        !isConcise &&
        !wasSelfClosing &&
        code[pos + 1] !== "/" &&
        !currentTag.get("name").isStringLiteral()
      ) {
        throw file.buildCodeFrameError(
          { loc: getLocRange(file, pos, endPos) },
          `Invalid ending for dynamic tag, expected "</>".`
        );
      }

      if (tagDef && tagDef.parser) {
        if (tagDef.parser.path) {
          watchFiles.push(tagDef.parser.path);
        }
        /* istanbul ignore next */
        (tagDef.parser.hook.default || tagDef.parser.hook)(tag, t);
      }

      currentTag = currentTag.parentPath.parentPath || file.path;
    },

    onfinish() {
      onNext = onNext && onNext();
    },

    onError({ message, pos, endPos }) {
      if (message.includes("EOF")) endPos = pos;
      throw file.buildCodeFrameError(
        { loc: getLocRange(file, pos, endPos) },
        message
      );
    }
  };

  createLegacyParser(handlers).parse(code, file.opts.filename);
}
