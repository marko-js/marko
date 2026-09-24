// components/tags-list.marko
var import_escape_xml = require_escape_xml();
var import_html = require_html();
var import_attr_tag = require_attr_tag();
var tags_list_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_item = _serialize_guard($scope0_reason, 1), $sg__input_id__OR__input_item = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`<section${_attr("id", input.id)}>`);
	_for_of(input.item, (item) => {
		const $scope1_id = _scope_id();
		_html("<div");
		_attrs_content(item, "a", $scope1_id, "div");
		_html(`</div>${_el_resume($scope1_id, "a")}`);
		_script($scope1_id, "b0");
		_scope($scope1_id, {});
	}, 0, $scope0_id, "a", $sg__input_item, $sg__input_id__OR__input_item, $sg__input_item, "</section>", 1);
	_serialize_if($scope0_reason, 0) && _scope($scope0_id, {});
});

// template.marko
var import_dynamic_tag = /* @__PURE__ */ __toESM(require_dynamic_tag());
var import_init_components_tag = /* @__PURE__ */ __toESM(require_init_components_tag());
var import_render_tag = /* @__PURE__ */ __toESM(require_render_tag());
var import_renderer = /* @__PURE__ */ __toESM(require_renderer());
const _marko_componentType = "a", _marko_template = (0, import_html.t)(_marko_componentType);
_marko_template._ = (0, import_renderer.default)(function(input, out, _componentDef, _component, state, $global) {
	out.w(`<button id=class>${(0, import_escape_xml.x)(state.n)}</button>`);
	(0, import_dynamic_tag.default)(out, tags_list_default, () => (0, import_attr_tag.i)(() => {
		(0, import_attr_tag.a)("item", {
			"class": "first",
			"content": (0, import_runtime_html.c)((out) => {
				out.w(`One ${(0, import_escape_xml.x)(state.n)}`);
			})
		});
		(0, import_attr_tag.a)("item", { "content": (0, import_runtime_html.c)((out) => {
			out.w("Two");
		}) });
	}, { "id": "items" }), null, null, null, _componentDef, "1");
	(0, import_render_tag.default)(import_init_components_tag.default, {}, out, _componentDef, "2");
}, { t: _marko_componentType }, {
	onCreate() {
		this.state = { n: 0 };
	},
	inc() {
		this.state.n++;
	}
});
