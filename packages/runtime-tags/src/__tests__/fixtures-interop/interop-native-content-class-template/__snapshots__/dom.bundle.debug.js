// v:template.marko.hydrate-6.js
var v_template_marko_hydrate_6_default = ($_) => init();

// v:template.marko.hydrate-5.js
var import_components = require_components();
var v_template_marko_hydrate_5_default = () => (0, import_components.init)();

// components/class-thing.marko
var import_vdom = require_vdom();
var import_renderer = /* @__PURE__ */ __toESM(require_renderer());
var import_registry = require_registry();
var import_defineComponent = /* @__PURE__ */ __toESM(require_defineComponent());
const _marko_componentType = "__tests__/components/class-thing.marko";
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
}, {
	t: _marko_componentType,
	d: true
}, _marko_component);
_marko_template.Component = (0, import_defineComponent.default)(_marko_component, _marko_template._);

// components/v:class-thing.marko.register-default.js
_resumed["__tests__/components/class-thing.marko"] = _marko_template;

// template.marko
const $template = "<button id=toggle>toggle</button><button id=tags> </button><!><div></div><!><!>";
const $walks = " b D l%b b%c";
const $if_content__setup = ($scope) => _attr_content($scope, "#section/0", _marko_template);
const $if = /*@__PURE__*/ _if("#text/5", "<section></section>", " ", $if_content__setup);
const $show = /*@__PURE__*/ _let("show/6", ($scope) => $if($scope, $scope.show ? 0 : 1));
const $attrs__script = _script("__tests__/template.marko_0_attrs#8", ($scope) => _attrs_script($scope, "#div/4"));
const $attrs = /*@__PURE__*/ _const("attrs", ($scope) => {
	_attrs_content($scope, "#div/4", $scope.attrs);
	$attrs__script($scope);
});
const $n = /*@__PURE__*/ _let("n/7", ($scope) => {
	_text($scope["#text/2"], $scope.n);
	$attrs($scope, {
		"data-n": $scope.n,
		content: _marko_template
	});
});
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/3");
const $setup__script = _script("__tests__/template.marko_0", ($scope) => {
	_on($scope["#button/0"], "click", function() {
		$show($scope, !$scope.show);
	});
	_on($scope["#button/1"], "click", function() {
		$n($scope, +$scope.n + 1);
	});
});
function $setup($scope) {
	$show($scope, false);
	$n($scope, 0);
	$dynamicTag($scope, _marko_template);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
