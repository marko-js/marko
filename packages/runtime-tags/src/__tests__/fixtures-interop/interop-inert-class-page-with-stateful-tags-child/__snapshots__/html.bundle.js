// components/tags-counter.marko
var import_html = require_html();
var tags_counter_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	_html(`<button id=counter>${_escape(n)}${_el_resume($scope0_id, "b")}</button>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "b0");
	writeScope($scope0_id, { c: n });
	_resume_branch($scope0_id);
});

// template.marko
var import_dynamic_tag = /* @__PURE__ */ __toESM(require_dynamic_tag());
var import_renderer = /* @__PURE__ */ __toESM(require_renderer());
const _marko_componentType = "a", _marko_template = (0, import_html.t)(_marko_componentType);
_marko_template._ = (0, import_renderer.default)(function(input, out, _componentDef, _component, state, $global) {
	out.w("<div>");
	(0, import_dynamic_tag.default)(out, tags_counter_default, null, null, null, null, _componentDef, "1");
	out.w("</div>");
}, {
	t: _marko_componentType,
	i: true
}, {});
