// components/tags-a.marko
var import_escape_xml = require_escape_xml();
var import_html = require_html();
var tags_a_exports = /* @__PURE__ */ __exportAll({ default: () => tags_a_default });
var tags_a_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	_html(`<button id=a>a ${_text_mark($scope0_id, "b", input.label, _write_guard($scope0_reason, 0) * 2)} ${_text_mark($scope0_id, "c", n, 2)}</button>${_el_mark($scope0_id, "a")}`);
	_script($scope0_id, "b0");
	_scope($scope0_id, { g: n });
});

// components/tags-b.marko
var tags_b_exports = /* @__PURE__ */ __exportAll({ default: () => tags_b_default });
var tags_b_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`<b id=b>b ${_text_mark($scope0_id, "a", input.label, $wg__input_label * 2)}</b>`);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {});
});

// components/tags-namespace.marko
var tags_namespace_default = _template("d", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_which__OR__input_count = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_dynamic_tag($scope0_id, "a", input.which ? tags_a_exports : tags_b_exports, { label: input.count }, 0, 0, $wg__input_which__OR__input_count);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {
		d: _write_if($scope0_reason, 2) && input.which,
		e: _write_if($scope0_reason, 1) && input.count
	});
});

// template.marko
var import_dynamic_tag = /* @__PURE__ */ __toESM(require_dynamic_tag());
var import_init_components_tag = /* @__PURE__ */ __toESM(require_init_components_tag());
var import_render_tag = /* @__PURE__ */ __toESM(require_render_tag());
var import_renderer = /* @__PURE__ */ __toESM(require_renderer());
const _marko_componentType = "a";
const _marko_template = (0, import_html.t)(_marko_componentType);
_marko_template._ = (0, import_renderer.default)(function(input, out, _componentDef, _component, state, $global) {
	out.w(`<button id=toggle>toggle</button><button id=increment>${(0, import_escape_xml.x)(state.count)}</button>`);
	(0, import_dynamic_tag.default)(out, tags_namespace_default, () => ({
		"which": state.which,
		"count": state.count
	}), null, null, null, _componentDef, "2");
	(0, import_render_tag.default)(import_init_components_tag.default, {}, out, _componentDef, "3");
}, { t: _marko_componentType }, {
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
});
