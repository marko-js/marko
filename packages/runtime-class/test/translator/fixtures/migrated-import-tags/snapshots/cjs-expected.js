"use strict";

exports.__esModule = true;
exports.default = void 0;
require("marko/src/runtime/helpers/tags-compat/html-debug.js");
var _index = require("marko/src/runtime/html/index.js");
var _foo = _interopRequireDefault(require("./foo.marko"));
var _card = require("./card");
var _tagsChild = _interopRequireDefault(require("./tags-child.marko"));
var _renderTag = _interopRequireDefault(require("marko/src/runtime/helpers/render-tag.js"));
var _dynamicTag = _interopRequireDefault(require("marko/src/runtime/helpers/dynamic-tag.js"));
var _renderer = _interopRequireDefault(require("marko/src/runtime/components/renderer.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const _marko_componentType = "__tests__/template.marko",
  _marko_template = (0, _index.t)(_marko_componentType);
var _default = exports.default = _marko_template;
const _marko_component = {};
_marko_template._ = (0, _renderer.default)(function (input, out, _componentDef, _component, state, $global) {
  (0, _renderTag.default)(_foo.default, {}, out, _componentDef, "0");
  (0, _dynamicTag.default)(out, _card.Card, null, null, null, null, _componentDef, "1");
  (0, _dynamicTag.default)(out, _tagsChild.default, null, null, null, null, _componentDef, "2");
}, {
  t: _marko_componentType,
  i: true,
  d: true
}, _marko_component);