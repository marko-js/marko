// v:template.marko.hydrate-6.js
var v_template_marko_hydrate_6_default = () => {};

// components/tags-child.marko
var import_vdom = require_vdom();
const $template = "<button> </button>";
const $walks = " D l";
const $count = /*@__PURE__*/ _let(2, ($scope) => _text($scope.b, $scope.c));
const $setup__script = _script("c0", ($scope) => {
	_on($scope.a, "click", function() {
		$count($scope, +$scope.c + 1);
	});
	console.log("child effect");
});
function $setup($scope) {
	$count($scope, 0);
	$setup__script($scope);
}
var tags_child_default = /*@__PURE__*/ _template("c", $template, $walks, $setup);

// components/class-wrap.marko
var import_dynamic_tag = /* @__PURE__ */ __toESM(require_dynamic_tag());
var import_renderer = /* @__PURE__ */ __toESM(require_renderer());
var import_registry = require_registry();
var import_defineComponent = /* @__PURE__ */ __toESM(require_defineComponent());
const _marko_componentType = "b";
const _marko_template = (0, import_vdom.t)(_marko_componentType);
(0, import_registry.r)(_marko_componentType, () => _marko_template);
const _marko_component = {};
_marko_template._ = (0, import_renderer.default)(function(input, out, _componentDef, _component, state, $global) {
	out.be("div", { "id": "class" }, "0", _component, null, 1);
	(0, import_dynamic_tag.default)(out, tags_child_default, null, null, null, null, _componentDef, "1");
	out.ee();
}, { t: _marko_componentType }, _marko_component);
_marko_template.Component = (0, import_defineComponent.default)(_marko_component, _marko_template._);

// v:template.marko.hydrate-5.js
var v_template_marko_hydrate_5_default = () => (0, import_components.init)();
