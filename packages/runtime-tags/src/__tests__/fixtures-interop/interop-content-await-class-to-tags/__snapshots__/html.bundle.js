// components/tags-child.marko
var import_escape_xml = require_escape_xml();
var import_attr_tag = require_attr_tag();
var import_renderer = /* @__PURE__ */ __toESM(require_renderer());
var import_render_tag = /* @__PURE__ */ __toESM(require_render_tag());
var tags_child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html("<div>");
	_dynamic_tag($scope0_id, "a", input.foo.content, {}, 0, 0, _write_guard($scope0_reason, 0));
	_html("</div><section");
	_attrs_content(input.foo, "b", $scope0_id, "section");
	_html(`</section>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "b0");
	_scope($scope0_id, {});
});

// template.marko
var import_dynamic_tag = /* @__PURE__ */ __toESM(require_dynamic_tag());
var import_init_components_tag = /* @__PURE__ */ __toESM(require_init_components_tag());
var import_renderer$1 = /* @__PURE__ */ __toESM(require_renderer$1());
const _marko_componentType = "a";
const _marko_template = (0, import_html.t)(_marko_componentType);
_marko_template._ = (0, import_renderer$1.default)(function(input, out, _componentDef, _component, state, $global) {
	(0, import_dynamic_tag.default)(out, tags_child_default, () => (0, import_attr_tag.i)(() => {
		(0, import_attr_tag.a)("foo", { "content": (out) => {
			(0, import_render_tag.default)(import_renderer.default, (0, import_attr_tag.i)(() => {
				(0, import_attr_tag.a)("then", { "renderBody": (out, value) => {
					out.w(`<b>${(0, import_escape_xml.x)(value)}</b>`);
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
	i: true
}, {});
