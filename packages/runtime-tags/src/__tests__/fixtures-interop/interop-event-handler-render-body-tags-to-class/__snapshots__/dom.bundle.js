// components/my-button.marko
var import_vdom = require_vdom();
var import_dynamic_tag = /* @__PURE__ */ __toESM(require_dynamic_tag());
var import_renderer = /* @__PURE__ */ __toESM(require_renderer());
var import_registry = require_registry();
var import_defineComponent = /* @__PURE__ */ __toESM(require_defineComponent());
const _marko_componentType = "b", _marko_template = (0, import_vdom.t)(_marko_componentType);
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
_resume("b", _marko_template);
_resume_dynamic_tag();
const $mybutton_content__count = /* @__PURE__ */ _closure_get(1, ($scope) => _text($scope.a, $scope._.b));
const $dynamicTag = /* @__PURE__ */ _dynamic_tag(0, _content_resume("a1", " ", " b", $mybutton_content__count));
const $count__closure = /* @__PURE__ */ _closure($mybutton_content__count);
const $count = /* @__PURE__ */ _let(1, ($scope) => {
	$dynamicTag($scope, _marko_template, () => ({ onClick: $onClick($scope) }));
	$count__closure($scope);
});
function $onClick($scope) {
	return function() {
		$count($scope, $scope.b + 1);
	};
}
_resume("a0", $onClick);

// v:template.marko.hydrate-6.js
var v_template_marko_hydrate_6_default = () => init$1();

// v:template.marko.hydrate-5.js
var import_components = require_components();
var v_template_marko_hydrate_5_default = () => (0, import_components.init)();
