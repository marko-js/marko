"use strict";

exports.__esModule = true;
exports.default = void 0;

var _initComponentsTag = _interopRequireDefault(require("../../../../marko/src/core-tags/components/init-components-tag.js"));

var _renderTag = _interopRequireDefault(require("marko/src/runtime/helpers/render-tag"));

var _reordererRenderer = _interopRequireDefault(require("../../../../marko/src/core-tags/core/await/reorderer-renderer.js"));

var _preferredScriptLocationTag = _interopRequireDefault(require("../../../../marko/src/core-tags/components/preferred-script-location-tag.js"));

var _renderer = _interopRequireDefault(require("marko/src/runtime/components/renderer"));

var _html = require("marko/src/runtime/html");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const _marko_template = (0, _html.t)(__filename);

var _default = _marko_template;
exports.default = _default;
const _marko_componentType = "packages/translator-default/test/fixtures/doctype/template.marko",
      _marko_component = {};
_marko_template._ = (0, _renderer.default)(function (input, out, _component, component, state) {
  out.w("<!DOCTYPE html>");
  out.w("<html>");
  out.w("<head>");
  out.w("<title>");
  out.w("Title of the document");
  out.w("</title>");
  out.w("</head>");
  out.w("<body>");
  out.w("The content of the document......");
  (0, _renderTag.default)(_initComponentsTag.default, {}, out, _component, "4");
  (0, _renderTag.default)(_reordererRenderer.default, {}, out, _component, "5");
  (0, _renderTag.default)(_preferredScriptLocationTag.default, {}, out, _component, "6");
  out.w("</body>");
  out.w("</html>");
}, {
  t: _marko_componentType,
  i: true
}, _marko_component);