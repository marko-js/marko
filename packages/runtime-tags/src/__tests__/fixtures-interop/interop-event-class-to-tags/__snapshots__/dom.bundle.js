// components/tags-pinger.marko
var import_vdom = require_vdom();
const $template = "<button id=tags> </button>";
const $walks = " D l";
const $count = /*@__PURE__*/ _let(5, ($scope) => _text($scope.b, $scope.f));
const $setup__script = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.f + 1);
	$scope.e($scope.f);
}));
function $setup($scope) {
	$count($scope, 0);
	$setup__script($scope);
}
const $input = ($scope, input) => $input_onPing($scope, input.onPing);
const $input_onPing = /*@__PURE__*/ _const(4);
var tags_pinger_default = /*@__PURE__*/ _template("b", $template, $walks, $setup, $input);

// template.marko
var import_dynamic_tag = /* @__PURE__ */ __toESM(require_dynamic_tag());
var import_renderer = /* @__PURE__ */ __toESM(require_renderer());
var import_registry = require_registry();
var import_defineComponent = /* @__PURE__ */ __toESM(require_defineComponent());
const _marko_componentType = "a", _marko_template = (0, import_vdom.t)(_marko_componentType);
(0, import_registry.r)(_marko_componentType, () => _marko_template);
const _marko_component = {
	onCreate() {
		this.state = { pinged: "none" };
	},
	handlePing(count) {
		this.state.pinged = count;
	}
};
_marko_template._ = (0, import_renderer.default)(function(input, out, _componentDef, _component, state, $global) {
	out.be("div", { "id": "class" }, "0", _component, null, 1);
	out.t(state.pinged, _component);
	out.ee();
	(0, import_dynamic_tag.default)(out, tags_pinger_default, null, null, null, null, _componentDef, "1", [[
		"ping",
		"handlePing",
		false
	]]);
}, { t: _marko_componentType }, _marko_component);
_marko_template.Component = (0, import_defineComponent.default)(_marko_component, _marko_template._);
