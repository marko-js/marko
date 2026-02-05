"use strict";

exports.__esModule = true;
exports.default = void 0;
var _index = require("marko/src/runtime/html/index.js");
var _index2 = _interopRequireDefault(require("./components/tag-a/index.marko"));
var _index3 = _interopRequireDefault(require("./components/tag-b/index.marko"));
var _dynamicTag = _interopRequireDefault(require("marko/src/runtime/helpers/dynamic-tag.js"));
var _attr = _interopRequireDefault(require("marko/src/runtime/html/helpers/attr.js"));
var _renderTag = _interopRequireDefault(require("marko/src/runtime/helpers/render-tag.js"));
var _renderer = _interopRequireDefault(require("marko/src/runtime/components/renderer.js"));
function _interopRequireDefault(e) { return (e && e.__esModule ? e : { default: e }); }
const _marko_componentType = "__tests__/template.marko",
  _marko_template = (0, _index.t)(_marko_componentType);
var _default = exports.default = _marko_template;
const _marko_component = {};
_marko_template._ = (0, _renderer.default)(function (input, out, _componentDef, _component, state, $global) {
  (0, _dynamicTag.default)(out, input, () => ({
    "class": ["a", "b"],
    "other": input.other
  }), null, null, null, _componentDef, "0");
  (0, _dynamicTag.default)(out, input.x, () => ({
    "class": ["a", "b"],
    "other": input.other
  }), null, null, null, _componentDef, "1");
  const _tagName = input.show ? "div" : null;
  if (_tagName) out.w(`<${_tagName} class="a b"${(0, _attr.default)("other", input.other)}></${_tagName}>`);
  const _tagName2 = input.show ? "div" : null;
  if (_tagName2) out.w(`<${_tagName2} class="a b"${(0, _attr.default)("other", input.other)}>`);else out.bf("f_3", _component, 1);
  out.w("Body Content");
  if (_tagName2) out.w(`</${_tagName2}>`);else out.ef();
  const _tagName3 = input.show && "div";
  if (_tagName3) out.w(`<${_tagName3} class="a b"${(0, _attr.default)("other", input.other)}></${_tagName3}>`);
  const _tagName4 = input.large ? "h1" : "h2";
  out.w(`<${_tagName4} class="a b"${(0, _attr.default)("other", input.other)}></${_tagName4}>`);
  const _tagName5 = input.showTagA ? _index2.default : _index3.default;
  (0, _renderTag.default)(_tagName5, {
    "class": ["a", "b"],
    "other": input.other,
    "class": ["a", "b"],
    "other": input.other
  }, out, _componentDef, "6");
  const _tagName6 = input.showTagA && _index2.default;
  if (_tagName6) (0, _renderTag.default)(_tagName6, {
    "class": ["a", "b"],
    "other": input.other
  }, out, _componentDef, "7");
  const _tagName7 = input.showTagA && _index2.default;
  const _renderBody = out => {
    out.w("Body content");
  };
  if (_tagName7) (0, _renderTag.default)(_tagName7, {
    "class": ["a", "b"],
    "other": input.other,
    "renderBody": _renderBody
  }, out, _componentDef, "8");else _renderBody(out);
  (0, _dynamicTag.default)(out, input.tag || _index2.default, () => ({
    "class": ["a", "b"],
    "other": input.other
  }), null, null, null, _componentDef, "9");
  const largeHeading = input.isLarge && "h1";
  const _tagName8 = largeHeading || "h2";
  if (_tagName8) out.w(`<${_tagName8} class="a b"${(0, _attr.default)("other", input.other)}></${_tagName8}>`);
  const _tagName9 = global.x = "a" + "b";
  out.w(`<${_tagName9} class="a b"${(0, _attr.default)("other", input.other)}></${_tagName9}>`);
  const _tagName0 = "h" + input.level;
  out.w(`<${_tagName0} class="a b"${(0, _attr.default)("other", input.other)}></${_tagName0}>`);
  const _tagName1 = `h${input.level}`;
  out.w(`<${_tagName1} class="a b"${(0, _attr.default)("other", input.other)}></${_tagName1}>`);
  const tagConstA = "a";
  out.w(`<${tagConstA} class="a b"${(0, _attr.default)("other", input.other)}></${tagConstA}>`);
  const tagConstB = input.show ? "div" : null;
  if (tagConstB) out.w(`<${tagConstB} class="a b"${(0, _attr.default)("other", input.other)}></${tagConstB}>`);
  let tagLazyAssign;
  tagLazyAssign = "a";
  if (tagLazyAssign) out.w(`<${tagLazyAssign} class="a b"${(0, _attr.default)("other", input.other)}></${tagLazyAssign}>`);
  tagLazyAssign = input.show ? "div" : null;
  if (tagLazyAssign) out.w(`<${tagLazyAssign} class="a b"${(0, _attr.default)("other", input.other)}></${tagLazyAssign}>`);
}, {
  t: _marko_componentType,
  i: true,
  d: true
}, _marko_component);