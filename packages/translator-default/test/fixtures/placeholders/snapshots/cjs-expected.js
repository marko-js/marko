"use strict";

exports.__esModule = true;
exports.default = void 0;

var _escapeXml = require("marko/src/runtime/html/helpers/escape-xml");

var _toString = _interopRequireDefault(require("marko/src/runtime/helpers/to-string"));

var _renderer = _interopRequireDefault(require("marko/src/runtime/components/renderer"));

var _html = require("marko/src/runtime/html");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const _marko_template = (0, _html.t)();

var _default = _marko_template;
exports.default = _default;
const _marko_componentType = "packages/translator-default/test/fixtures/placeholders/template.marko",
      _marko_component = {};
_marko_template._ = (0, _renderer.default)(function (input, out, _component, component, state) {
  out.w("<div>");
  out.w((0, _escapeXml.x)(input.x));
  out.w("Hello world &lt;a/>");
  out.w((0, _toString.default)(input.x));
  out.w("Hello world <a/>");
  out.w("<script>");
  out.w("\n    ");
  out.w("Hello <b> \\u003C/script>");
  out.w("\n  ");
  out.w("</script>");
  out.w("<style>");
  out.w("\n    ");
  out.w("Hello <b> \\003C/style>");
  out.w("\n  ");
  out.w("</style>");
  out.w("</div>");
}, {
  t: _marko_componentType,
  i: true,
  d: true
}, _marko_component);