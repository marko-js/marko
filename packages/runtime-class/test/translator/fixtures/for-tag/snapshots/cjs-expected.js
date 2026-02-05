"use strict";

exports.__esModule = true;
exports.default = void 0;
var _index = require("marko/src/runtime/html/index.js");
var _escapeXml = require("marko/src/runtime/html/helpers/escape-xml.js");
var _ofFallback = _interopRequireDefault(require("marko/src/runtime/helpers/of-fallback.js"));
var _dataMarko = _interopRequireDefault(require("marko/src/runtime/html/helpers/data-marko.js"));
var _renderer = _interopRequireDefault(require("marko/src/runtime/components/renderer.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const _marko_componentType = "__tests__/template.marko",
  _marko_template = (0, _index.t)(_marko_componentType);
var _default = exports.default = _marko_template;
const _marko_component = {};
_marko_template._ = (0, _renderer.default)(function (input, out, _componentDef, _component, state, $global) {
  let _i = 0;
  for (const val of (0, _ofFallback.default)(arr)) {
    let i = _i++;
    const _keyScope = `[${i}]`;
    out.w("<div>");
    out.w((0, _escapeXml.x)(i));
    out.w(": ");
    out.w((0, _escapeXml.x)(val));
    out.w("</div>");
    out.w("<div></div>");
    out.w("<div></div>");
  }
  for (const key in obj) {
    const val = obj[key];
    const _keyScope2 = `[${key}]`;
    out.w("<div>");
    out.w((0, _escapeXml.x)(key));
    out.w(": ");
    out.w((0, _escapeXml.x)(val));
    out.w("</div>");
    out.w("<div></div>");
    out.w("<div></div>");
  }
  for (let _steps = (10 - 0) / 2, _step = 0; _step <= _steps; _step++) {
    const i = 0 + _step * 2;
    const _keyScope3 = `[${i}]`;
    out.w("<div>");
    out.w((0, _escapeXml.x)(i));
    out.w("</div>");
    out.w("<div></div>");
    out.w("<div></div>");
  }
  let _i2 = 0;
  for (const val of (0, _ofFallback.default)(arr)) {
    let i = _i2++;
    const _keyValue = `@${i}`,
      _keyScope4 = `[${_keyValue}]`;
    out.w(`<div${(0, _dataMarko.default)(out, _componentDef, 0, _keyValue)}>`);
    out.w((0, _escapeXml.x)(i));
    out.w(": ");
    out.w((0, _escapeXml.x)(val));
    out.w("</div>");
    out.w("<div></div>");
    out.w(`<div${(0, _dataMarko.default)(out, _componentDef, 0, `@other-${i}`)}></div>`);
  }
  let _i3 = 0;
  const list = arr;
  for (const val of list) {
    let i = _i3++;
    const _keyValue2 = `@${i}`;
    out.w(`<div${(0, _dataMarko.default)(out, _componentDef, 0, _keyValue2)}>`);
    out.w((0, _escapeXml.x)(list.length));
    out.w(": ");
    out.w((0, _escapeXml.x)(val));
    out.w("</div>");
  }
  for (const key in obj) {
    const val = obj[key];
    const _keyValue3 = `@${key}`,
      _keyScope5 = `[${_keyValue3}]`;
    out.w(`<div${(0, _dataMarko.default)(out, _componentDef, 0, _keyValue3)}>`);
    out.w((0, _escapeXml.x)(key));
    out.w(": ");
    out.w((0, _escapeXml.x)(val));
    out.w("</div>");
    out.w("<div></div>");
    out.w(`<div${(0, _dataMarko.default)(out, _componentDef, 0, `@other-${key}`)}></div>`);
  }
  for (let _steps3 = (10 - 0) / 2, _step3 = 0; _step3 <= _steps3; _step3++) {
    const i = 0 + _step3 * 2;
    const _keyValue4 = `@${i}`,
      _keyScope6 = `[${_keyValue4}]`;
    out.w(`<div${(0, _dataMarko.default)(out, _componentDef, 0, _keyValue4)}>`);
    out.w((0, _escapeXml.x)(i));
    out.w("</div>");
    out.w("<div></div>");
    out.w(`<div${(0, _dataMarko.default)(out, _componentDef, 0, `@other-${i}`)}></div>`);
    for (let _steps2 = (10 - 0) / 2, _step2 = 0; _step2 <= _steps2; _step2++) {
      const i = 0 + _step2 * 2;
      const _keyValue5 = `@${i}`,
        _keyScope7 = `[${_keyValue5}]`;
      out.w(`<div${(0, _dataMarko.default)(out, _componentDef, 0, _keyValue5)}>`);
      out.w((0, _escapeXml.x)(i));
      out.w("</div>");
      out.w("<div></div>");
      out.w(`<div${(0, _dataMarko.default)(out, _componentDef, 0, `@other-${i}`)}></div>`);
    }
  }
  for (let _steps4 = (0 - 10) / -2, _step4 = 0; _step4 <= _steps4; _step4++) {
    const i = 10 + _step4 * -2;
    const _keyValue6 = `@${i}`,
      _keyScope8 = `[${_keyValue6}]`;
    out.w(`<div${(0, _dataMarko.default)(out, _componentDef, 0, _keyValue6)}>`);
    out.w((0, _escapeXml.x)(i));
    out.w("</div>");
    out.w("<div></div>");
    out.w(`<div${(0, _dataMarko.default)(out, _componentDef, 0, `@other-${i}`)}></div>`);
  }
  for (let _steps5 = (10 - 0) / 1, _step5 = 0; _step5 <= _steps5; _step5++) {
    out.w("Hello");
  }
  for (let _steps6 = (10 - 0) / 1, _step6 = 0; _step6 <= _steps6; _step6++) {
    out.w("Hello");
  }
}, {
  t: _marko_componentType,
  i: true,
  d: true
}, _marko_component);