// components/message.marko
var import_vdom = require_vdom();
var import_renderer = /* @__PURE__ */ __toESM(require_renderer());
var import_registry = require_registry();
var import_defineComponent = /* @__PURE__ */ __toESM(require_defineComponent());
const _marko_componentType = "b", _marko_template = (0, import_vdom.t)(_marko_componentType);
(0, import_registry.r)(_marko_componentType, () => _marko_template);
const _marko_component = {};
_marko_template._ = (0, import_renderer.default)(function(input, out, _componentDef, _component, state, $global) {
	out.be("div", null, "0", _component, null, 0);
	out.t(input.value, _component);
	out.ee();
}, {
	t: _marko_componentType,
	i: true
}, _marko_component);
_marko_template.Component = (0, import_defineComponent.default)(_marko_component, _marko_template._);

// template.marko
_resume("b", _marko_template);
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $if_content__count = /*@__PURE__*/ _if_closure(3, 0, ($scope) => $if_content__dynamicTag($scope, _marko_template, () => ({ value: $scope._.e })));
const $if_content__setup = $if_content__count;
const $count = /*@__PURE__*/ _let(4, ($scope) => {
	_text($scope, "b", $scope.e);
	$if_content__count($scope);
});
const $if = /*@__PURE__*/ _if(3, "<!><!><!>", "b%", $if_content__setup);
const $show = /*@__PURE__*/ _let(5, ($scope) => $if($scope, $scope.f ? 0 : 1));
const $setup__script = _script("a0", ($scope) => {
	_on($scope.a, "click", function() {
		$count($scope, +$scope.e + 1);
	});
	_on($scope.c, "click", function() {
		$show($scope, !$scope.f);
	});
});

// v:template.marko.hydrate-6.js
var v_template_marko_hydrate_6_default = () => init();

// v:template.marko.hydrate-5.js
var v_template_marko_hydrate_5_default = () => {};
