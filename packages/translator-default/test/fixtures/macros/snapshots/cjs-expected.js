"use strict";

exports.__esModule = true;
exports.default = void 0;

var _escapeXml = require("marko/src/runtime/html/helpers/escape-xml");

var _dynamicTag = _interopRequireDefault(require("marko/src/runtime/helpers/dynamic-tag"));

var _renderer = _interopRequireDefault(require("marko/src/runtime/components/renderer"));

var _html = require("marko/src/runtime/html");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const _marko_template = (0, _html.t)();

var _default = _marko_template;
exports.default = _default;
const _marko_componentType = "packages/translator-default/test/fixtures/macros/template.marko",
      _marko_component = {};
_marko_template._ = (0, _renderer.default)(function (input, out, _component, component, state) {
  function _renderTree(out, node) {
    out.w("Name: ");
    out.w((0, _escapeXml.x)(node.name));
    out.w(" Children: ");

    if (node.children) {
      out.w("<ul>");
      {
        let _keyValue = 0;

        for (const child of node.children) {
          const _keyScope = `[${_keyValue++}]`;
          out.w("<li>");
          (0, _dynamicTag.default)(out, _renderTree, () => child, null, null, null, _component, "3" + _keyScope);
          out.w("</li>");
        }
      }
      out.w("</ul>");
    }
  }

  (0, _dynamicTag.default)(out, _renderTree, () => input.node, null, null, null, _component, "4");
}, {
  t: _marko_componentType,
  i: true,
  d: true
}, _marko_component);