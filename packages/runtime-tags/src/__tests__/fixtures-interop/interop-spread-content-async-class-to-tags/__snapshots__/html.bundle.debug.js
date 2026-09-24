// components/tags-spread.marko
var import_escape_xml = require_escape_xml();
var import_attr_tag = require_attr_tag();
var import_renderer = /* @__PURE__ */ __toESM(require_renderer());
var import_render_tag = /* @__PURE__ */ __toESM(require_render_tag());
var tags_spread_default = _template("__tests__/components/tags-spread.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html("<div");
	_attrs_content(input, "#div/0", $scope0_id, "div");
	_html(`</div>${_el_resume($scope0_id, "#div/0")}`);
	_script($scope0_id, "__tests__/components/tags-spread.marko_0_input#2");
	_scope($scope0_id, {}, "__tests__/components/tags-spread.marko", 0, { "EventAttributes:#div/0": ["...input", "2:9"] });
});

// template.marko
var import_dynamic_tag = /* @__PURE__ */ __toESM(require_dynamic_tag());
var import_renderer$1 = /* @__PURE__ */ __toESM(require_renderer$1());
const _marko_componentType = "__tests__/template.marko", _marko_template = (0, import_html.t)(_marko_componentType);
const _marko_component = {};
_marko_template._ = (0, import_renderer$1.default)(function(input, out, _componentDef, _component, state, $global) {
	(0, import_dynamic_tag.default)(out, tags_spread_default, () => ({ "id": "spread" }), (out) => {
		(0, import_render_tag.default)(import_renderer.default, (0, import_attr_tag.i)(() => {
			(0, import_attr_tag.a)("then", { "renderBody": (out, value) => {
				out.w("Got ");
				out.w((0, import_escape_xml.x)(value));
			} });
		}, {
			"_provider": resolveAfter("done", 1),
			"_name": "resolveAfter(\"done\", 1)"
		}), out, _componentDef, "1");
	}, null, null, _componentDef, "0");
}, {
	t: _marko_componentType,
	i: true,
	d: true
}, _marko_component);
