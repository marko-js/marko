// total: 67209 (min) 20836 (brotli)
// components/class-layout.marko: 536 (min) 288 (brotli)
var import_vdom = require_vdom();
var import_dynamic_tag = /* @__PURE__ */ __toESM(require_dynamic_tag());
var import_renderer = /* @__PURE__ */ __toESM(require_renderer());
var import_registry = require_registry();
var import_defineComponent = /* @__PURE__ */ __toESM(require_defineComponent());
const _marko_componentType = "b", _marko_template = (0, import_vdom.t)(_marko_componentType);
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
}, { t: _marko_componentType }, _marko_component);
_marko_template.Component = (0, import_defineComponent.default)(_marko_component, _marko_template._);

// template.marko: 202 (min) 147 (brotli)
const $classlayout_content__count__script = _script("a1", ($scope) => _on($scope.a, "click", function() {
	$count($scope._, $scope._.b + 1);
}));
const $classlayout_content__count = /* @__PURE__ */ _closure_get(1, ($scope) => {
	_text($scope.b, $scope._.b);
	$classlayout_content__count__script($scope);
});
const $classlayout_content = _content_resume("a0", "<button id=tags> </button>", " D l", $classlayout_content__count);
const $count = /* @__PURE__ */ _let(1, /* @__PURE__ */ _closure($classlayout_content__count));

// v:template.marko.hydrate-6.js: 0 (min) 1 (brotli)
var v_template_marko_hydrate_6_default = () => init$1();

// v:template.marko.hydrate-5.js: 21 (min) 19 (brotli)
var import_components = require_components();
var v_template_marko_hydrate_5_default = () => (0, import_components.init)();
