// template.marko
const $template = "<!><!><!><!>";
const $walks = "b%b%c";
const $catch_content__err_message = ($scope, err_message) => _text($scope["#text/0"], err_message);
const $catch_content__$params = ($scope, $params2) => $catch_content__err_message($scope, $params2[0]?.message);
const $catch_content = _content("__tests__/template.marko_2*content", "caught <!>", "b%", 0, $catch_content__$params);
const $try_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $try_content__setup = ($scope) => {
	_text($scope["#text/1"], (() => {
		throw new Error("S");
	})());
	$try_content__dynamicTag($scope, _marko_template);
};
const $try = /*@__PURE__*/ _try("#text/0", "<!><!><!>", "b%b%", $try_content__setup, 0, $catch_content);
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/1");
function $setup($scope) {
	$try($scope);
	$dynamicTag($scope, _marko_template);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);

// v:template.marko.hydrate-6.js
var v_template_marko_hydrate_6_default = () => {};

// v:template.marko.hydrate-5.js
var import_components = require_components();
var v_template_marko_hydrate_5_default = () => (0, import_components.init)();

// components/child.marko
var child_exports = /* @__PURE__ */ __exportAll({ default: () => _marko_template });
var import_vdom = require_vdom();
var import_renderer = /* @__PURE__ */ __toESM(require_renderer());
var import_registry = require_registry();
var import_defineComponent = /* @__PURE__ */ __toESM(require_defineComponent());
const _marko_componentType = "__tests__/components/child.marko";
const _marko_template = (0, import_vdom.t)(_marko_componentType);
(0, import_registry.r)(_marko_componentType, () => _marko_template);
const _marko_component = {};
_marko_template._ = (0, import_renderer.default)(function(input, out, _componentDef, _component, state, $global) {
	out.be("span", { "class": "child" }, "0", _component, null, 1);
	out.t(input.value, _component);
	out.ee();
}, {
	t: _marko_componentType,
	d: true
}, _marko_component);
_marko_template.Component = (0, import_defineComponent.default)(_marko_component, _marko_template._);

// components/class-wrap.marko
var import_vdom = require_vdom();
var import_load_tag_browser = /* @__PURE__ */ __toESM(require_load_tag_browser());
var import_render_tag = /* @__PURE__ */ __toESM(require_render_tag());
var import_renderer = /* @__PURE__ */ __toESM(require_renderer());
var import_registry = require_registry();
var import_defineComponent = /* @__PURE__ */ __toESM(require_defineComponent());
const _marko_componentType = "__tests__/components/class-wrap.marko";
const _marko_template = (0, import_vdom.t)(_marko_componentType);
const _marko_load_Child = (0, import_load_tag_browser.default)("__tests__/components/child.marko", () => import("./child.mjs").then((n) => n.t));
(0, import_registry.r)(_marko_componentType, () => _marko_template);
const _marko_component = {};
_marko_template._ = (0, import_renderer.default)(function(input, out, _componentDef, _component, state, $global) {
	out.be("div", { "class": "wrap" }, "0", _component, null, 1);
	(0, import_render_tag.default)(_marko_load_Child, { "value": 1 }, out, _componentDef, "1");
	out.ee();
}, {
	t: _marko_componentType,
	d: true
}, _marko_component);
_marko_template.Component = (0, import_defineComponent.default)(_marko_component, _marko_template._);
