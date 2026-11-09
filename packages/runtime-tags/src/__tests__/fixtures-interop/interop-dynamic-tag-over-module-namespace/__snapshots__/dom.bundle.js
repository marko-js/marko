// components/tags-a.marko
var import_vdom = require_vdom();
var tags_a_exports = /* @__PURE__ */ __exportAll({
	$input: () => $input$2,
	$input_label: () => $input_label$1,
	$setup: () => $setup$1,
	$template: () => $template$2,
	$walks: () => $walks$2,
	default: () => tags_a_default
});
const $template$2 = "<button id=a>a <!> <!></button>";
const $walks$2 = " Db%c%l";
const $n = /*@__PURE__*/ _let(6, ($scope) => _text($scope.c, $scope.g));
const $setup__script = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$n($scope, +$scope.g + 1);
}));
function $setup$1($scope) {
	$n($scope, 0);
	$setup__script($scope);
}
const $input_label$1 = ($scope, input_label) => _text($scope.b, input_label);
const $input$2 = ($scope, input) => $input_label$1($scope, input.label);
var tags_a_default = /*@__PURE__*/ _template("b", $template$2, $walks$2, $setup$1, $input$2);

// components/tags-b.marko
var tags_b_exports = /* @__PURE__ */ __exportAll({
	$input: () => $input$1,
	$input_label: () => $input_label,
	$setup: () => $setup,
	$template: () => $template$1,
	$walks: () => $walks$1,
	default: () => tags_b_default
});
const $template$1 = "<b id=b>b <!></b>";
const $walks$1 = "Db%l";
const $setup = ($_) => {};
const $input_label = ($scope, input_label) => _text($scope.a, input_label);
const $input$1 = ($scope, input) => $input_label($scope, input.label);
var tags_b_default = /*@__PURE__*/ _template("c", $template$1, $walks$1, 0, $input$1);

// components/tags-namespace.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $input_which__OR__input_count = /*@__PURE__*/ _or(5, ($scope) => $dynamicTag($scope, $scope.d ? tags_a_exports : tags_b_exports, ($_) => ({ label: $scope.e })));
const $input_which = /*@__PURE__*/ _const(3, $input_which__OR__input_count);
const $input_count = /*@__PURE__*/ _const(4, $input_which__OR__input_count);
const $input = ($scope, input) => {
	$input_which($scope, input.which);
	$input_count($scope, input.count);
};
var tags_namespace_default = /*@__PURE__*/ _template("d", $template, "b%c", 0, $input);

// template.marko
var import_dynamic_tag = /* @__PURE__ */ __toESM(require_dynamic_tag());
var import_renderer = /* @__PURE__ */ __toESM(require_renderer());
var import_registry = require_registry();
var import_defineComponent = /* @__PURE__ */ __toESM(require_defineComponent());
const _marko_componentType = "a";
const _marko_template = (0, import_vdom.t)(_marko_componentType);
(0, import_registry.r)(_marko_componentType, () => _marko_template);
const _marko_component = {
	onCreate() {
		this.state = {
			which: true,
			count: 0
		};
	},
	toggle() {
		this.state.which = !this.state.which;
	},
	increment() {
		this.state.count++;
	}
};
_marko_template._ = (0, import_renderer.default)(function(input, out, _componentDef, _component, state, $global) {
	out.be("button", { "id": "toggle" }, "0", _component, null, 1, { "onclick": _componentDef.d("click", "toggle", false) });
	out.t("toggle", _component);
	out.ee();
	out.be("button", { "id": "increment" }, "1", _component, null, 1, { "onclick": _componentDef.d("click", "increment", false) });
	out.t(state.count, _component);
	out.ee();
	(0, import_dynamic_tag.default)(out, tags_namespace_default, () => ({
		"which": state.which,
		"count": state.count
	}), null, null, null, _componentDef, "2");
}, { t: _marko_componentType }, _marko_component);
_marko_template.Component = (0, import_defineComponent.default)(_marko_component, _marko_template._);
