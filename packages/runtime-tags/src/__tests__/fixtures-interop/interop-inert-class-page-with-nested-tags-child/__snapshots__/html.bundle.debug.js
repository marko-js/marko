// tags/tags-label.marko
var tags_label_default = _template("__tests__/tags/tags-label.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<span>${_escape(input.text)}${_el_resume($scope0_id, "#text/0", _serialize_guard($scope0_reason, 0))}</span>`);
	_serialize_if($scope0_reason, 0) && writeScope($scope0_id, {}, "__tests__/tags/tags-label.marko", 0);
});

// tags/tags-counter.marko
var import_dynamic_tag = /* @__PURE__ */ __toESM(require_dynamic_tag());
var tags_counter_default = _template("__tests__/tags/tags-counter.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	_html(`<button id=counter>${_escape(n)}${_el_resume($scope0_id, "#text/1")}</button>${_el_resume($scope0_id, "#button/0")}`);
	_script($scope0_id, "__tests__/tags/tags-counter.marko_0");
	writeScope($scope0_id, { n }, "__tests__/tags/tags-counter.marko", 0, { n: "1:6" });
	_resume_branch($scope0_id);
});

// components/class-section.marko
var import_renderer = /* @__PURE__ */ __toESM(require_renderer());
const _marko_componentType$1 = "__tests__/components/class-section.marko", _marko_template$1 = (0, import_html.t)(_marko_componentType$1);
const _marko_component$1 = {};
_marko_template$1._ = (0, import_renderer.default)(function(input, out, _componentDef, _component, state, $global) {
	out.w("<section>");
	(0, import_dynamic_tag.default)(out, tags_label_default, () => ({ "text": "count" }), null, null, null, _componentDef, "1");
	(0, import_dynamic_tag.default)(out, tags_counter_default, null, null, null, null, _componentDef, "2");
	out.w("</section>");
}, {
	t: _marko_componentType$1,
	i: true,
	d: true
}, _marko_component$1);

// template.marko
var import_render_tag = /* @__PURE__ */ __toESM(require_render_tag());
const _marko_componentType = "__tests__/template.marko", _marko_template = (0, import_html.t)(_marko_componentType);
const _marko_component = {};
_marko_template._ = (0, import_renderer.default)(function(input, out, _componentDef, _component, state, $global) {
	out.w("<div>");
	(0, import_render_tag.default)(_marko_template$1, {}, out, _componentDef, "1");
	out.w("</div>");
}, {
	t: _marko_componentType,
	i: true,
	d: true
}, _marko_component);
