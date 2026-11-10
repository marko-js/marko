// components/tags-child.marko
var import_vdom = require_vdom();
var import_attr_tag = require_attr_tag();
const $template = "<div><!></div>";
const $walks = "D%l";
const $setup = ($_) => {};
const $input_foo_direct = /*@__PURE__*/ _dynamic_tag_content("#text/0");
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_foo = $dynamicTag;
const $input = ($scope, input) => $input_foo($scope, input.foo);
var tags_child_default = /*@__PURE__*/ _template("__tests__/components/tags-child.marko", $template, "D%l", 0, $input);

// components/class-middle.marko
var import_dynamic_tag = /* @__PURE__ */ __toESM(require_dynamic_tag());
var import_renderer = /* @__PURE__ */ __toESM(require_renderer());
var import_registry = require_registry();
var import_defineComponent = /* @__PURE__ */ __toESM(require_defineComponent());
const _marko_componentType$1 = "__tests__/components/class-middle.marko";
const _marko_template$1 = (0, import_vdom.t)(_marko_componentType$1);
(0, import_registry.r)(_marko_componentType$1, () => _marko_template$1);
const _marko_component$1 = {};
_marko_template$1._ = (0, import_renderer.default)(function(input, out, _componentDef, _component, state, $global) {
	(0, import_dynamic_tag.default)(out, tags_child_default, () => ({ "foo": input.foo }), null, null, null, _componentDef, "0");
}, {
	t: _marko_componentType$1,
	d: true
}, _marko_component$1);
_marko_template$1.Component = (0, import_defineComponent.default)(_marko_component$1, _marko_template$1._);

// template.marko
var import_render_tag = /* @__PURE__ */ __toESM(require_render_tag());
const _marko_componentType = "__tests__/template.marko";
const _marko_template = (0, import_vdom.t)(_marko_componentType);
(0, import_registry.r)(_marko_componentType, () => _marko_template);
const _marko_component = {
	onCreate() {
		this.state = { n: 0 };
	},
	increment() {
		this.state.n++;
	}
};
_marko_template._ = (0, import_renderer.default)(function(input, out, _componentDef, _component, state, $global) {
	out.be("button", { "id": "class" }, "0", _component, null, 1, { "onclick": _componentDef.d("click", "increment", false) });
	out.t(state.n, _component);
	out.ee();
	(0, import_dynamic_tag.default)(out, tags_child_default, () => (0, import_attr_tag.i)(() => {
		(0, import_attr_tag.a)("foo", { "content": (out) => {
			out.t("direct ", _component);
			out.t(state.n, _component);
		} });
	}), null, null, null, _componentDef, "1");
	(0, import_render_tag.default)(_marko_template$1, (0, import_attr_tag.i)(() => {
		(0, import_attr_tag.a)("foo", {
			"id": "forwarded",
			"renderBody": (out) => {
				out.t("forwarded ", _component);
				out.t(state.n, _component);
			}
		});
	}), out, _componentDef, "2");
}, {
	t: _marko_componentType,
	d: true
}, _marko_component);
_marko_template.Component = (0, import_defineComponent.default)(_marko_component, _marko_template._);
