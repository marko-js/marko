// components/tags-spread.marko
var import_escape_xml = require_escape_xml();
var import_html = require_html();
var tags_spread_default = _template("__tests__/components/tags-spread.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html("<div");
	_attrs_content(input, "#div/0", $scope0_id, "div");
	_html(`</div>${_el_resume($scope0_id, "#div/0")}`);
	_script($scope0_id, "__tests__/components/tags-spread.marko_0_input#2");
	_scope($scope0_id, {}, "__tests__/components/tags-spread.marko", 0, { "EventAttributes:#div/0": ["...input", "2:9"] });
});

// components/tags-forward.marko
var tags_forward_default = _template("__tests__/components/tags-forward.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const $childScope = _peek_scope_id();
	tags_spread_default(input);
	_serialize_if($scope0_reason, 0) && _scope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/components/tags-forward.marko", 0);
});

// template.marko
var import_dynamic_tag = /* @__PURE__ */ __toESM(require_dynamic_tag());
var import_init_components_tag = /* @__PURE__ */ __toESM(require_init_components_tag());
var import_render_tag = /* @__PURE__ */ __toESM(require_render_tag());
var import_renderer = /* @__PURE__ */ __toESM(require_renderer());
const _marko_componentType = "__tests__/template.marko", _marko_template = (0, import_html.t)(_marko_componentType);
const _marko_component = {
	onCreate() {
		this.state = { n: 0 };
	},
	inc() {
		this.state.n++;
	}
};
_marko_template._ = (0, import_renderer.default)(function(input, out, _componentDef, _component, state, $global) {
	out.w("<button id=class>");
	out.w((0, import_escape_xml.x)(state.n));
	out.w("</button>");
	(0, import_dynamic_tag.default)(out, tags_forward_default, () => ({ "id": "forwarded" }), (out) => {
		out.w("Hello ");
		out.w((0, import_escape_xml.x)(state.n));
	}, null, null, _componentDef, "1");
	(0, import_render_tag.default)(import_init_components_tag.default, {}, out, _componentDef, "2");
}, {
	t: _marko_componentType,
	d: true
}, _marko_component);
