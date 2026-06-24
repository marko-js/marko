// v:template.marko.hydrate-6.js
var v_template_marko_hydrate_6_default = () => init$1();

// v:template.marko.hydrate-5.js
var import_components = require_components();
var v_template_marko_hydrate_5_default = () => (0, import_components.init)();

// components/class-layout.marko
var import_vdom = require_vdom();
var import_dynamic_tag = /* @__PURE__ */ __toESM(require_dynamic_tag());
var import_renderer = /* @__PURE__ */ __toESM(require_renderer());
var import_registry = require_registry();
var import_defineComponent = /* @__PURE__ */ __toESM(require_defineComponent());
const _marko_componentType = "__tests__/components/class-layout.marko", _marko_template = (0, import_vdom.t)(_marko_componentType);
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
	out.be("div", null, "1", _component, null, 0);
	(0, import_dynamic_tag.default)(out, input.renderBody, null, null, [state.count, "hello"], null, _componentDef, "2");
	out.ee();
}, {
	t: _marko_componentType,
	d: true
}, _marko_component);
_marko_template.Component = (0, import_defineComponent.default)(_marko_component, _marko_template._);

// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $classlayout_content__multiplier__OR__baseCount = /*@__PURE__*/ _or(7, ($scope) => _text($scope["#text/4"], $scope._.multiplier * $scope.baseCount));
const $classlayout_content__multiplier__script = _script("__tests__/template.marko_1_multiplier", ($scope) => _on($scope["#button/1"], "click", function() {
	$multiplier($scope._, $scope._.multiplier + 1);
}));
const $classlayout_content__multiplier = /*@__PURE__*/ _closure_get("multiplier", ($scope) => {
	_text($scope["#text/2"], $scope._.multiplier);
	$classlayout_content__multiplier__OR__baseCount($scope);
	$classlayout_content__multiplier__script($scope);
});
const $classlayout_content__setup = $classlayout_content__multiplier;
const $classlayout_content__message = ($scope, message) => _text($scope["#text/0"], message);
const $classlayout_content__baseCount = /*@__PURE__*/ _const("baseCount", ($scope) => {
	_text($scope["#text/3"], $scope.baseCount);
	$classlayout_content__multiplier__OR__baseCount($scope);
});
const $classlayout_content__$params = ($scope, $params2) => {
	$classlayout_content__baseCount($scope, $params2[0]);
	$classlayout_content__message($scope, $params2[1]);
};
const $classlayout_content = _content_resume("__tests__/template.marko_1_content", "<h1> </h1><button id=tags><!> * <!> = <!></button>", "D l D%c%c%l", $classlayout_content__setup, $classlayout_content__$params);
const $multiplier__closure = /*@__PURE__*/ _closure($classlayout_content__multiplier);
const $multiplier = /*@__PURE__*/ _let("multiplier/1", $multiplier__closure);
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0", $classlayout_content);
function $setup($scope) {
	$multiplier($scope, 1);
	$dynamicTag($scope, _marko_template);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", $setup);
