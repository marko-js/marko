// tags/lazy.marko
var lazy_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	_html(`<button>${_text_resume($scope0_id, "b", input.value, _write_guard($scope0_reason, 0))} ${_text_resume($scope0_id, "c", n, 2)}</button>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "c0");
	_scope($scope0_id, { g: n });
});

// components/class-host.marko
var import_html = require_html();
var import_dynamic_tag = /* @__PURE__ */ __toESM(require_dynamic_tag());
var import_renderer = /* @__PURE__ */ __toESM(require_renderer());
const _marko_componentType = "b";
const _marko_template = (0, import_html.t)(_marko_componentType);
_marko_template._ = (0, import_renderer.default)(function(input, out, _componentDef, _component, state, $global) {
	out.w("<div>");
	(0, import_dynamic_tag.default)(out, input.renderer, () => ({ "value": "x" }), null, null, null, _componentDef, "1");
	out.w("</div>");
}, {
	t: _marko_componentType,
	i: true
}, {});

// template.marko
const $Lazy_withLoadAssets = withLoadAssets(() => lazy_default, "c", flush, "_c");
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_dynamic_tag($scope0_id, "a", _marko_template, { renderer: $Lazy_withLoadAssets }, 0, 0, 0);
}, 1);
