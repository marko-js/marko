// components/counter.marko
var counter_default = _template("__tests__/components/counter.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button class=inc>${_text_resume($scope0_id, "#text/1", count)}</button>${_el_resume($scope0_id, "#button/0")}`);
	_script($scope0_id, "__tests__/components/counter.marko_0");
	_scope($scope0_id, { count }, "__tests__/components/counter.marko", 0, { count: "2:6" });
});

// components/tags-await.marko
var tags_await_default = _template("__tests__/components/tags-await.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_await($scope0_id, "#text/0", resolveAfter(1, 1), () => {
		const $scope1_id = _scope_id();
		counter_default({});
	}, 0);
});

// components/tags-if.marko
var import_dynamic_tag = /* @__PURE__ */ __toESM(require_dynamic_tag());
var tags_if_default = _template("__tests__/components/tags-if.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let show = true;
	_if(() => {
		if (show) {
			const $scope1_id = _scope_id();
			_html("<span>shown</span>");
			_scope($scope1_id, {}, "__tests__/components/tags-if.marko", "3:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, 1, 0, 0, 1);
	_html(`<button class=hide>hide</button>${_el_resume($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/components/tags-if.marko_0");
	_scope($scope0_id, {}, "__tests__/components/tags-if.marko", 0);
});

// template.marko
var import_init_components_tag = /* @__PURE__ */ __toESM(require_init_components_tag());
var import_render_tag = /* @__PURE__ */ __toESM(require_render_tag());
var import_renderer = /* @__PURE__ */ __toESM(require_renderer());
const _marko_componentType = "__tests__/template.marko";
const _marko_template = (0, import_html.t)(_marko_componentType);
const _marko_component = {};
_marko_template._ = (0, import_renderer.default)(function(input, out, _componentDef, _component, state, $global) {
	(0, import_dynamic_tag.default)(out, tags_await_default, null, null, null, null, _componentDef, "0");
	(0, import_dynamic_tag.default)(out, tags_if_default, null, null, null, null, _componentDef, "1");
	(0, import_render_tag.default)(import_init_components_tag.default, {}, out, _componentDef, "2");
}, {
	t: _marko_componentType,
	d: true
}, _marko_component);
