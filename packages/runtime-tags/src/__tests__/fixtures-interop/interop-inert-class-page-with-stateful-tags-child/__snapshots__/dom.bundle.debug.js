// v:template.marko.hydrate-6.js
var v_template_marko_hydrate_6_default = () => init();

// v:template.marko.hydrate-5.js
var v_template_marko_hydrate_5_default = () => {};

// components/tags-counter.marko
var import_vdom = require_vdom();
const $template = "<button id=counter> </button>";
const $walks = " D l";
const $n = /*@__PURE__*/ _let("n/2", ($scope) => _text($scope["#text/1"], $scope.n));
const $setup__script = _script("__tests__/components/tags-counter.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$n($scope, +$scope.n + 1);
}));
function $setup($scope) {
	$n($scope, 0);
	$setup__script($scope);
}
var tags_counter_default = /*@__PURE__*/ _template("__tests__/components/tags-counter.marko", $template, $walks, $setup);

// template.marko
var import_dynamic_tag = /* @__PURE__ */ __toESM(require_dynamic_tag());
var import_renderer = /* @__PURE__ */ __toESM(require_renderer());
var import_registry = require_registry();
var import_defineComponent = /* @__PURE__ */ __toESM(require_defineComponent());
const _marko_componentType = "__tests__/template.marko", _marko_template = (0, import_vdom.t)(_marko_componentType);
(0, import_registry.r)(_marko_componentType, () => _marko_template);
const _marko_component = {};
_marko_template._ = (0, import_renderer.default)(function(input, out, _componentDef, _component, state, $global) {
	out.be("div", null, "0", _component, null, 0);
	(0, import_dynamic_tag.default)(out, tags_counter_default, null, null, null, null, _componentDef, "1");
	out.ee();
}, {
	t: _marko_componentType,
	i: true,
	d: true
}, _marko_component);
_marko_template.Component = (0, import_defineComponent.default)(_marko_component, _marko_template._);
