// v:template.marko.hydrate-6.js
var v_template_marko_hydrate_6_default = ($_) => init();

// v:template.marko.hydrate-5.js
var import_components = require_components();
var v_template_marko_hydrate_5_default = () => (0, import_components.init)();

// components/my-button.marko
var import_vdom = require_vdom();
var import_dynamic_tag = /* @__PURE__ */ __toESM(require_dynamic_tag());
var import_renderer = /* @__PURE__ */ __toESM(require_renderer());
var import_registry = require_registry();
var import_defineComponent = /* @__PURE__ */ __toESM(require_defineComponent());
const _marko_componentType = "__tests__/components/my-button.marko";
const _marko_template = (0, import_vdom.t)(_marko_componentType);
(0, import_registry.r)(_marko_componentType, () => _marko_template);
const _marko_component = {};
_marko_template._ = (0, import_renderer.default)(function(input, out, _componentDef, _component, state, $global) {
	out.be("button", null, "0", _component, null, 0, { "onclick": _componentDef.d("click", "emit", false, ["click"]) });
	(0, import_dynamic_tag.default)(out, input.renderBody, null, null, null, null, _componentDef, "1");
	out.ee();
}, {
	t: _marko_componentType,
	s: true,
	d: true
}, _marko_component);
_marko_template.Component = (0, import_defineComponent.default)(_marko_component, _marko_template._);

// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
_resumed["__tests__/components/my-button.marko"] = _marko_template;
const $if_content__count = /*@__PURE__*/ _closure_get("count/4", ($scope) => _text($scope["#text/0"], $scope._._.count), ($scope) => $scope._._, "__tests__/template.marko_2_count#0:1/subscribe");
const $if_content__setup = $if_content__count;
const $mybutton_content__if = /*@__PURE__*/ _if("#text/0", " <i></i>", " ", $if_content__setup);
const $mybutton_content__show = /*@__PURE__*/ _closure_get("show/5", ($scope) => $mybutton_content__if($scope, $scope._.show ? 0 : 1), 0, "__tests__/template.marko_1_show#0:2/subscribe");
const $mybutton_content__setup = $mybutton_content__show;
const $mybutton_content = _content_resume("__tests__/template.marko_1*content", "<!><!><!>", "b%", $mybutton_content__setup);
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0", $mybutton_content);
const $count__OR__show = /*@__PURE__*/ _or(3, ($scope) => $dynamicTag($scope, _marko_template, ($_) => ({ onClick: $onClick($scope) })));
const $count__closure = /*@__PURE__*/ _closure($if_content__count);
const $count = /*@__PURE__*/ _let("count/1", ($scope) => {
	$count__OR__show($scope);
	$count__closure($scope);
});
const $show__closure = /*@__PURE__*/ _closure($mybutton_content__show);
const $show = /*@__PURE__*/ _let("show/2", ($scope) => {
	$count__OR__show($scope);
	$show__closure($scope);
});
function $setup($scope) {
	$count($scope, 0);
	$show($scope, true);
}
const $onClick = ($scope) => function() {
	$count($scope, +$scope.count + 1);
	$show($scope, !$scope.show);
};
_resumed["__tests__/template.marko_0/onClick"] = $onClick;
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", $setup);
