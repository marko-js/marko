// components/class-layout.marko
var import_vdom = require_vdom();
var import_dynamic_tag = /* @__PURE__ */ __toESM(require_dynamic_tag());
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
	out.be("button", { "id": "class" }, "0", _component, null, 1, { "onclick": _componentDef.d("click", "increment", false) });
	out.t(state.count, _component);
	out.ee();
	out.be("div", null, "1", _component, null, 0);
	(0, import_dynamic_tag.default)(out, input.renderBody, null, null, [state.count, "hello"], null, _componentDef, "2");
	out.ee();
}, { t: _marko_componentType }, _marko_component);
_marko_template.Component = (0, import_defineComponent.default)(_marko_component, _marko_template._);

// template.marko
const $classlayout_content__multiplier__OR__baseCount = /* @__PURE__ */ _or(7, ($scope) => _text($scope.e, $scope._.b * $scope.g));
const $classlayout_content__multiplier__script = _script("a1", ($scope) => _on($scope.b, "click", function() {
	$multiplier($scope._, $scope._.b + 1);
}));
const $classlayout_content__multiplier = /* @__PURE__ */ _closure_get(1, ($scope) => {
	_text($scope.c, $scope._.b);
	$classlayout_content__multiplier__OR__baseCount($scope);
	$classlayout_content__multiplier__script($scope);
});
const $classlayout_content__setup = $classlayout_content__multiplier;
const $classlayout_content__message = ($scope, message) => _text($scope.a, message);
const $classlayout_content__baseCount = /* @__PURE__ */ _const(6, ($scope) => {
	_text($scope.d, $scope.g);
	$classlayout_content__multiplier__OR__baseCount($scope);
});
const $classlayout_content__$params = ($scope, $params2) => {
	$classlayout_content__baseCount($scope, $params2[0]);
	$classlayout_content__message($scope, $params2[1]);
};
const $classlayout_content = _content_resume("a0", "<h1> </h1><button id=tags><!> * <!> = <!></button>", "D l D%c%c%l", $classlayout_content__setup, $classlayout_content__$params);
const $multiplier = /* @__PURE__ */ _let(1, /* @__PURE__ */ _closure($classlayout_content__multiplier));

// v:template.marko.hydrate-6.js
var v_template_marko_hydrate_6_default = () => init$1();

// v:template.marko.hydrate-5.js
var import_components = require_components();
var v_template_marko_hydrate_5_default = () => (0, import_components.init)();
