// template.marko
var import_vdom = require_vdom();
var import_attr_tag = require_attr_tag();
var import_renderer = /* @__PURE__ */ __toESM(require_renderer());
var import_render_tag = /* @__PURE__ */ __toESM(require_render_tag());
var import_dynamic_tag = /* @__PURE__ */ __toESM(require_dynamic_tag());
var import_renderer$1 = /* @__PURE__ */ __toESM(require_renderer$1());
var import_registry = require_registry();
var import_defineComponent = /* @__PURE__ */ __toESM(require_defineComponent());
const _marko_componentType = "__tests__/template.marko";
const _marko_template = (0, import_vdom.t)(_marko_componentType);
(0, import_registry.r)(_marko_componentType, () => _marko_template);
const _marko_component = {};
_marko_template._ = (0, import_renderer$1.default)(function(input, out, _componentDef, _component, state, $global) {
	(0, import_dynamic_tag.default)(out, tags_child_default, () => (0, import_attr_tag.i)(() => {
		(0, import_attr_tag.a)("foo", { "content": (out) => {
			(0, import_render_tag.default)(import_renderer.default, (0, import_attr_tag.i)(() => {
				(0, import_attr_tag.a)("then", { "renderBody": (out, value) => {
					out.be("b", null, "2", _component, null, 0);
					out.t(value, _component);
					out.ee();
				} });
			}, {
				"_provider": resolveAfter("hi", 1),
				"_name": "resolveAfter(\"hi\", 1)"
			}), out, _componentDef, "1");
		} });
	}), null, null, null, _componentDef, "0");
}, {
	t: _marko_componentType,
	i: true,
	d: true
}, _marko_component);
_marko_template.Component = (0, import_defineComponent.default)(_marko_component, _marko_template._);

// v:template.marko.hydrate-6.js
var v_template_marko_hydrate_6_default = ($_) => init();

// v:template.marko.hydrate-5.js
var v_template_marko_hydrate_5_default = () => {};

// components/tags-child.marko
const $template = "<div><!></div><section></section>";
const $walks = "D%l b";
const $setup = ($_) => {};
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_foo_content = $dynamicTag;
const $input_foo__script = _script("__tests__/components/tags-child.marko_0_input_foo#4", ($scope) => _attrs_script($scope, "#section/1"));
const $input_foo = /*@__PURE__*/ _const("input_foo", ($scope) => {
	_attrs_content($scope, "#section/1", $scope.input_foo);
	$input_foo_content($scope, $scope.input_foo?.content);
	$input_foo__script($scope);
});
const $input = ($scope, input) => $input_foo($scope, input.foo);
var tags_child_default = /*@__PURE__*/ _template("__tests__/components/tags-child.marko", $template, $walks, 0, $input);
