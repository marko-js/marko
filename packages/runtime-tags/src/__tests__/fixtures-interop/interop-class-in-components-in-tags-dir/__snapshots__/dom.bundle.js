// total: 66307 (min) 20435 (brotli)
// tags/components/hello-internal.marko: 335 (min) 193 (brotli)
var import_vdom = require_vdom();
var import_const_element = /* @__PURE__ */ __toESM(require_const_element());
var import_renderer = /* @__PURE__ */ __toESM(require_renderer());
var import_registry = require_registry();
var import_defineComponent = /* @__PURE__ */ __toESM(require_defineComponent());
const _marko_componentType = "c", _marko_template = (0, import_vdom.t)(_marko_componentType);
const _marko_node = (0, import_const_element.default)("h1", null, 1).t("Hello world");
(0, import_registry.r)(_marko_componentType, () => _marko_template);
const _marko_component = {};
_marko_template._ = (0, import_renderer.default)(function(input, out, _componentDef, _component, state, $global) {
	out.n(_marko_node, _component);
}, { t: _marko_componentType }, _marko_component);
_marko_template.Component = (0, import_defineComponent.default)(_marko_component, _marko_template._);

// v:template.marko.hydrate-6.js: 0 (min) 1 (brotli)
var v_template_marko_hydrate_6_default = () => init$1();

// v:template.marko.hydrate-5.js: 21 (min) 19 (brotli)
var import_components = require_components();
var v_template_marko_hydrate_5_default = () => (0, import_components.init)();
