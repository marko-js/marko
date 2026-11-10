// components/tags-a.marko
var import_escape_xml = require_escape_xml();
var import_html = require_html();
var tags_a_exports = /* @__PURE__ */ __exportAll({ default: () => tags_a_default });
var tags_a_default = _template("__tests__/components/tags-a.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	_html(`<button id=a>a ${_text_mark($scope0_id, "#text/1", input.label, _write_guard($scope0_reason, 0) * 2)} ${_text_mark($scope0_id, "#text/2", n, 2)}</button>${_el_mark($scope0_id, "#button/0")}`);
	_script($scope0_id, "__tests__/components/tags-a.marko_0");
	_scope($scope0_id, { n }, "__tests__/components/tags-a.marko", 0, { n: "1:6" });
});

// components/tags-b.marko
var tags_b_exports = /* @__PURE__ */ __exportAll({ default: () => tags_b_default });
var tags_b_default = _template("__tests__/components/tags-b.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`<b id=b>b ${_text_mark($scope0_id, "#text/0", input.label, $wg__input_label * 2)}</b>`);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {}, "__tests__/components/tags-b.marko", 0);
});

// components/tags-namespace.marko
var tags_namespace_default = _template("__tests__/components/tags-namespace.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_which__OR__input_count = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_dynamic_tag($scope0_id, "#text/0", input.which ? tags_a_exports : tags_b_exports, { label: input.count }, 0, 0, $wg__input_which__OR__input_count);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {
		input_which: _write_if($scope0_reason, 2) && input.which,
		input_count: _write_if($scope0_reason, 1) && input.count
	}, "__tests__/components/tags-namespace.marko", 0, {
		input_which: ["input.which"],
		input_count: ["input.count"]
	});
});

// template.marko
var import_dynamic_tag = /* @__PURE__ */ __toESM(require_dynamic_tag());
var import_init_components_tag = /* @__PURE__ */ __toESM(require_init_components_tag());
var import_render_tag = /* @__PURE__ */ __toESM(require_render_tag());
var import_renderer = /* @__PURE__ */ __toESM(require_renderer());
const _marko_componentType = "__tests__/template.marko";
const _marko_template = (0, import_html.t)(_marko_componentType);
const _marko_component = {
	onCreate() {
		this.state = {
			which: true,
			count: 0
		};
	},
	toggle() {
		this.state.which = !this.state.which;
	},
	increment() {
		this.state.count++;
	}
};
_marko_template._ = (0, import_renderer.default)(function(input, out, _componentDef, _component, state, $global) {
	out.w("<button id=toggle>");
	out.w("toggle");
	out.w("</button>");
	out.w("<button id=increment>");
	out.w((0, import_escape_xml.x)(state.count));
	out.w("</button>");
	(0, import_dynamic_tag.default)(out, tags_namespace_default, () => ({
		"which": state.which,
		"count": state.count
	}), null, null, null, _componentDef, "2");
	(0, import_render_tag.default)(import_init_components_tag.default, {}, out, _componentDef, "3");
}, {
	t: _marko_componentType,
	d: true
}, _marko_component);
