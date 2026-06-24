// v:template.marko.hydrate-6.js
var v_template_marko_hydrate_6_default = () => init$1();

// v:template.marko.hydrate-5.js
var import_components = require_components();
var v_template_marko_hydrate_5_default = () => (0, import_components.init)();

// components/message.marko
var import_vdom = require_vdom();
var import_renderer = /* @__PURE__ */ __toESM(require_renderer());
var import_registry = require_registry();
var import_defineComponent = /* @__PURE__ */ __toESM(require_defineComponent());
const _marko_componentType$1 = "__tests__/components/message.marko", _marko_template$1 = (0, import_vdom.t)(_marko_componentType$1);
(0, import_registry.r)(_marko_componentType$1, () => _marko_template$1);
const _marko_component$1 = {};
_marko_template$1._ = (0, import_renderer.default)(function(input, out, _componentDef, _component, state, $global) {
	out.be("div", { "id": "message" }, "0", _component, null, 1);
	out.t(input.value, _component);
	out.ee();
}, {
	t: _marko_componentType$1,
	i: true,
	d: true
}, _marko_component$1);
_marko_template$1.Component = (0, import_defineComponent.default)(_marko_component$1, _marko_template$1._);

// components/class-counter.marko
const _marko_componentType = "__tests__/components/class-counter.marko", _marko_template = (0, import_vdom.t)(_marko_componentType);
(0, import_registry.r)(_marko_componentType, () => _marko_template);
const _marko_component = {
	onCreate() {
		this.state = { count: 0 };
	},
	increment() {
		this.state.count++;
	}
};
_marko_template._ = (0, import_renderer.default)(function(input, out, _componentDef, _component, state, $global) {
	out.be("button", {
		"id": "class",
		"data-parent": input.count
	}, "0", _component, null, 0, { "onclick": _componentDef.d("click", "increment", false) });
	out.t(state.count, _component);
	out.ee();
}, {
	t: _marko_componentType,
	d: true
}, _marko_component);
_marko_template.Component = (0, import_defineComponent.default)(_marko_component, _marko_template._);

// template.marko
const $template = "<button id=tags> </button><!><!><!>";
const $walks = " D l%b%c";
_resume("__tests__/components/class-counter.marko", _marko_template);
const $dynamicTag2 = /*@__PURE__*/ _dynamic_tag("#text/3");
const $count__script = _script("__tests__/template.marko_0_count", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, $scope.count + 1);
}));
const $count = /*@__PURE__*/ _let("count/4", ($scope) => {
	_text($scope["#text/1"], $scope.count);
	$dynamicTag2($scope, _marko_template, () => ({ count: $scope.count }));
	$count__script($scope);
});
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/2");
function $setup($scope) {
	$count($scope, 0);
	$dynamicTag($scope, _marko_template$1, () => ({ value: "Hello World" }));
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
