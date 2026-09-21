// components/class-layout.marko
var import_vdom = require_vdom();
var import_dynamic_tag = /* @__PURE__ */ __toESM(require_dynamic_tag());
var import_renderer = /* @__PURE__ */ __toESM(require_renderer());
var import_registry = require_registry();
var import_defineComponent = /* @__PURE__ */ __toESM(require_defineComponent());
const _marko_componentType$1 = "b", _marko_template$1 = (0, import_vdom.t)(_marko_componentType$1);
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
}, { t: _marko_componentType$1 }, _marko_component$1);
_marko_template$1.Component = (0, import_defineComponent.default)(_marko_component$1, _marko_template$1._);

// components/class-static.marko
var import_const_element = /* @__PURE__ */ __toESM(require_const_element());
const _marko_componentType = "c", _marko_template = (0, import_vdom.t)(_marko_componentType);
const _marko_node = (0, import_const_element.default)("span", { "id": "static" }, 1).t("class");
(0, import_registry.r)(_marko_componentType, () => _marko_template);
const _marko_component = {};
_marko_template._ = (0, import_renderer.default)(function(input, out, _componentDef, _component, state, $global) {
	out.n(_marko_node, _component);
}, { t: _marko_componentType }, _marko_component);
_marko_template.Component = (0, import_defineComponent.default)(_marko_component, _marko_template._);

// template.marko
const $inputuseClassClassLayoutsection_content__count = /*@__PURE__*/ _closure_get(6, ($scope) => _text($scope.b, $scope._.f));
const $inputuseClassClassLayoutsection_content__setup__script = _script("a1", ($scope) => _on($scope.a, "click", function() {
	$count($scope._, +$scope._.f + 1);
}));
const $inputuseClassClassLayoutsection_content__setup = ($scope) => {
	$inputuseClassClassLayoutsection_content__count($scope);
	$inputuseClassClassLayoutsection_content__setup__script($scope);
};
const $inputuseClassClassLayoutsection_content = _content_resume("a0", "<button id=tags> </button>", " D ", $inputuseClassClassLayoutsection_content__setup);
const $count = /*@__PURE__*/ _let(5, /* @__PURE__ */ _closure($inputuseClassClassLayoutsection_content__count));

// v:template.marko.hydrate-6.js
var v_template_marko_hydrate_6_default = () => init$1();

// v:template.marko.hydrate-5.js
var import_components = require_components();
var v_template_marko_hydrate_5_default = () => (0, import_components.init)();
