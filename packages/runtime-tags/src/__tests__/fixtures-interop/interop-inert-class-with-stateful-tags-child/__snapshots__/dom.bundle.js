// tags/tags-counter.marko
var import_vdom = require_vdom();
const $template = "<button id=counter> </button>";
const $walks = " D l";
const $n = /*@__PURE__*/ _let(2, ($scope) => _text($scope.b, $scope.c));
const $setup__script = _script("c0", ($scope) => _on($scope.a, "click", function() {
	$n($scope, +$scope.c + 1);
}));
function $setup($scope) {
	$n($scope, 0);
	$setup__script($scope);
}
var tags_counter_default = /*@__PURE__*/ _template("c", $template, $walks, $setup);

// components/class-wrapper.marko
var import_dynamic_tag = /* @__PURE__ */ __toESM(require_dynamic_tag());
var import_renderer = /* @__PURE__ */ __toESM(require_renderer());
var import_registry = require_registry();
var import_defineComponent = /* @__PURE__ */ __toESM(require_defineComponent());
const _marko_componentType = "b", _marko_template = (0, import_vdom.t)(_marko_componentType);
(0, import_registry.r)(_marko_componentType, () => _marko_template);
const _marko_component = {};
_marko_template._ = (0, import_renderer.default)(function(input, out, _componentDef, _component, state, $global) {
	out.be("div", null, "0", _component, null, 0);
	(0, import_dynamic_tag.default)(out, tags_counter_default, null, null, null, null, _componentDef, "1");
	out.ee();
}, {
	t: _marko_componentType,
	i: true
}, _marko_component);
_marko_template.Component = (0, import_defineComponent.default)(_marko_component, _marko_template._);

// v:template.marko.hydrate-6.js
var v_template_marko_hydrate_6_default = () => init();

// v:template.marko.hydrate-5.js
var v_template_marko_hydrate_5_default = () => {};
