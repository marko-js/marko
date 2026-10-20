// components/tags-child.marko
var import_escape_xml = require_escape_xml();
var import_html = require_html();
var import_attr_tag = require_attr_tag();
var tags_child_default = _template("__tests__/components/tags-child.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<div");
	_attrs_content(input.foo, "#div/0", $scope0_id, "div");
	_html(`</div>${_el_resume($scope0_id, "#div/0")}<span>`);
	_attr_content("#span/1", $scope0_id, input.content, $wg__input_content);
	_html(`</span>${_el_resume($scope0_id, "#span/1", $wg__input_content)}`);
	_script($scope0_id, "__tests__/components/tags-child.marko_0_input_foo#4");
	_scope($scope0_id, {}, "__tests__/components/tags-child.marko", 0, { "EventAttributes:#div/0": ["...input.foo", "2:9"] });
});

// components/tags-dynamic-child.marko
var import_dynamic_tag = /* @__PURE__ */ __toESM(require_dynamic_tag());
var tags_dynamic_child_default = _template("__tests__/components/tags-dynamic-child.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_tag__OR__input_foo = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_dynamic_tag($scope0_id, "#text/0", input.tag, input.foo, 0, 0, $wg__input_tag__OR__input_foo);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {
		input_tag: _write_if($scope0_reason, 2) && input.tag,
		input_foo: _write_if($scope0_reason, 1) && input.foo
	}, "__tests__/components/tags-dynamic-child.marko", 0, {
		input_tag: ["input.tag"],
		input_foo: ["input.foo"]
	});
});

// template.marko
var import_init_components_tag = /* @__PURE__ */ __toESM(require_init_components_tag());
var import_render_tag = /* @__PURE__ */ __toESM(require_render_tag());
var import_renderer = /* @__PURE__ */ __toESM(require_renderer());
const _marko_componentType = "__tests__/template.marko";
const _marko_template = (0, import_html.t)(_marko_componentType);
const _marko_component = {
	onCreate() {
		this.state = { count: 0 };
	},
	increment() {
		this.state.count++;
	}
};
_marko_template._ = (0, import_renderer.default)(function(input, out, _componentDef, _component, state, $global) {
	out.w("<button id=class>");
	out.w("increment");
	out.w("</button>");
	(0, import_dynamic_tag.default)(out, tags_child_default, () => (0, import_attr_tag.i)(() => {
		(0, import_attr_tag.a)("foo", { "content": (out) => {
			out.w("body text ");
			out.w((0, import_escape_xml.x)(state.count));
		} });
		return (out) => {
			out.w("outer text ");
			out.w((0, import_escape_xml.x)(state.count));
		};
	}), null, null, null, _componentDef, "1");
	(0, import_dynamic_tag.default)(out, tags_dynamic_child_default, () => (0, import_attr_tag.i)(() => {
		(0, import_attr_tag.a)("foo", { "content": (out) => {
			out.w("dynamic text ");
			out.w((0, import_escape_xml.x)(state.count));
		} });
	}, { "tag": "section" }), null, null, null, _componentDef, "2");
	(0, import_render_tag.default)(import_init_components_tag.default, {}, out, _componentDef, "3");
}, {
	t: _marko_componentType,
	d: true
}, _marko_component);
