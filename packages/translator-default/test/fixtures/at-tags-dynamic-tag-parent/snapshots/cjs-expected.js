"use strict";

exports.__esModule = true;
exports.default = void 0;

var _html = require("marko/src/runtime/html");

var _dynamicTag = _interopRequireDefault(require("marko/src/runtime/helpers/dynamic-tag"));

var _renderer = _interopRequireDefault(require("marko/src/runtime/components/renderer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const _marko_componentType = "packages/translator-default/test/fixtures/at-tags-dynamic-tag-parent/template.marko",
      _marko_template = (0, _html.t)(_marko_componentType);

var _default = _marko_template;
exports.default = _default;
const _marko_component = {};
_marko_template._ = (0, _renderer.default)(function (input, out, _componentDef, _component, state) {
  (0, _dynamicTag.default)(out, input.x, () => ({
    "header": {
      "class": "my-header",
      "renderBody": out => {
        out.w("Header content");
      }
    },
    "footer": {
      "class": "my-footer",
      "renderBody": out => {
        out.w("Footer content");
      }
    }
  }), out => {
    out.w("Body content");
  }, null, null, _componentDef, "0");
}, {
  t: _marko_componentType,
  i: true,
  d: true
}, _marko_component);