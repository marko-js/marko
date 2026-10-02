// tags/lazy-child.marko
var lazy_child_default = _template("__tests__/tags/lazy-child.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_value = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`<span>${_text_resume($scope0_id, "#text/0", input.value, $wg__input_value)}</span>`);
	_script($scope0_id, "__tests__/tags/lazy-child.marko_0_input_value#3", $wg__input_value);
	_scope($scope0_id, { input_value: input.value }, "__tests__/tags/lazy-child.marko", 0, { input_value: ["input.value"] });
});

// tags/tags-child.marko
var import_html = require_html();
const $Lazy_withLoadAssets$1 = withLoadAssets(lazy_child_default, "ready:__tests__/tags/lazy-child.marko");
var tags_child_default = _template("__tests__/tags/tags-child.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	$Lazy_withLoadAssets$1({ value: "class" });
});

// components/class-wrap.marko
var import_dynamic_tag = /* @__PURE__ */ __toESM(require_dynamic_tag());
var import_renderer = /* @__PURE__ */ __toESM(require_renderer());
const _marko_componentType = "__tests__/components/class-wrap.marko";
const _marko_template = (0, import_html.t)(_marko_componentType);
const _marko_component = {};
_marko_template._ = (0, import_renderer.default)(function(input, out, _componentDef, _component, state, $global) {
	out.w("<div id=class>");
	(0, import_dynamic_tag.default)(out, tags_child_default, null, null, null, null, _componentDef, "1");
	out.w("</div>");
}, {
	t: _marko_componentType,
	d: true
}, _marko_component);

// template.marko
const $Lazy_withLoadAssets = withLoadAssets(lazy_child_default, "ready:__tests__/tags/lazy-child.marko");
s("__tests__/components/class-wrap.marko", _marko_template);
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_try($scope0_id, "#text/0", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_await($scope1_id, "#text/0", resolveAfter("first", 2), (v) => {
			const $scope3_id = _scope_id();
			_html(_escape(v));
		}, 0);
		_dynamic_tag($scope1_id, "#text/1", _marko_template, {}, 0, 0, 0);
		_await($scope1_id, "#text/2", rejectAfter(new Error("x"), 1), (v) => {
			const $scope4_id = _scope_id();
			_html(_escape(v));
		}, 0);
	}, void 0, (err) => {
		const $scope2_reason = _scope_reason(), $wg__err_message = _write_guard($scope2_reason, 0);
		const $scope2_id = _scope_id();
		$Lazy_withLoadAssets({ value: "catch" });
		_html(` caught ${_text_resume($scope2_id, "#text/2", err.message, $wg__err_message * 2)}`);
		_write_if($scope2_reason, 0) && _scope($scope2_id, {}, "__tests__/template.marko", "9:4");
	}, void 0, "__tests__/template.marko_2*content");
}, 1);
