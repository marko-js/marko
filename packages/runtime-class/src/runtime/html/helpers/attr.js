"use strict";

// eslint-disable-next-line no-constant-binary-expression
var complain = "MARKO_DEBUG" && require("complain");

module.exports = attr;

attr.___notEmptyAttr = nonVoidAttr;
attr.___isEmptyAttrValue = isVoid;
attr.a = attrAssignment;
attr.d = escapeDoubleQuotedAttrValue;
attr.s = escapeSingleQuotedAttrValue;

function attr(name, value) {
  return isVoid(value) ? "" : nonVoidAttr(name, value);
}

function nonVoidAttr(name, value) {
  switch (typeof value) {
    case "string":
      return " " + name + attrAssignment(value);
    case "boolean":
      return " " + name;
    case "number":
      return " " + name + "=" + value;
    case "object":
      switch (value.toString) {
        case Object.prototype.toString:
        case Array.prototype.toString:
          // eslint-disable-next-line no-constant-condition
          if ("MARKO_DEBUG") {
            complain(
              "Relying on JSON.stringify for attribute values is deprecated, in future versions of Marko these will be cast to strings instead.",
              { locationIndex: 2 },
            );
          }

          return (
            " " +
            name +
            "='" +
            escapeSingleQuotedAttrValue(JSON.stringify(value)) +
            "'"
          );
        case RegExp.prototype.toString:
          return " " + name + attrAssignment(value.source);
      }
  }

  return " " + name + attrAssignment(value + "");
}

function isVoid(value) {
  return value == null || value === false;
}

var singleQuoteAttrReplacements = /'|&(?=#?\w+;)/g;
var doubleQuoteAttrReplacements = /"|&(?=#?\w+;)/g;
var needsQuotedAttr = /["'>\s]|&#?\w+;|\/$/g;
function attrAssignment(value) {
  return value
    ? needsQuotedAttr.test(value)
      ? value[needsQuotedAttr.lastIndex - 1] ===
        ((needsQuotedAttr.lastIndex = 0), '"')
        ? "='" + escapeSingleQuotedAttrValue(value) + "'"
        : '="' + escapeDoubleQuotedAttrValue(value) + '"'
      : "=" + value
    : "";
}

function escapeSingleQuotedAttrValue(value) {
  return singleQuoteAttrReplacements.test(value)
    ? value.replace(
        singleQuoteAttrReplacements,
        replaceUnsafeSingleQuoteAttrChar,
      )
    : value;
}

function replaceUnsafeSingleQuoteAttrChar(match) {
  return match === "'" ? "&#39;" : "&amp;";
}

function escapeDoubleQuotedAttrValue(value) {
  return doubleQuoteAttrReplacements.test(value)
    ? value.replace(
        doubleQuoteAttrReplacements,
        replaceUnsafeDoubleQuoteAttrChar,
      )
    : value;
}

function replaceUnsafeDoubleQuoteAttrChar(match) {
  return match === '"' ? "&#34;" : "&amp;";
}
