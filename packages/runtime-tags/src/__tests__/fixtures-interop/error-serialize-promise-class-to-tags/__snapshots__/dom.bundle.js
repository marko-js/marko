// components/tags-child.marko
var import_vdom = require_vdom();
const $template = "<button id=tags>go</button>";
const $walks = " b";
const $pending = /*@__PURE__*/ _let(1);
const $setup__script = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$scope.b.then((v) => console.log(v));
}));
function $setup($scope) {
	$pending($scope, Promise.resolve("hi"));
	$setup__script($scope);
}
var tags_child_default = /*@__PURE__*/ _template("b", $template, " b", $setup);

// template.marko
var import_dynamic_tag = /* @__PURE__ */ __toESM(require_dynamic_tag());
var import_renderer = /* @__PURE__ */ __toESM(require_renderer());
var import_registry = require_registry();
var import_defineComponent = /* @__PURE__ */ __toESM(require_defineComponent());
const _marko_componentType = "a", _marko_template = (0, import_vdom.t)(_marko_componentType);
(0, import_registry.r)(_marko_componentType, () => _marko_template);
const _marko_component = { onCreate() {
	this.state = { n: 0 };
} };
_marko_template._ = (0, import_renderer.default)(function(input, out, _componentDef, _component, state, $global) {
	out.be("div", { "id": "class" }, "0", _component, null, 1);
	out.t(state.n, _component);
	out.ee();
	(0, import_dynamic_tag.default)(out, tags_child_default, null, null, null, null, _componentDef, "1");
}, { t: _marko_componentType }, _marko_component);
_marko_template.Component = (0, import_defineComponent.default)(_marko_component, _marko_template._);
