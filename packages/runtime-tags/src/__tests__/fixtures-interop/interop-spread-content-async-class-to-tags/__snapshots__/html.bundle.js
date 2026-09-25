// components/tags-spread.marko
var import_escape_xml = require_escape_xml();
var import_attr_tag = require_attr_tag();
var import_renderer = /* @__PURE__ */ __toESM(require_renderer());
var import_render_tag = /* @__PURE__ */ __toESM(require_render_tag());
var tags_spread_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html("<div");
	_attrs_content(input, "a", $scope0_id, "div");
	_html(`</div>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "b0");
	_scope($scope0_id, {});
});

// template.marko
var import_dynamic_tag = /* @__PURE__ */ __toESM(require_dynamic_tag());
var import_renderer$1 = /* @__PURE__ */ __toESM(require_renderer$1());
const _marko_componentType = "a", _marko_template = (0, import_html.t)(_marko_componentType);
_marko_template._ = (0, import_renderer$1.default)(function(input, out, _componentDef, _component, state, $global) {
	(0, import_dynamic_tag.default)(out, tags_spread_default, () => ({ "id": "spread" }), (out) => {
		(0, import_render_tag.default)(import_renderer.default, (0, import_attr_tag.i)(() => {
			(0, import_attr_tag.a)("then", { "renderBody": (out, value) => {
				out.w(`Got ${(0, import_escape_xml.x)(value)}`);
			} });
		}, {
			"_provider": resolveAfter("done", 1),
			"_name": "resolveAfter(\"done\", 1)"
		}), out, _componentDef, "1");
	}, null, null, _componentDef, "0");
}, {
	t: _marko_componentType,
	i: true
}, {});
