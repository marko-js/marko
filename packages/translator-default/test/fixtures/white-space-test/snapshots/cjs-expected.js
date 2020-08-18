"use strict";

exports.__esModule = true;
exports.default = void 0;

var _escapeXml = require("marko/src/runtime/html/helpers/escape-xml");

var _renderer = _interopRequireDefault(require("marko/src/runtime/components/renderer"));

var _html = require("marko/src/runtime/html");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const _marko_template = (0, _html.t)(__filename);

var _default = _marko_template;
exports.default = _default;
const _marko_componentType = "packages/translator-default/test/fixtures/white-space-test/template.marko",
      _marko_component = {};
_marko_template._ = (0, _renderer.default)(function (input, out, _component, component, state) {
  out.w("<div>");
  out.w("<div>");
  out.w("Hello ");
  out.w("<div>");
  out.w(" ");
  out.w("</div>");
  out.w(" World");
  out.w("</div>");
  out.w("<div>");
  out.w(" Hello");
  out.w("</div>");
  out.w("<pre>");
  out.w("\n    This should  \n      be preserved\n  ");
  out.w("</pre>");
  out.w("<div>");
  out.w("<div>");
  out.w("Hello ");
  out.w("</div>");
  out.w("</div>");
  out.w("</div>");
  out.w("<div>");
  scriptletA();
  scriptletB();
  out.w("Hello ");
  scriptletC();
  out.w("World");
  scriptletD();
  out.w("</div>");
  out.w(" Hello World! ");
  out.w((0, _escapeXml.x)(a));
  out.w((0, _escapeXml.x)(b));
  out.w("<div></div>");
}, {
  t: _marko_componentType,
  i: true
}, _marko_component);