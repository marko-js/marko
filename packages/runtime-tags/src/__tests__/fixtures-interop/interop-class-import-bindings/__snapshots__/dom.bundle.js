// components/class-card.marko
var import_vdom = require_vdom();
var import_renderer = /* @__PURE__ */ __toESM(require_renderer());
var import_registry = require_registry();
var import_defineComponent = /* @__PURE__ */ __toESM(require_defineComponent());
const _marko_componentType$2 = "b", _marko_template$2 = (0, import_vdom.t)(_marko_componentType$2);
(0, import_registry.r)(_marko_componentType$2, () => _marko_template$2);
const _marko_component$2 = {};
_marko_template$2._ = (0, import_renderer.default)(function(input, out, _componentDef, _component, state, $global) {
	out.be("p", null, "0", _component, null, 0);
	out.t("Card: ", _component);
	out.t(input.label, _component);
	out.ee();
}, { t: _marko_componentType$2 }, _marko_component$2);
_marko_template$2.Component = (0, import_defineComponent.default)(_marko_component$2, _marko_template$2._);

// components/class-default.marko
const _marko_componentType$1 = "c", _marko_template$1 = (0, import_vdom.t)(_marko_componentType$1);
(0, import_registry.r)(_marko_componentType$1, () => _marko_template$1);
const _marko_component$1 = {};
_marko_template$1._ = (0, import_renderer.default)(function(input, out, _componentDef, _component, state, $global) {
	out.be("p", null, "0", _component, null, 0);
	out.t("Default: ", _component);
	out.t(input.label, _component);
	out.ee();
}, { t: _marko_componentType$1 }, _marko_component$1);
_marko_template$1.Component = (0, import_defineComponent.default)(_marko_component$1, _marko_template$1._);

// components/tags-counter.marko
const $template = "<button> </button>";
const $walks = " D l";
const $count = /*@__PURE__*/ _let(6, ($scope) => _text($scope.b, $scope.g));
const $setup__script = _script("d0", ($scope) => _on($scope.a, "click", function() {
	$count($scope, +$scope.g + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$setup__script($scope);
}
const $input_id = ($scope, input_id) => _attr($scope.a, "id", input_id);
const $input_count = ($scope, input_count) => _attr($scope.a, "data-parent", input_count);
const $input = ($scope, input) => {
	$input_id($scope, input.id);
	$input_count($scope, input.count);
};
var tags_counter_default = /*@__PURE__*/ _template("d", $template, $walks, $setup, $input);

// namespace.js
var namespace_exports = /* @__PURE__ */ __exportAll({ render: () => render });
function render(input, out) {
	out.text(`Namespace: ${input.label}`);
}

// template.marko
var import_dynamic_tag = /* @__PURE__ */ __toESM(require_dynamic_tag());
var import_render_tag = /* @__PURE__ */ __toESM(require_render_tag());
const _marko_componentType = "a", _marko_template = (0, import_vdom.t)(_marko_componentType);
(0, import_registry.r)(_marko_componentType, () => _marko_template);
const _marko_component = {
	onCreate() {
		this.state = { count: 0 };
	},
	increment() {
		this.state.count++;
	}
};
_marko_template._ = (0, import_renderer.default)(function(input, out, _componentDef, _component, state, $global) {
	out.be("button", { "id": "class" }, "0", _component, null, 1, { "onclick": _componentDef.d("click", "increment", false) });
	out.t(state.count, _component);
	out.ee();
	(0, import_dynamic_tag.default)(out, _marko_template$2, () => ({ "label": "named" }), null, null, null, _componentDef, "1");
	(0, import_dynamic_tag.default)(out, _marko_template$2, () => ({ "label": "mixed" }), null, null, null, _componentDef, "2");
	(0, import_dynamic_tag.default)(out, _marko_template$2, () => ({ "label": "alias" }), null, null, null, _componentDef, "3");
	(0, import_dynamic_tag.default)(out, _marko_template$2, () => ({ "label": "lowercase" }), null, null, null, _componentDef, "4");
	(0, import_dynamic_tag.default)(out, namespace_exports, () => ({ "label": "namespace" }), null, null, null, _componentDef, "5");
	(0, import_dynamic_tag.default)(out, _marko_template$1, () => ({ "label": "default alias" }), null, null, null, _componentDef, "6");
	(0, import_render_tag.default)(_marko_template$1, { "label": "default" }, out, _componentDef, "7");
	(0, import_dynamic_tag.default)(out, tags_counter_default, () => ({
		"id": "direct",
		"count": state.count
	}), null, null, null, _componentDef, "8");
	(0, import_dynamic_tag.default)(out, tags_counter_default, () => ({
		"id": "named-tags",
		"count": state.count
	}), null, null, null, _componentDef, "9");
}, { t: _marko_componentType }, _marko_component);
_marko_template.Component = (0, import_defineComponent.default)(_marko_component, _marko_template._);
