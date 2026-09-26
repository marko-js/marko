// v:template.marko.hydrate-6.js
var v_template_marko_hydrate_6_default = () => init();

// v:template.marko.hydrate-5.js
var v_template_marko_hydrate_5_default = () => {};

// components/message.marko
var import_vdom = require_vdom();
var import_renderer = /* @__PURE__ */ __toESM(require_renderer());
var import_registry = require_registry();
var import_defineComponent = /* @__PURE__ */ __toESM(require_defineComponent());
const _marko_componentType = "__tests__/components/message.marko", _marko_template = (0, import_vdom.t)(_marko_componentType);
(0, import_registry.r)(_marko_componentType, () => _marko_template);
const _marko_component = {};
_marko_template._ = (0, import_renderer.default)(function(input, out, _componentDef, _component, state, $global) {
	out.be("div", null, "0", _component, null, 0);
	out.t(input.value, _component);
	out.ee();
}, {
	t: _marko_componentType,
	i: true,
	d: true
}, _marko_component);
_marko_template.Component = (0, import_defineComponent.default)(_marko_component, _marko_template._);

// template.marko
const $Greeting_content__walks = "b%c", $Greeting_content__template = "<!><!><!>";
const $template = /*@__PURE__*/ ((_w0) => `<button id=tags> </button>${_w0}<!>`)($Greeting_content__template);
const $walks = /*@__PURE__*/ ((_w0) => ` D l/${_w0}&b`)($Greeting_content__walks);
const $Greeting_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $Greeting_content__setup = /*@__PURE__*/ _child_setup(($scope) => $Greeting_content__dynamicTag($scope, _marko_template, () => ({ value: "Hello World" })));
const $count = /*@__PURE__*/ _let("count/3", ($scope) => _text($scope["#text/1"], $scope.count));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$Greeting_content__setup._($scope["#childScope/2"], $scope);
	$count($scope, 0);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
