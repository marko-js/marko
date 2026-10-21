// components/tags-child.marko
var import_escape_xml = require_escape_xml();
var import_attr_tag = require_attr_tag();
var import_renderer = /* @__PURE__ */ __toESM(require_renderer());
var import_render_tag = /* @__PURE__ */ __toESM(require_render_tag());
var tags_child_default = _template("__tests__/components/tags-child.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html("<div>");
	_dynamic_tag($scope0_id, "#text/0", input.foo.content, {}, 0, 0, _write_guard($scope0_reason, 0));
	_html("</div><section");
	_attrs_content(input.foo, "#section/1", $scope0_id, "section");
	_html(`</section>${_el_resume($scope0_id, "#section/1")}`);
	_script($scope0_id, "__tests__/components/tags-child.marko_0_input_foo#4");
	_scope($scope0_id, {}, "__tests__/components/tags-child.marko", 0, { "EventAttributes:#section/1": ["...input.foo", "3:13"] });
});

// template.marko
var import_dynamic_tag = /* @__PURE__ */ __toESM(require_dynamic_tag());
var import_init_components_tag = /* @__PURE__ */ __toESM(require_init_components_tag());
var import_renderer$1 = /* @__PURE__ */ __toESM(require_renderer$1());
const _marko_componentType = "__tests__/template.marko";
const _marko_template = (0, import_html.t)(_marko_componentType);
const _marko_component = {};
_marko_template._ = (0, import_renderer$1.default)(function(input, out, _componentDef, _component, state, $global) {
	(0, import_dynamic_tag.default)(out, tags_child_default, () => (0, import_attr_tag.i)(() => {
		(0, import_attr_tag.a)("foo", { "content": (out) => {
			(0, import_render_tag.default)(import_renderer.default, (0, import_attr_tag.i)(() => {
				(0, import_attr_tag.a)("then", { "renderBody": (out, value) => {
					out.w("<b>");
					out.w((0, import_escape_xml.x)(value));
					out.w("</b>");
				} });
			}, {
				"_provider": resolveAfter("hi", 1),
				"_name": "resolveAfter(\"hi\", 1)"
			}), out, _componentDef, "1");
		} });
	}), null, null, null, _componentDef, "0");
	(0, import_render_tag.default)(import_init_components_tag.default, {}, out, _componentDef, "3");
}, {
	t: _marko_componentType,
	i: true,
	d: true
}, _marko_component);
