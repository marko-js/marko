// components/class-script.marko
var import_vdom = require_vdom();
var import_renderer = /* @__PURE__ */ __toESM(require_renderer());
var import_registry = require_registry();
var import_defineComponent = /* @__PURE__ */ __toESM(require_defineComponent());
const _marko_componentType = "__tests__/components/class-script.marko", _marko_template = (0, import_vdom.t)(_marko_componentType);
(0, import_registry.r)(_marko_componentType, () => _marko_template);
const _marko_component = {};
_marko_template._ = (0, import_renderer.default)(function(input, out, _componentDef, _component, state, $global) {
	out.script("window.__classInteropScript = true");
	out.be("div", { "id": "class-api" }, "0", _component, null, 1);
	out.t("class content", _component);
	out.ee();
}, {
	t: _marko_componentType,
	i: true,
	d: true
}, _marko_component);
_marko_template.Component = (0, import_defineComponent.default)(_marko_component, _marko_template._);

// template.marko
const $template = "<div id=tags-api> </div><!><!>";
const $walks = "D l%c";
const $n = /*@__PURE__*/ _let("n/2", ($scope) => _text($scope["#text/0"], $scope.n));
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/1");
function $setup($scope) {
	$n($scope, 0);
	$dynamicTag($scope, _marko_template);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);

// v:template.marko.hydrate-6.js
var v_template_marko_hydrate_6_default = () => {};

// v:template.marko.hydrate-5.js
var v_template_marko_hydrate_5_default = () => {};
