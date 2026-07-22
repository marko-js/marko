// components/tags-pinger.marko
var tags_pinger_default = _template("__tests__/components/tags-pinger.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button id=tags>${_escape(count)}${_el_resume($scope0_id, "#text/1")}</button>${_el_resume($scope0_id, "#button/0")}`);
	_script($scope0_id, "__tests__/components/tags-pinger.marko_0");
	writeScope($scope0_id, {
		input_onPing: input.onPing,
		count
	}, "__tests__/components/tags-pinger.marko", 0, {
		input_onPing: ["input.onPing"],
		count: "1:6"
	});
	_resume_branch($scope0_id);
});

// components/class-host/index.marko
var import_dynamic_tag = /* @__PURE__ */ __toESM(require_dynamic_tag());
var import_renderer = /* @__PURE__ */ __toESM(require_renderer());
const _marko_componentType$1 = "__tests__/components/class-host/index.marko", _marko_template$1 = (0, import_html.t)(_marko_componentType$1);
const _marko_component$1 = {};
_marko_template$1._ = (0, import_renderer.default)(function(input, out, _componentDef, _component, state, $global) {
	out.w("<div id=class>");
	out.w("none");
	out.w("</div>");
	(0, import_dynamic_tag.default)(out, tags_pinger_default, null, null, null, null, _componentDef, "1", [[
		"ping",
		"handlePing",
		false
	]]);
}, {
	t: _marko_componentType$1,
	s: true,
	d: true
}, _marko_component$1);

// template.marko
var import_render_tag = /* @__PURE__ */ __toESM(require_render_tag());
var import_init_components_tag = /* @__PURE__ */ __toESM(require_init_components_tag());
const _marko_componentType = "__tests__/template.marko", _marko_template = (0, import_html.t)(_marko_componentType);
const _marko_component = {};
_marko_template._ = (0, import_renderer.default)(function(input, out, _componentDef, _component, state, $global) {
	(0, import_render_tag.default)(_marko_template$1, {}, out, _componentDef, "0");
	(0, import_render_tag.default)(import_init_components_tag.default, {}, out, _componentDef, "1");
}, {
	t: _marko_componentType,
	i: true,
	d: true
}, _marko_component);
