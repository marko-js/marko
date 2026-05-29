// total: 67041 (min) 20797 (brotli)
// components/class-counter.marko: 432 (min) 249 (brotli)
var import_vdom = require_vdom();
var import_renderer = /* @__PURE__ */ __toESM(require_renderer());
var import_registry = require_registry();
var import_defineComponent = /* @__PURE__ */ __toESM(require_defineComponent());
const _marko_componentType = "b", _marko_template = (0, import_vdom.t)(_marko_componentType);
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
	out.be("button", {
		"id": "class",
		"data-parent": input.count
	}, "0", _component, null, 0, { "onclick": _componentDef.d("click", "increment", false) });
	out.t(state.count, _component);
	out.ee();
}, { t: _marko_componentType }, _marko_component);
_marko_template.Component = (0, import_defineComponent.default)(_marko_component, _marko_template._);

// template.marko: 186 (min) 135 (brotli)
_resume("b", _marko_template);
const $dynamicTag = /* @__PURE__ */ _dynamic_tag(2);
const $count__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.d + 1);
}));
const $count = /* @__PURE__ */ _let(3, ($scope) => {
	_text($scope.b, $scope.d);
	$dynamicTag($scope, _marko_template, () => ({ count: $scope.d }));
	$count__script($scope);
});

// v:template.marko.hydrate-6.js: 0 (min) 1 (brotli)
var v_template_marko_hydrate_6_default = () => init$1();

// v:template.marko.hydrate-5.js: 21 (min) 19 (brotli)
var import_components = require_components();
var v_template_marko_hydrate_5_default = () => (0, import_components.init)();
