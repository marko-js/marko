"use strict";var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");exports.__esModule = true;exports.default = void 0;var _index = require("marko/src/runtime/vdom/index.js");var _renderer = _interopRequireDefault(require("marko/src/runtime/components/renderer.js"));var _registry = require("marko/src/runtime/components/registry.js");var _defineComponent = _interopRequireDefault(require("marko/src/runtime/components/defineComponent.js"));const _marko_componentType = "packages/runtime-class/test/api-compiler/fixtures/compileFileForBrowser-callback.js/template.marko",_marko_template = (0, _index.t)(_marko_componentType);var _default = exports.default = _marko_template;(0, _registry.r)(_marko_componentType, () => _marko_template);const _marko_component = {};_marko_template._ = (0, _renderer.default)(function (input, out, _componentDef, _component, state, $global) {out.t("Hello ", _component);out.t(input.name, _component);out.t("!", _component);}, { t: _marko_componentType, i: true, d: true }, _marko_component);_marko_template.Component = (0, _defineComponent.default)(_marko_component, _marko_template._);