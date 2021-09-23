"use strict";

exports.__esModule = true;
exports.default = void 0;

var _html = require("marko/src/runtime/html");

var _escapeXml = require("marko/src/runtime/html/helpers/escape-xml");

var _toString = _interopRequireDefault(require("marko/src/runtime/helpers/to-string"));

var _renderer = _interopRequireDefault(require("marko/src/runtime/components/renderer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const _marko_componentType = "packages/translator-default/test/fixtures/hello-dynamic/template.marko",
      _marko_template = (0, _html.t)(_marko_componentType);

var _default = _marko_template;
exports.default = _default;
const _marko_component = {};
_marko_template._ = (0, _renderer.default)(function (input, out, _componentDef, _component, state) {
  out.w("Hello ");
  out.w((0, _escapeXml.x)(input.name));
  out.w("! Hello ");
  out.w((0, _toString.default)(input.name));
  out.w("! Hello ");
  out.w((0, _toString.default)(input.missing));
  out.w("!");
}, {
  t: _marko_componentType,
  i: true,
  d: true
}, _marko_component);