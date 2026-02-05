"use strict";

exports.__esModule = true;
exports.default = void 0;
var _index = require("marko/src/runtime/html/index.js");
var _initComponentsTag = _interopRequireDefault(require("marko/src/core-tags/components/init-components-tag.js"));
var _renderTag = _interopRequireDefault(require("marko/src/runtime/helpers/render-tag.js"));
var _reordererRenderer = _interopRequireDefault(require("marko/src/core-tags/core/await/reorderer-renderer.js"));
var _preferredScriptLocationTag = _interopRequireDefault(require("marko/src/core-tags/components/preferred-script-location-tag.js"));
var _renderer = _interopRequireDefault(require("marko/src/runtime/components/renderer.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const _marko_componentType = "__tests__/template.marko",
  _marko_template = (0, _index.t)(_marko_componentType);
var _default = exports.default = _marko_template;
const _marko_component = {};
_marko_template._ = (0, _renderer.default)(function (input, out, _componentDef, _component, state, $global) {
  out.w("<!DOCTYPE html>");
  out.w("<html>");
  out.w("<head>");
  out.w("<title>");
  out.w("Title of the document");
  out.w("</title>");
  out.w("</head>");
  out.w("<body>");
  out.w("The content of the document......");
  (0, _renderTag.default)(_initComponentsTag.default, {}, out, _componentDef, "4");
  (0, _renderTag.default)(_reordererRenderer.default, {}, out, _componentDef, "5");
  (0, _renderTag.default)(_preferredScriptLocationTag.default, {}, out, _componentDef, "6");
  out.w("</body>");
  out.w("</html>");
}, {
  t: _marko_componentType,
  i: true,
  d: true
}, _marko_component);