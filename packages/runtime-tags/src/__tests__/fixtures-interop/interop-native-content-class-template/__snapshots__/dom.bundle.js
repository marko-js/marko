// components/class-thing.marko
var import_vdom = require_vdom();
var import_renderer = /* @__PURE__ */ __toESM(require_renderer());
var import_registry = require_registry();
var import_defineComponent = /* @__PURE__ */ __toESM(require_defineComponent());
const _marko_componentType = "b";
const _marko_template = (0, import_vdom.t)(_marko_componentType);
(0, import_registry.r)(_marko_componentType, () => _marko_template);
const _marko_component = {
	onCreate() {
		this.state = { clicks: 0 };
	},
	inc() {
		this.state.clicks++;
	}
};
_marko_template._ = (0, import_renderer.default)(function(input, out, _componentDef, _component, state, $global) {
	out.be("button", { "class": "thing" }, "0", _component, null, 1, { "onclick": _componentDef.d("click", "inc", false) });
	out.t("thing ", _component);
	out.t(state.clicks, _component);
	out.ee();
}, { t: _marko_componentType }, _marko_component);
_marko_template.Component = (0, import_defineComponent.default)(_marko_component, _marko_template._);

// components/v:class-thing.marko.register-default.js
_resumed.b = _marko_template;

// template.marko
const $if_content__setup = ($scope) => _attr_content($scope, "a", _marko_template);
const $if = /*@__PURE__*/ _if(5, "<section></section>", " ", $if_content__setup);
const $show = /*@__PURE__*/ _let(6, ($scope) => $if($scope, $scope.g ? 0 : 1));
const $attrs__script = _script("a0", ($scope) => _attrs_script($scope, "e"));
const $attrs = /*@__PURE__*/ _const(8, ($scope) => {
	_attrs_content($scope, "e", $scope.i);
	$attrs__script($scope);
});
const $n = /*@__PURE__*/ _let(7, ($scope) => {
	_text($scope.c, $scope.h);
	$attrs($scope, {
		"data-n": $scope.h,
		content: _marko_template
	});
});
const $setup__script = _script("a1", ($scope) => {
	_on($scope.a, "click", function() {
		$show($scope, !$scope.g);
	});
	_on($scope.b, "click", function() {
		$n($scope, +$scope.h + 1);
	});
});

// v:template.marko.hydrate-6.js
var v_template_marko_hydrate_6_default = ($_) => init$1();

// v:template.marko.hydrate-5.js
var import_components = require_components();
var v_template_marko_hydrate_5_default = () => (0, import_components.init)();
