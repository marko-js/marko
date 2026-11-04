// tags/lazy.marko
var lazy_default = _template("__tests__/tags/lazy.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	_html(`<button>${_text_resume($scope0_id, "#text/1", input.value, _write_guard($scope0_reason, 0))} ${_text_resume($scope0_id, "#text/2", n, 2)}</button>${_el_resume($scope0_id, "#button/0")}`);
	_script($scope0_id, "__tests__/tags/lazy.marko_0");
	_scope($scope0_id, { n }, "__tests__/tags/lazy.marko", 0, { n: "2:6" });
});

// components/class-host.marko
var import_html = require_html();
var import_dynamic_tag = /* @__PURE__ */ __toESM(require_dynamic_tag());
var import_renderer = /* @__PURE__ */ __toESM(require_renderer());
const _marko_componentType = "__tests__/components/class-host.marko";
const _marko_template = (0, import_html.t)(_marko_componentType);
const unused = 1;
const _marko_component = {};
_marko_template._ = (0, import_renderer.default)(function(input, out, _componentDef, _component, state, $global) {
	out.w("<div>");
	(0, import_dynamic_tag.default)(out, input.renderer, () => ({ "value": "x" }), null, null, null, _componentDef, "1");
	out.w("</div>");
}, {
	t: _marko_componentType,
	i: true,
	d: true
}, _marko_component);

// template.marko
const $Lazy_withLoadAssets = withLoadAssets(() => lazy_default, "__tests__/tags/lazy.marko", flush, "ready:__tests__/tags/lazy.marko");
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_dynamic_tag($scope0_id, "#text/0", _marko_template, { renderer: $Lazy_withLoadAssets }, 0, 0, 0);
}, 1);
