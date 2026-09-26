// v:template.marko.hydrate-6.js
var v_template_marko_hydrate_6_default = () => init();

// v:template.marko.hydrate-5.js
var import_components = require_components();
var v_template_marko_hydrate_5_default = () => (0, import_components.init)();

// components/class-layout.marko
var import_vdom = require_vdom();
var import_dynamic_tag = /* @__PURE__ */ __toESM(require_dynamic_tag());
var import_renderer = /* @__PURE__ */ __toESM(require_renderer());
var import_registry = require_registry();
var import_defineComponent = /* @__PURE__ */ __toESM(require_defineComponent());
const _marko_componentType$1 = "__tests__/components/class-layout.marko", _marko_template$1 = (0, import_vdom.t)(_marko_componentType$1);
(0, import_registry.r)(_marko_componentType$1, () => _marko_template$1);
const _marko_component$1 = {
	onCreate() {
		this.state = { count: 0 };
	},
	increment() {
		this.state.count++;
	}
};
_marko_template$1._ = (0, import_renderer.default)(function(input, out, _componentDef, _component, state, $global) {
	out.be("button", { "id": "class" }, "0", _component, null, 1, { "onclick": _componentDef.d("click", "increment", false) });
	out.t(state.count, _component);
	out.ee();
	out.be("div", null, "1", _component, null, 0);
	(0, import_dynamic_tag.default)(out, input.renderBody, null, null, null, null, _componentDef, "2");
	out.ee();
}, {
	t: _marko_componentType$1,
	d: true
}, _marko_component$1);
_marko_template$1.Component = (0, import_defineComponent.default)(_marko_component$1, _marko_template$1._);

// components/class-static.marko
const _marko_componentType = "__tests__/components/class-static.marko", _marko_template = (0, import_vdom.t)(_marko_componentType);
(0, import_registry.r)(_marko_componentType, () => _marko_template);
const _marko_component = {};
_marko_template._ = (0, import_renderer.default)(function(input, out, _componentDef, _component, state, $global) {
	out.be("span", { "id": "static" }, "0", _component, null, 1);
	out.t("class", _component);
	out.ee();
}, {
	t: _marko_componentType,
	d: true
}, _marko_component);
_marko_template.Component = (0, import_defineComponent.default)(_marko_component, _marko_template._);

// template.marko
const $template = "<!><!><!><!>";
const $walks = "b%b%c";
const $inputuseClassClassLayoutsection_content__count = /*@__PURE__*/ _closure_get("count/6", ($scope) => _text($scope["#text/1"], $scope._.count), 0, "__tests__/template.marko_1_count#5/subscribe");
const $inputuseClassClassLayoutsection_content__setup__script = _script("__tests__/template.marko_1", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope._, +$scope._.count + 1);
}));
const $inputuseClassClassLayoutsection_content__setup = ($scope) => {
	$inputuseClassClassLayoutsection_content__count($scope);
	$inputuseClassClassLayoutsection_content__setup__script($scope);
};
const $inputuseClassClassLayoutsection_content = _content("__tests__/template.marko_1*content", "<button id=tags> </button>", " D ", $inputuseClassClassLayoutsection_content__setup);
_content_resume($inputuseClassClassLayoutsection_content);
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $count__closure = /*@__PURE__*/ _closure($inputuseClassClassLayoutsection_content__count);
const $count = /*@__PURE__*/ _let("count/5", $count__closure);
function $setup($scope) {
	$dynamicTag($scope, _marko_template);
	$count($scope, 0);
}
const $dynamicTag2 = /*@__PURE__*/ _dynamic_tag("#text/1", $inputuseClassClassLayoutsection_content);
const $input_useClass = ($scope, input_useClass) => $dynamicTag2($scope, input_useClass ? _marko_template$1 : "section");
const $input = ($scope, input) => $input_useClass($scope, input.useClass);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
