// components/tags-pinger.marko
var import_const_element = /* @__PURE__ */ __toESM(require_const_element());
const $template = "<button id=tags> </button>";
const $walks = " D l";
const $count = /*@__PURE__*/ _let(5, ($scope) => _text($scope.b, $scope.f));
function $setup($scope) {
	$count($scope, 0);
}
const $input_onPing__script = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.f + 1);
	$scope.e($scope.f);
}));
const $input_onPing = /*@__PURE__*/ _const(4, $input_onPing__script);
const $input = ($scope, input) => $input_onPing($scope, input.onPing);
var tags_pinger_default = /*@__PURE__*/ _template("b", $template, $walks, $setup, $input);

// components/class-host/component-browser.js
var import_registry = require_registry();
var import_renderer = /* @__PURE__ */ __toESM(require_renderer());
var import_dynamic_tag = /* @__PURE__ */ __toESM(require_dynamic_tag());
var component_browser_default = class {
	handlePing(count) {
		document.getElementById("class").textContent = "ping:" + count;
	}
};

// components/class-host/index.marko
var import_defineComponent = /* @__PURE__ */ __toESM(require_defineComponent());
const _marko_componentType$1 = "c", _marko_template$1 = (0, import_vdom.t)(_marko_componentType$1);
const _marko_node = (0, import_const_element.default)("div", { "id": "class" }, 1).t("none");
(0, import_registry.r)(_marko_componentType$1, () => component_browser_default);
const _marko_component$1 = {};
component_browser_default.renderer = _marko_template$1._ = (0, import_renderer.default)(function(input, out, _componentDef, _component, state, $global) {
	out.n(_marko_node, _component);
	(0, import_dynamic_tag.default)(out, tags_pinger_default, null, null, null, null, _componentDef, "1", [[
		"ping",
		"handlePing",
		false
	]]);
}, {
	t: _marko_componentType$1,
	s: true
}, _marko_component$1);
_marko_template$1.Component = (0, import_defineComponent.default)(_marko_component$1, _marko_template$1._);

// template.marko
var import_render_tag = /* @__PURE__ */ __toESM(require_render_tag());
const _marko_componentType = "a", _marko_template = (0, import_vdom.t)(_marko_componentType);
(0, import_registry.r)(_marko_componentType, () => _marko_template);
const _marko_component = {};
_marko_template._ = (0, import_renderer.default)(function(input, out, _componentDef, _component, state, $global) {
	(0, import_render_tag.default)(_marko_template$1, {}, out, _componentDef, "0");
}, {
	t: _marko_componentType,
	i: true
}, _marko_component);
_marko_template.Component = (0, import_defineComponent.default)(_marko_component, _marko_template._);

// v:template.marko.hydrate-6.js
var v_template_marko_hydrate_6_default = () => init$1();

// v:template.marko.hydrate-5.js
var import_components = require_components();
(0, import_components.register)("c", component_browser_default);
var v_template_marko_hydrate_5_default = () => (0, import_components.init)();
