// components/tags-child.marko
var import_vdom = require_vdom();
const $template = "<button id=tags> </button><div></div>";
const $walks = " D l b";
const $attrs__script = _script("b0", ($scope) => _attrs_script($scope, "c"));
const $attrs = /*@__PURE__*/ _const(7, ($scope) => {
	_attrs_content($scope, "c", $scope.h);
	$attrs__script($scope);
});
const $input__OR__m = /*@__PURE__*/ _or(6, ($scope) => $attrs($scope, {
	...$scope.e,
	"data-m": $scope.f
}));
const $m = /*@__PURE__*/ _let(5, ($scope) => {
	_text($scope.b, $scope.f);
	$input__OR__m($scope);
});
const $setup__script = _script("b1", ($scope) => _on($scope.a, "click", function() {
	$m($scope, +$scope.f + 1);
}));
function $setup($scope) {
	$m($scope, 0);
	$setup__script($scope);
}
const $input = /*@__PURE__*/ _const(4, $input__OR__m);
var tags_child_default = /*@__PURE__*/ _template("b", $template, $walks, $setup, $input);

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
		this.state = { n: 0 };
	},
	inc() {
		this.state.n++;
	}
};
_marko_template._ = (0, import_renderer.default)(function(input, out, _componentDef, _component, state, $global) {
	out.be("button", { "id": "class" }, "0", _component, null, 1, { "onclick": _componentDef.d("click", "inc", false) });
	out.t(state.n, _component);
	out.ee();
	(0, import_dynamic_tag.default)(out, tags_child_default, null, (out) => {
		console.log("content render", state.n);
		out.be("b", null, "2", _component, null, 0);
		out.t("content ", _component);
		out.t(state.n, _component);
		out.ee();
	}, null, null, _componentDef, "1");
}, { t: _marko_componentType }, _marko_component);
_marko_template.Component = (0, import_defineComponent.default)(_marko_component, _marko_template._);
