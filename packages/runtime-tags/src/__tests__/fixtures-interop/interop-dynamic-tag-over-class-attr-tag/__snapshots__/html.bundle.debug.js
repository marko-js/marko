// components/tags-child.marko
var import_escape_xml = require_escape_xml();
var import_html = require_html();
var import_attr_tag = require_attr_tag();
var tags_child_default = _template("__tests__/components/tags-child.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_foo = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<div>");
	_dynamic_tag($scope0_id, "#text/0", input.foo, {}, 0, 0, $wg__input_foo);
	_html("</div>");
	_write_if($scope0_reason, 0) && _scope($scope0_id, {}, "__tests__/components/tags-child.marko", 0);
});

// components/class-middle.marko
var import_dynamic_tag = /* @__PURE__ */ __toESM(require_dynamic_tag());
var import_renderer = /* @__PURE__ */ __toESM(require_renderer());
const _marko_componentType$1 = "__tests__/components/class-middle.marko";
const _marko_template$1 = (0, import_html.t)(_marko_componentType$1);
const _marko_component$1 = {};
_marko_template$1._ = (0, import_renderer.default)(function(input, out, _componentDef, _component, state, $global) {
	(0, import_dynamic_tag.default)(out, tags_child_default, () => ({ "foo": input.foo }), null, null, null, _componentDef, "0");
}, {
	t: _marko_componentType$1,
	d: true
}, _marko_component$1);

// template.marko
var import_render_tag = /* @__PURE__ */ __toESM(require_render_tag());
var import_init_components_tag = /* @__PURE__ */ __toESM(require_init_components_tag());
const _marko_componentType = "__tests__/template.marko";
const _marko_template = (0, import_html.t)(_marko_componentType);
const _marko_component = {
	onCreate() {
		this.state = { n: 0 };
	},
	increment() {
		this.state.n++;
	}
};
_marko_template._ = (0, import_renderer.default)(function(input, out, _componentDef, _component, state, $global) {
	out.w("<button id=class>");
	out.w((0, import_escape_xml.x)(state.n));
	out.w("</button>");
	(0, import_dynamic_tag.default)(out, tags_child_default, () => (0, import_attr_tag.i)(() => {
		(0, import_attr_tag.a)("foo", { "content": (out) => {
			out.w("direct ");
			out.w((0, import_escape_xml.x)(state.n));
		} });
	}), null, null, null, _componentDef, "1");
	(0, import_render_tag.default)(_marko_template$1, (0, import_attr_tag.i)(() => {
		(0, import_attr_tag.a)("foo", {
			"id": "forwarded",
			"renderBody": (out) => {
				out.w("forwarded ");
				out.w((0, import_escape_xml.x)(state.n));
			}
		});
	}), out, _componentDef, "2");
	(0, import_render_tag.default)(import_init_components_tag.default, {}, out, _componentDef, "3");
}, {
	t: _marko_componentType,
	d: true
}, _marko_component);
