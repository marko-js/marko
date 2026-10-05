// tags/lazy.marko
var import_html = require_html();
var lazy_default = _template("__tests__/tags/lazy.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_value = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`<span id=lazy>${_text_resume($scope0_id, "#text/0", input.value, $wg__input_value)}</span>`);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {}, "__tests__/tags/lazy.marko", 0);
});

// components/tags-child.marko
const $Lazy_withLoadAssets = withLoadAssets(lazy_default, flush, "ready:__tests__/tags/lazy.marko");
var tags_child_default = _template("__tests__/components/tags-child.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	$Lazy_withLoadAssets({ value: "x" });
});

// template.marko
var import_dynamic_tag = /* @__PURE__ */ __toESM(require_dynamic_tag());
var import_init_components_tag = /* @__PURE__ */ __toESM(require_init_components_tag());
var import_render_tag = /* @__PURE__ */ __toESM(require_render_tag());
var import_renderer = /* @__PURE__ */ __toESM(require_renderer());
const _marko_componentType = "__tests__/template.marko";
const _marko_template = (0, import_html.t)(_marko_componentType);
const _marko_component = {};
_marko_template._ = (0, import_renderer.default)(function(input, out, _componentDef, _component, state, $global) {
	out.w("<div id=page>");
	(0, import_dynamic_tag.default)(out, tags_child_default, null, null, null, null, _componentDef, "1");
	out.w("</div>");
	(0, import_render_tag.default)(import_init_components_tag.default, {}, out, _componentDef, "2");
}, {
	t: _marko_componentType,
	d: true
}, _marko_component);
