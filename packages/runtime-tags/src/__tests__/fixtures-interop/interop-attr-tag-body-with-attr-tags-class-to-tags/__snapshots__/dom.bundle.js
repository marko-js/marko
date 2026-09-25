// components/tags-layout.marko
var import_vdom = require_vdom();
var import_attr_tag = require_attr_tag();
const $template = "<div></div><div id=passthrough><!></div><span id=inner><!></span>";
const $walks = " bD%lD%l";
const $pattern2 = ($scope, $pattern) => {
	(({ inner, ...stuff }) => $stuff($scope, stuff))($pattern);
	$inner_content($scope, $pattern.inner?.content);
};
const $stuff__script = _script("b0", ($scope) => _attrs_script($scope, "a"));
const $stuff = /*@__PURE__*/ _const(10, ($scope) => {
	_attrs_content($scope, "a", {
		id: "spread",
		...$scope.k
	});
	$stuff__script($scope);
});
const $inner_content = /* @__PURE__ */ _dynamic_tag(2);
const $input_stuff = ($scope, input_stuff) => {
	$input_stuff_content($scope, input_stuff?.content);
	$pattern2($scope, input_stuff);
};
const $input_stuff_content = /* @__PURE__ */ _dynamic_tag(1);
const $input = ($scope, input) => $input_stuff($scope, input.stuff);
var tags_layout_default = /*@__PURE__*/ _template("b", $template, $walks, 0, $input);

// template.marko
var import_dynamic_tag = /* @__PURE__ */ __toESM(require_dynamic_tag());
var import_renderer = /* @__PURE__ */ __toESM(require_renderer());
var import_registry = require_registry();
var import_defineComponent = /* @__PURE__ */ __toESM(require_defineComponent());
const _marko_componentType = "a", _marko_template = (0, import_vdom.t)(_marko_componentType);
(0, import_registry.r)(_marko_componentType, () => _marko_template);
const _marko_component = {
	onCreate() {
		this.state = { n: 0 };
	},
	inc() {
		this.state.n++;
	}
};
_marko_template._ = (0, import_renderer.default)(function(input, out, _componentDef, _component, state, $global) {
	out.be("button", { "id": "class" }, "0", _component, null, 1, { "onclick": _componentDef.d("click", "inc", false) });
	out.t(state.n, _component);
	out.ee();
	(0, import_dynamic_tag.default)(out, tags_layout_default, () => (0, import_attr_tag.i)(() => {
		(0, import_attr_tag.a)("stuff", (0, import_attr_tag.i)(() => {
			(0, import_attr_tag.a)("inner", { "content": (0, import_runtime_dom.c)((out) => {
				out.t("Inner ", _component);
				out.t(state.n, _component);
			}) });
		}, {
			"class": "stuff",
			"content": (0, import_runtime_dom.c)((out) => {
				out.t("Body ", _component);
				out.t(state.n, _component);
			})
		}));
	}), null, null, null, _componentDef, "1");
}, { t: _marko_componentType }, _marko_component);
_marko_template.Component = (0, import_defineComponent.default)(_marko_component, _marko_template._);
