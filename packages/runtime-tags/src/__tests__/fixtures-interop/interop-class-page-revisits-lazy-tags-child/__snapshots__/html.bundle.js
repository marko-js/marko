// tags/counter.marko
var import_html = require_html();
var counter_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = input.value;
	_html(`<button class=count>${_text_resume($scope0_id, "b", count)}</button>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "b0");
	_scope($scope0_id, { f: count });
});

// tags/lazy-wrap.marko
const $Counter_withLoadAssets = withLoadAssets(counter_default, flush, "_b");
var lazy_wrap_default = _template("c", (input) => {
	_scope_reason();
	_scope_id();
	_html("<div class=lazy>");
	$Counter_withLoadAssets({ value: 0 });
	_html("</div>");
});

// template.marko
var import_dynamic_tag = /* @__PURE__ */ __toESM(require_dynamic_tag());
var import_init_components_tag = /* @__PURE__ */ __toESM(require_init_components_tag());
var import_render_tag = /* @__PURE__ */ __toESM(require_render_tag());
var import_renderer = /* @__PURE__ */ __toESM(require_renderer());
const _marko_componentType = "a";
const _marko_template = (0, import_html.t)(_marko_componentType);
_marko_template._ = (0, import_renderer.default)(function(input, out, _componentDef, _component, state, $global) {
	out.w("<div>");
	(0, import_dynamic_tag.default)(out, lazy_wrap_default, null, null, null, null, _componentDef, "1");
	(0, import_dynamic_tag.default)(out, counter_default, () => ({ "value": 10 }), null, null, null, _componentDef, "2");
	out.w("</div>");
	(0, import_render_tag.default)(import_init_components_tag.default, {}, out, _componentDef, "3");
}, {
	t: _marko_componentType,
	i: true
}, {});
