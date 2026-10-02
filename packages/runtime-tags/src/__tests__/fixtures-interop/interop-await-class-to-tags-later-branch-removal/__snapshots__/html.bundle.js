// components/counter.marko
var counter_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button class=inc>${_text_resume($scope0_id, "b", count)}</button>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "b0");
	_scope($scope0_id, { c: count });
});

// components/tags-await.marko
var tags_await_default = _template("c", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_await($scope0_id, "a", resolveAfter(1, 1), () => {
		_scope_id();
		counter_default({});
	}, 0);
});

// components/tags-if.marko
var import_dynamic_tag = /* @__PURE__ */ __toESM(require_dynamic_tag());
var tags_if_default = _template("d", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_if(() => {
		{
			const $scope1_id = _scope_id();
			_html("<span>shown</span>");
			_scope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "a", 1, 1, 0, 0, 1);
	_html(`<button class=hide>hide</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "d0");
	_scope($scope0_id, {});
});

// template.marko
var import_init_components_tag = /* @__PURE__ */ __toESM(require_init_components_tag());
var import_render_tag = /* @__PURE__ */ __toESM(require_render_tag());
var import_renderer = /* @__PURE__ */ __toESM(require_renderer());
const _marko_componentType = "a";
const _marko_template = (0, import_html.t)(_marko_componentType);
_marko_template._ = (0, import_renderer.default)(function(input, out, _componentDef, _component, state, $global) {
	(0, import_dynamic_tag.default)(out, tags_await_default, null, null, null, null, _componentDef, "0");
	(0, import_dynamic_tag.default)(out, tags_if_default, null, null, null, null, _componentDef, "1");
	(0, import_render_tag.default)(import_init_components_tag.default, {}, out, _componentDef, "2");
}, { t: _marko_componentType }, {});
