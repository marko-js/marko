"use strict";

exports.__esModule = true;
exports.default = void 0;

var _renderer = _interopRequireDefault(require("marko/src/runtime/components/renderer"));

var _html = require("marko/src/runtime/html");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const _marko_template = (0, _html.t)();

var _default = _marko_template;
exports.default = _default;
const _marko_componentType = "packages/translator-default/test/fixtures/svg-tag/template.marko",
      _marko_component = {};
_marko_template._ = (0, _renderer.default)(function (input, out, _component, component, state) {
  out.w("<svg height=100 width=100>");
  out.w("<circle cx=50 cy=50 r=40 stroke=black stroke-width=3 fill=red />");
  out.w("<a></a>");
  out.w("<style>");
  out.w("div { color: green }");
  out.w("</style>");
  out.w("<script>");
  out.w("alert(\"Hello\");");
  out.w("</script>");
  out.w("<title>");
  out.w("Test");
  out.w("</title>");
  out.w("<a xlink:href=https://developer.mozilla.org/ >");
  out.w("<text x=10 y=25>");
  out.w("MDN Web Docs");
  out.w("</text>");
  out.w("</a>");
  out.w("</svg>");
  out.w("<a></a>");
}, {
  t: _marko_componentType,
  i: true,
  d: true
}, _marko_component);