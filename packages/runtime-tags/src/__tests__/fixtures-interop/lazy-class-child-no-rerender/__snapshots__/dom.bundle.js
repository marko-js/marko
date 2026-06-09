// components/child.marko
var import_vdom = require_vdom();
var import_renderer = /* @__PURE__ */ __toESM(require_renderer());
var import_registry = require_registry();
var import_defineComponent = /* @__PURE__ */ __toESM(require_defineComponent());
const _marko_componentType = "b", _marko_template = (0, import_vdom.t)(_marko_componentType);
(0, import_registry.r)(_marko_componentType, () => _marko_template);
const _marko_component = { onMount() {
	console.log("loaded");
} };
_marko_template._ = (0, import_renderer.default)(function(input, out, _componentDef, _component, state, $global) {
	out.be("span", { "id": "child" }, "0", _component, null, 1);
	out.t(input.value, _component);
	out.ee();
}, { t: _marko_componentType }, _marko_component);
_marko_template.Component = (0, import_defineComponent.default)(_marko_component, _marko_template._);
