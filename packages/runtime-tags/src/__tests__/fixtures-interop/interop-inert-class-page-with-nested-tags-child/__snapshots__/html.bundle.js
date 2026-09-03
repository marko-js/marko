// tags/tags-label.marko
var tags_label_default = _template("d", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_text = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`<span>${_text_resume($scope0_id, "a", input.text, $sg__input_text)}</span>`);
	_serialize_if($scope0_reason, 0) && _scope($scope0_id, {});
});

// tags/tags-counter.marko
var import_dynamic_tag = /* @__PURE__ */ __toESM(require_dynamic_tag());
var tags_counter_default = _template("c", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	_html(`<button id=counter>${_text_resume($scope0_id, "b", n)}</button>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "c0");
	_scope($scope0_id, { c: n });
});

// components/class-section.marko
var import_renderer = /* @__PURE__ */ __toESM(require_renderer());
const _marko_componentType$1 = "b", _marko_template$1 = (0, import_html.t)(_marko_componentType$1);
_marko_template$1._ = (0, import_renderer.default)(function(input, out, _componentDef, _component, state, $global) {
	out.w("<section>");
	(0, import_dynamic_tag.default)(out, tags_label_default, () => ({ "text": "count" }), null, null, null, _componentDef, "1");
	(0, import_dynamic_tag.default)(out, tags_counter_default, null, null, null, null, _componentDef, "2");
	out.w("</section>");
}, {
	t: _marko_componentType$1,
	i: true
}, {});

// template.marko
var import_render_tag = /* @__PURE__ */ __toESM(require_render_tag());
const _marko_componentType = "a", _marko_template = (0, import_html.t)(_marko_componentType);
_marko_template._ = (0, import_renderer.default)(function(input, out, _componentDef, _component, state, $global) {
	out.w("<div>");
	(0, import_render_tag.default)(_marko_template$1, {}, out, _componentDef, "1");
	out.w("</div>");
}, {
	t: _marko_componentType,
	i: true
}, {});
