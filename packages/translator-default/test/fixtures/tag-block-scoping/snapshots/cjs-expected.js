"use strict";

exports.__esModule = true;
exports.default = void 0;

var _index = require("marko/src/runtime/html/index.js");

var _attr = _interopRequireDefault(require("marko/src/runtime/html/helpers/attr.js"));

var _renderer = _interopRequireDefault(require("marko/src/runtime/components/renderer.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const _marko_componentType = "packages/translator-default/test/fixtures/tag-block-scoping/template.marko",
      _marko_template = (0, _index.t)(_marko_componentType);

var _default = _marko_template;
exports.default = _default;
const _marko_component = {};
_marko_template._ = (0, _renderer.default)(function (input, out, _componentDef, _component, state) {
  var b = thing;
  let c = thing;
  out.w(`<div${(0, _attr.default)("b", b)}${(0, _attr.default)("c", c)}>`);
  {
    var d = thing;
    let e = thing;
    out.w(`<div${(0, _attr.default)("d", d)}${(0, _attr.default)("e", e)}></div>`);
  }
  out.w("</div>");
}, {
  t: _marko_componentType,
  i: true,
  d: true
}, _marko_component);