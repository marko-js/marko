"use strict";

exports.__esModule = true;
exports.default = void 0;

var _html = require("marko/src/runtime/html");

var _new2 = _interopRequireDefault(require("./new.marko"));

var _renderTag = _interopRequireDefault(require("marko/src/runtime/helpers/render-tag"));

var _renderer = _interopRequireDefault(require("marko/src/runtime/components/renderer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const _marko_componentType = "packages/translator-default/test/fixtures/custom-tag-migration/template.marko",
      _marko_template = (0, _html.t)(_marko_componentType);

var _default = _marko_template;
exports.default = _default;
const _marko_component = {};
_marko_template._ = (0, _renderer.default)(function (input, out, _component, component, state) {
  (0, _renderTag.default)(_new2.default, {
    "b": "1"
  }, out, _component, "0");
}, {
  t: _marko_componentType,
  i: true,
  d: true
}, _marko_component);