// components/tags-leaf.marko
var import_vdom = require_vdom();
const $template$1 = "<button> </button>";
const $walks$1 = " D l";
const $count = /*@__PURE__*/ _let(2, ($scope) => _text($scope.b, $scope.c));
const $setup__script = _script("d0", ($scope) => {
	_on($scope.a, "click", function() {
		$count($scope, +$scope.c + 1);
	});
	console.log("leaf effect");
});
function $setup$1($scope) {
	$count($scope, 0);
	$setup__script($scope);
}
var tags_leaf_default = /*@__PURE__*/ _template("d", $template$1, $walks$1, $setup$1);

// components/class-inner.marko
var import_dynamic_tag = /* @__PURE__ */ __toESM(require_dynamic_tag());
var import_attr_tag = require_attr_tag();
var import_renderer = /* @__PURE__ */ __toESM(require_renderer());
var import_render_tag = /* @__PURE__ */ __toESM(require_render_tag());
var import_renderer$1 = /* @__PURE__ */ __toESM(require_renderer$1());
var import_registry = require_registry();
var import_defineComponent = /* @__PURE__ */ __toESM(require_defineComponent());
const _marko_componentType$1 = "b";
const _marko_template$1 = (0, import_vdom.t)(_marko_componentType$1);
(0, import_registry.r)(_marko_componentType$1, () => _marko_template$1);
const _marko_component$1 = {};
_marko_template$1._ = (0, import_renderer$1.default)(function(input, out, _componentDef, _component, state, $global) {
	(0, import_render_tag.default)(import_renderer.default, (0, import_attr_tag.i)(() => {
		(0, import_attr_tag.a)("then", { "renderBody": (out, value) => {
			out.be("div", { "id": "inner" }, "1", _component, null, 1);
			out.t(value, _component);
			out.ee();
			(0, import_dynamic_tag.default)(out, tags_leaf_default, null, null, null, null, _componentDef, "2");
		} });
	}, {
		"_provider": resolveAfter("inner", 2),
		"_name": "resolveAfter(\"inner\", 2)"
	}), out, _componentDef, "0");
}, {
	t: _marko_componentType$1,
	i: true
}, _marko_component$1);
_marko_template$1.Component = (0, import_defineComponent.default)(_marko_component$1, _marko_template$1._);

// components/tags-middle.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
function $setup($scope) {
	$dynamicTag($scope, _marko_template$1);
}
var tags_middle_default = /*@__PURE__*/ _template("e", $template, "b%c", $setup);

// components/class-outer.marko
const _marko_componentType = "c";
const _marko_template = (0, import_vdom.t)(_marko_componentType);
(0, import_registry.r)(_marko_componentType, () => _marko_template);
const _marko_component = {};
_marko_template._ = (0, import_renderer$1.default)(function(input, out, _componentDef, _component, state, $global) {
	out.be("div", { "id": "outer" }, "0", _component, null, 1);
	(0, import_dynamic_tag.default)(out, tags_middle_default, null, null, null, null, _componentDef, "1");
	out.ee();
}, {
	t: _marko_componentType,
	i: true
}, _marko_component);
_marko_template.Component = (0, import_defineComponent.default)(_marko_component, _marko_template._);

// template.marko
const $catch_content__err_message = ($scope, err_message) => _text($scope.a, err_message);
const $catch_content__$params = ($scope, $params2) => $catch_content__err_message($scope, $params2[0]?.message);
const $catch_content = _content("a0", "caught <!>", "b%", 0, $catch_content__$params);

// v:template.marko.hydrate-6.js
var v_template_marko_hydrate_6_default = () => init();

// v:template.marko.hydrate-5.js
var v_template_marko_hydrate_5_default = () => {};
