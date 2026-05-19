// components/class-layout.marko
var import_vdom = require_vdom();
var import_dynamic_tag = /* @__PURE__ */ __toESM(require_dynamic_tag());
var import_renderer = /* @__PURE__ */ __toESM(require_renderer());
var import_registry = require_registry();
var import_defineComponent = /* @__PURE__ */ __toESM(require_defineComponent());
const _marko_componentType = "__tests__/components/class-layout.marko", _marko_template = (0, import_vdom.t)(_marko_componentType);
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
	out.be("button", { "id": "class" }, "0", _component, null, 1, { "onclick": _componentDef.d("click", "increment", false) });
	out.t(state.count, _component);
	out.ee();
	out.be("div", null, "1", _component, null, 0);
	(0, import_dynamic_tag.default)(out, input.renderBody, null, null, null, null, _componentDef, "2");
	out.ee();
}, {
	t: _marko_componentType,
	d: true
}, _marko_component);
_marko_template.Component = (0, import_defineComponent.default)(_marko_component, _marko_template._);

// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $classlayout_content__count__script = _script("__tests__/template.marko_1_count", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope._, $scope._.count + 1);
}));
const $classlayout_content__count = /* @__PURE__ */ _closure_get("count", ($scope) => {
	_text($scope["#text/1"], $scope._.count);
	$classlayout_content__count__script($scope);
});
const $classlayout_content__setup = $classlayout_content__count;
const $classlayout_content = _content_resume("__tests__/template.marko_1_content", "<button id=tags> </button>", " D l", $classlayout_content__setup);
const $count__closure = /* @__PURE__ */ _closure($classlayout_content__count);
const $count = /* @__PURE__ */ _let("count/1", $count__closure);
const $dynamicTag = /* @__PURE__ */ _dynamic_tag("#text/0", $classlayout_content);
function $setup($scope) {
	$count($scope, 0);
	$dynamicTag($scope, _marko_template);
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, "b%c", $setup);

// v:template.marko.hydrate-6.js
var v_template_marko_hydrate_6_default = () => init$1();

// v:template.marko.hydrate-5.js
var import_components = require_components();
var v_template_marko_hydrate_5_default = () => (0, import_components.init)();
