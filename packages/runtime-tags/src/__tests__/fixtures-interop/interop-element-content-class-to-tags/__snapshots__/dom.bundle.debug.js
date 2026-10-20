// components/tags-child.marko
var import_vdom = require_vdom();
var import_attr_tag = require_attr_tag();
const $template$1 = "<div></div><span></span>";
const $walks$1 = " b b";
const $setup$1 = ($_) => {};
const $input_foo__script = _script("__tests__/components/tags-child.marko_0_input_foo#4", ($scope) => _attrs_script($scope, "#div/0"));
const $input_foo$1 = /*@__PURE__*/ _const("input_foo", ($scope) => {
	_attrs_content($scope, "#div/0", $scope.input_foo);
	$input_foo__script($scope);
});
const $input_content = ($scope, input_content) => _attr_content($scope, "#span/1", input_content);
const $input$1 = ($scope, input) => {
	$input_foo$1($scope, input.foo);
	$input_content($scope, input.content);
};
var tags_child_default = /*@__PURE__*/ _template("__tests__/components/tags-child.marko", $template$1, $walks$1, 0, $input$1);

// components/tags-dynamic-child.marko
var import_dynamic_tag = /* @__PURE__ */ __toESM(require_dynamic_tag());
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = ($_) => {};
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_tag__OR__input_foo = /*@__PURE__*/ _or(5, ($scope) => $dynamicTag($scope, $scope.input_tag, ($_) => $scope.input_foo));
const $input_tag = /*@__PURE__*/ _const("input_tag", $input_tag__OR__input_foo);
const $input_foo = /*@__PURE__*/ _const("input_foo", $input_tag__OR__input_foo);
const $input = ($scope, input) => {
	$input_tag($scope, input.tag);
	$input_foo($scope, input.foo);
};
var tags_dynamic_child_default = /*@__PURE__*/ _template("__tests__/components/tags-dynamic-child.marko", $template, "b%c", 0, $input);

// template.marko
var import_renderer = /* @__PURE__ */ __toESM(require_renderer());
var import_registry = require_registry();
var import_defineComponent = /* @__PURE__ */ __toESM(require_defineComponent());
const _marko_componentType = "__tests__/template.marko";
const _marko_template = (0, import_vdom.t)(_marko_componentType);
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
	out.t("increment", _component);
	out.ee();
	(0, import_dynamic_tag.default)(out, tags_child_default, () => (0, import_attr_tag.i)(() => {
		(0, import_attr_tag.a)("foo", { "content": (out) => {
			out.t("body text ", _component);
			out.t(state.count, _component);
		} });
		return (out) => {
			out.t("outer text ", _component);
			out.t(state.count, _component);
		};
	}), null, null, null, _componentDef, "1");
	(0, import_dynamic_tag.default)(out, tags_dynamic_child_default, () => (0, import_attr_tag.i)(() => {
		(0, import_attr_tag.a)("foo", { "content": (out) => {
			out.t("dynamic text ", _component);
			out.t(state.count, _component);
		} });
	}, { "tag": "section" }), null, null, null, _componentDef, "2");
}, {
	t: _marko_componentType,
	d: true
}, _marko_component);
_marko_template.Component = (0, import_defineComponent.default)(_marko_component, _marko_template._);
