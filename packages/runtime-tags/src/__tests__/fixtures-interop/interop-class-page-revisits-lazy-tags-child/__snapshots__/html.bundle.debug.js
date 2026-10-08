// tags/v:counter.marko.css
var import_html = require_html();
var v_counter_marko_default = "\n  .count { color: green }\n";

// tags/counter.marko
var counter_default = _template("__tests__/tags/counter.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = input.value;
	_html(`<button class=count>${_text_resume($scope0_id, "#text/1", count)}</button>${_el_resume($scope0_id, "#button/0")}`);
	_script($scope0_id, "__tests__/tags/counter.marko_0");
	_scope($scope0_id, { count }, "__tests__/tags/counter.marko", 0, { count: "5:6" });
});

// tags/lazy-wrap.marko
const $Counter_withLoadAssets = withLoadAssets(counter_default, flush, "ready:__tests__/tags/counter.marko");
var lazy_wrap_default = _template("__tests__/tags/lazy-wrap.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html("<div class=lazy>");
	$Counter_withLoadAssets({ value: 0 });
	_html("</div>");
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
	out.w("<div>");
	(0, import_dynamic_tag.default)(out, lazy_wrap_default, null, null, null, null, _componentDef, "1");
	(0, import_dynamic_tag.default)(out, counter_default, () => ({ "value": 10 }), null, null, null, _componentDef, "2");
	out.w("</div>");
	(0, import_render_tag.default)(import_init_components_tag.default, {}, out, _componentDef, "3");
}, {
	t: _marko_componentType,
	i: true,
	d: true
}, _marko_component);
