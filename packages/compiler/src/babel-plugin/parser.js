import { createParser } from "htmljs-parser";
import parseAttributes from "./util/parse-attributes";
import parseArguments from "./util/parse-arguments";
import parseParams from "./util/parse-params";
import parseIDShorthand from "./util/parse-id-shorthand";
import parseClassnameShorthand from "./util/parse-classname-shorthand";
import { getLocRange } from "./util/get-loc";
import markoModules from "../../modules";
import { types as t } from "@marko/babel-types";

const EMPTY_OBJECT = {};
const EMPTY_ARRAY = [];
const htmlTrimStart = t => t.replace(/^[\n\r]\s*/, "");
const htmlTrimEnd = t => t.replace(/[\n\r]\s*$/, "");
const htmlTrim = t => htmlTrimStart(htmlTrimEnd(t));
const isAttributeTag = node =>
  t.isStringLiteral(node.name) && node.name.value[0] === "@";

export function parse(file) {
  const { code } = file;
  const { htmlParseOptions = {} } = file._markoOptions;
  const pushTagBody = node => getTagBody().pushContainer("body", node);
  const getTagBody = () =>
    currentTag.isProgram() ? currentTag : currentTag.get("body");
  let { preserveWhitespace } = htmlParseOptions;
  let currentTag = file.path;
  let preservingWhitespaceUntil = preserveWhitespace;
  let wasSelfClosing = false;
  let handledTagName = false;
  let onNext;

  const handlers = {
    onDocumentType({ value, pos, endPos }) {
      const node = file.createNode("markoDocumentType", pos, endPos, value);
      pushTagBody(node);
      /* istanbul ignore next */
      onNext = onNext && onNext(node);
    },

    onDeclaration({ value, pos, endPos }) {
      const node = file.createNode("markoDeclaration", pos, endPos, value);
      pushTagBody(node);
      /* istanbul ignore next */
      onNext = onNext && onNext(node);
    },

    onComment({ value, pos, endPos }) {
      const node = file.createNode("markoComment", pos, endPos, value);
      pushTagBody(node);
      onNext = onNext && onNext(node);
    },

    onCDATA({ value, pos, endPos }) {
      const node = file.createNode("markoCDATA", pos, endPos, value);
      pushTagBody(node);
      onNext = onNext && onNext(node);
    },

    onText({ value }, { pos }) {
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
      const node = file.createNode("markoText", pos, endPos, value);
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

    onPlaceholder({ escape, value, withinBody, pos, endPos }) {
      if (withinBody) {
        const node = file.createNode(
          "markoPlaceholder",
          pos,
          endPos,
          file.parseExpression(
            value,
            pos + (escape ? 2 /* ${ */ : 3) /* $!{ */
          ),
          escape
        );

        pushTagBody(node);
        onNext = onNext && onNext(node);
      }
    },

    onScriptlet({ value, line, block, pos, endPos }) {
      if (!line && !block) {
        throw file.buildCodeFrameError(
          { start: pos, end: endPos },
          "<% scriptlets %> are no longer supported."
        );
      }

      pos -= 1; // Include $.
      // Scriptlets are ignored as content and don't call `onNext`.
      pushTagBody(
        file.createNode(
          "markoScriptlet",
          pos,
          endPos,
          file.parse(value, pos + 2 /** Ignores leading `$ ` */).body
        )
      );
    },

    onOpenTagName(event) {
      const { pos, endPos } = event;
      const tagName = event.tagName || "div";
      const [, tagNameExpression] =
        /^\$\{([\s\S]*)\}/.exec(tagName) || EMPTY_ARRAY;
      const tagDef = !tagNameExpression && file._lookup.getTag(tagName);
      const tagNameStartPos = pos + (event.concise ? 0 : 1); // Account for leading `<`.

      handledTagName = true;

      if (tagNameExpression === "") {
        throw file.buildCodeFrameError(
          { start: tagNameStartPos + 1, end: tagNameStartPos + 3 },
          "Missing expression for <${dynamic}> tag."
        );
      }

      const node = file.createNode(
        "markoTag",
        pos,
        endPos,
        tagNameExpression
          ? file.parseExpression(
              tagNameExpression,
              tagNameStartPos + 2 /* ${ */
            )
          : file.createNode(
              "stringLiteral",
              tagNameStartPos,
              tagNameStartPos + tagName.length,
              tagName
            ),
        [],
        t.markoTagBody()
      );

      if (tagDef) {
        node.tagDef = tagDef;

        const { parseOptions } = tagDef;
        if (parseOptions) {
          event.setParseOptions(parseOptions);

          if (parseOptions.rootOnly && !currentTag.isProgram()) {
            throw file.buildCodeFrameError(
              { start: pos, end: endPos },
              `"${tagName}" tags must be at the root of your Marko template.`
            );
          }
        }
      }

      [currentTag] = pushTagBody(node);

      // @tags are not treated as content and do not call next.
      if (!isAttributeTag(node)) {
        onNext = onNext && onNext(node);
      }
    },

    onOpenTag(event, parser) {
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

      if (parseOptions.state === "parsed-text") {
        parser.enterParsedTextContentState();
      } else if (parseOptions.state === "static-text") {
        parser.enterStaticTextContentState();
      }

      if (parseOptions.rawOpenTag) {
        currentTag.set(
          "rawValue",
          parser.substring(pos, endPos).replace(/^<|\/>$|>$/g, "")
        );
      }

      if (!parseOptions.ignoreAttributes) {
        currentTag.set("params", parseParams(file, event.params));
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

    onCloseTag(event, parser) {
      let { pos, endPos } = event;
      const tag = currentTag;
      const { node } = tag;
      const { tagDef } = node;
      const isConcise = code[node.start - 1] !== "<";

      if (preservingWhitespaceUntil === currentTag) {
        preservingWhitespaceUntil = undefined;
      }

      if (!pos) {
        pos = parser.pos;
      }

      if (!endPos) {
        endPos = pos;

        if (wasSelfClosing && !isConcise) {
          endPos += 2; // account for "/>"
        }
      }

      Object.assign(node, getLocRange(code, node.start, endPos));

      if (
        !isConcise &&
        !wasSelfClosing &&
        code[pos + 1] !== "/" &&
        !currentTag.get("name").isStringLiteral()
      ) {
        throw file.buildCodeFrameError(
          { start: pos, end: endPos },
          `Invalid ending for dynamic tag, expected "</>".`
        );
      }

      if (tagDef && tagDef.nodeFactoryPath) {
        const module = markoModules.require(tagDef.nodeFactoryPath);
        /* istanbul ignore next */
        (module.default || module)(tag, t);
      }

      currentTag = currentTag.parentPath.parentPath || file.path;
    },

    onfinish() {
      onNext = onNext && onNext();
    },

    onError({ message, pos, endPos }) {
      if (message.includes("EOF")) endPos = pos;
      throw file.buildCodeFrameError({ start: pos, end: endPos }, message);
    }
  };

  createParser(handlers, {
    isOpenTagOnly(name) {
      const { parseOptions = EMPTY_OBJECT } =
        file._lookup.getTag(name) || EMPTY_OBJECT;
      return parseOptions.openTagOnly;
    },
    ignoreNonstandardStringPlaceholders: true,
    ...htmlParseOptions
  }).parse(code, file.opts.filename);
}
