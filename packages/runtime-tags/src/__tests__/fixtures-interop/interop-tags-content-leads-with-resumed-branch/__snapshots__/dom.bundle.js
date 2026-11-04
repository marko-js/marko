// components/my-button.marko
var import_vdom = require_vdom();
var import_dynamic_tag = /* @__PURE__ */ __toESM(require_dynamic_tag());
var import_renderer = /* @__PURE__ */ __toESM(require_renderer());
var import_registry = require_registry();
var import_defineComponent = /* @__PURE__ */ __toESM(require_defineComponent());
const _marko_componentType = "b";
const _marko_template = (0, import_vdom.t)(_marko_componentType);
(0, import_registry.r)(_marko_componentType, () => _marko_template);
const _marko_component = {};
_marko_template._ = (0, import_renderer.default)(function(input, out, _componentDef, _component, state, $global) {
	out.be("button", null, "0", _component, null, 0, { "onclick": _componentDef.d("click", "emit", false, ["click"]) });
	(0, import_dynamic_tag.default)(out, input.renderBody, null, null, null, null, _componentDef, "1");
	out.ee();
}, {
	t: _marko_componentType,
	s: true
}, _marko_component);
_marko_template.Component = (0, import_defineComponent.default)(_marko_component, _marko_template._);

// template.marko
_resumed.b = _marko_template;
const $if_content__count = /*@__PURE__*/ _closure_get(4, ($scope) => _text($scope.a, $scope._._.b), ($scope) => $scope._._, "a1");
const $mybutton_content__if = /*@__PURE__*/ _if(0, " <i></i>", " ", $if_content__count);
const $mybutton_content__show = /*@__PURE__*/ _closure_get(5, ($scope) => $mybutton_content__if($scope, $scope._.c ? 0 : 1), 0, "a3");
const $mybutton_content = _content("a2", "<!><!><!>", "b%", $mybutton_content__show);
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(0, $mybutton_content);
const $count__OR__show = /*@__PURE__*/ _or(3, ($scope) => $dynamicTag($scope, _marko_template, ($_) => ({ onClick: $onClick($scope) })));
const $count__closure = /*@__PURE__*/ _closure($if_content__count);
const $count = /*@__PURE__*/ _let(1, ($scope) => {
	$count__OR__show($scope);
	$count__closure($scope);
});
const $show__closure = /*@__PURE__*/ _closure($mybutton_content__show);
const $show = /*@__PURE__*/ _let(2, ($scope) => {
	$count__OR__show($scope);
	$show__closure($scope);
});
const $onClick = ($scope) => function() {
	$count($scope, +$scope.b + 1);
	$show($scope, !$scope.c);
};
_resumed.a0 = $onClick;

// v:template.marko.hydrate-6.js
var v_template_marko_hydrate_6_default = ($_) => init$1();

// v:template.marko.hydrate-5.js
var import_components = require_components();
var v_template_marko_hydrate_5_default = () => (0, import_components.init)();
