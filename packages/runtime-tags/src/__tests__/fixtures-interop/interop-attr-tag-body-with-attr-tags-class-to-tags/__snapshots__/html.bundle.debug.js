// components/tags-layout.marko
var import_escape_xml = require_escape_xml();
var import_html = require_html();
var import_attr_tag = require_attr_tag();
var tags_layout_default = _template("__tests__/components/tags-layout.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const { inner, ...stuff } = input.stuff;
	_html("<div");
	_attrs_content({
		id: "spread",
		...stuff
	}, "#div/0", $scope0_id, "div");
	_html(`</div>${_el_resume($scope0_id, "#div/0")}<div id=passthrough>`);
	_dynamic_tag($scope0_id, "#text/1", input.stuff.content, {}, 0, 0, _serialize_guard($scope0_reason, 1));
	_html("</div><span id=inner>");
	_dynamic_tag($scope0_id, "#text/2", inner.content, {}, 0, 0, _serialize_guard($scope0_reason, 0));
	_html("</span>");
	_script($scope0_id, "__tests__/components/tags-layout.marko_0_stuff#10");
	_scope($scope0_id, {}, "__tests__/components/tags-layout.marko", 0, { "EventAttributes:#div/0": ["...stuff", "3:21"] });
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
	(0, import_dynamic_tag.default)(out, tags_layout_default, () => (0, import_attr_tag.i)(() => {
		(0, import_attr_tag.a)("stuff", (0, import_attr_tag.i)(() => {
			(0, import_attr_tag.a)("inner", { "content": (0, import_runtime_html.c)((out) => {
				out.w("Inner ");
				out.w((0, import_escape_xml.x)(state.n));
			}) });
		}, {
			"class": "stuff",
			"content": (0, import_runtime_html.c)((out) => {
				out.w("Body ");
				out.w((0, import_escape_xml.x)(state.n));
			})
		}));
	}), null, null, null, _componentDef, "1");
	(0, import_render_tag.default)(import_init_components_tag.default, {}, out, _componentDef, "2");
}, {
	t: _marko_componentType,
	d: true
}, _marko_component);
