// v:template.marko.hydrate-6.js
var v_template_marko_hydrate_6_default = ($_) => init();

// v:template.marko.hydrate-5.js
var v_template_marko_hydrate_5_default = () => {};

// components/async-class.marko
var import_vdom = require_vdom();
var import_renderer = /* @__PURE__ */ __toESM(require_renderer());
var import_registry = require_registry();
var import_defineComponent = /* @__PURE__ */ __toESM(require_defineComponent());
const _marko_componentType = "__tests__/components/async-class.marko";
const _marko_template = (0, import_vdom.t)(_marko_componentType);
(0, import_registry.r)(_marko_componentType, () => _marko_template);
const _marko_component = {};
_marko_template._ = (0, import_renderer.default)(function(input, out, _componentDef, _component, state, $global) {
	out.be("div", { "id": input.id }, "0", _component, null, 1);
	{
		const async = out.beginAsync();
		Promise.resolve().then(() => {
			async.write("done");
			async.end();
		});
	}
	out.ee();
}, {
	t: _marko_componentType,
	i: true,
	d: true
}, _marko_component);
_marko_template.Component = (0, import_defineComponent.default)(_marko_component, _marko_template._);

// template.marko
const $template = "<button id=toggle>toggle</button><!><!>";
const $walks = " b%c";
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $if_content__dynamicTag2 = /*@__PURE__*/ _dynamic_tag("#text/1");
const $if_content__setup = ($scope) => {
	$if_content__dynamicTag($scope, _marko_template, ($_) => ({ id: "a" }));
	$if_content__dynamicTag2($scope, _marko_template, ($_) => ({ id: "b" }));
};
const $if = /*@__PURE__*/ _if("#text/1", "<!><!><!><!>", "b%b%", $if_content__setup);
const $show = /*@__PURE__*/ _let("show/2", ($scope) => $if($scope, $scope.show ? 0 : 1));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$show($scope, !$scope.show);
}));
function $setup($scope) {
	$show($scope, true);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
