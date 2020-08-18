"use strict";

exports.__esModule = true;
exports.default = void 0;

var _index = _interopRequireDefault(require("./components/tag-a/index.marko"));

var _index2 = _interopRequireDefault(require("./components/tag-b/index.marko"));

var _dynamicTag = _interopRequireDefault(require("marko/src/runtime/helpers/dynamic-tag"));

var _renderTag = _interopRequireDefault(require("marko/src/runtime/helpers/render-tag"));

var _renderer = _interopRequireDefault(require("marko/src/runtime/components/renderer"));

var _html = require("marko/src/runtime/html");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const _marko_template = (0, _html.t)(__filename);

var _default = _marko_template;
exports.default = _default;
const _marko_componentType = "packages/translator-default/test/fixtures/dynamic-tag-name/template.marko",
      _marko_component = {};
_marko_template._ = (0, _renderer.default)(function (input, out, _component, component, state) {
  (0, _dynamicTag.default)(out, input, null, null, null, null, _component, "0");
  (0, _dynamicTag.default)(out, input.x, null, null, null, null, _component, "1");

  const _tagName = input.show ? "div" : null;

  if (_tagName) out.w(`<${_tagName}></${_tagName}>`);else out.bf("f_2", component, 1);

  const _tagName2 = input.show && "div";

  if (_tagName2) out.w(`<${_tagName2}></${_tagName2}>`);else out.bf("f_3", component, 1);

  const _tagName3 = input.large ? "h1" : "h2";

  out.w(`<${_tagName3}></${_tagName3}>`);

  const _tagName4 = input.showTagA ? _index.default : _index2.default;

  (0, _renderTag.default)(_tagName4, {}, out, _component, "5");

  const _tagName5 = input.showTagA && _index.default;

  if (_tagName5) (0, _renderTag.default)(_tagName5, {}, out, _component, "6");

  const _tagName6 = input.showTagA && _index.default;

  const _renderBody = out => {
    out.w("Body content");
  };

  if (_tagName6) (0, _renderTag.default)(_tagName6, {
    "renderBody": _renderBody
  }, out, _component, "7");else _renderBody(out);
  (0, _dynamicTag.default)(out, input.tag || _index.default, null, null, null, null, _component, "8");
  const largeHeading = input.isLarge && "h1";

  const _tagName7 = largeHeading || "h2";

  if (_tagName7) out.w(`<${_tagName7}></${_tagName7}>`);else out.bf("f_9", component, 1);

  const _tagName8 = global.x = "a" + "b";

  out.w(`<${_tagName8}></${_tagName8}>`);

  const _tagName9 = "h" + input.level;

  out.w(`<${_tagName9}></${_tagName9}>`);
  const _tagName10 = `h${input.level}`;
  out.w(`<${_tagName10}></${_tagName10}>`);
  const tagConstA = "a";
  out.w(`<${tagConstA}></${tagConstA}>`);
  const tagConstB = input.show ? "div" : null;
  if (tagConstB) out.w(`<${tagConstB}></${tagConstB}>`);else out.bf("f_14", component, 1);
  let tagLazyAssign;
  tagLazyAssign = "a";
  if (tagLazyAssign) out.w(`<${tagLazyAssign}></${tagLazyAssign}>`);else out.bf("f_15", component, 1);
  tagLazyAssign = input.show ? "div" : null;
  if (tagLazyAssign) out.w(`<${tagLazyAssign}></${tagLazyAssign}>`);else out.bf("f_16", component, 1);
}, {
  t: _marko_componentType,
  i: true
}, _marko_component);