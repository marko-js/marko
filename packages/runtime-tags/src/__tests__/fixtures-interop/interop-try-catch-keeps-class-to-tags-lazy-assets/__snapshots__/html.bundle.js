// tags/lazy-child.marko
var lazy_child_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_value = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`<span>${_text_resume($scope0_id, "a", input.value, $wg__input_value)}</span>`);
	_script($scope0_id, "c0", $wg__input_value);
	_scope($scope0_id, { d: input.value });
});

// tags/tags-child.marko
var import_html = require_html();
const $Lazy_withLoadAssets$1 = withLoadAssets(lazy_child_default, flush$1, "_c");
var tags_child_default = _template("d", (input) => {
	_scope_reason();
	_scope_id();
	$Lazy_withLoadAssets$1({ value: "class" });
});

// components/class-wrap.marko
var import_dynamic_tag = /* @__PURE__ */ __toESM(require_dynamic_tag());
var import_renderer = /* @__PURE__ */ __toESM(require_renderer());
const _marko_componentType = "b";
const _marko_template = (0, import_html.t)(_marko_componentType);
_marko_template._ = (0, import_renderer.default)(function(input, out, _componentDef, _component, state, $global) {
	out.w("<div id=class>");
	(0, import_dynamic_tag.default)(out, tags_child_default, null, null, null, null, _componentDef, "1");
	out.w("</div>");
}, { t: _marko_componentType }, {});

// template.marko
const $Lazy_withLoadAssets = withLoadAssets(lazy_child_default, flush$1, "_c");
s("b", _marko_template);
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_try($scope0_id, "a", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_await($scope1_id, "a", resolveAfter("first", 2), (v) => {
			_scope_id();
			_html(_escape(v));
		}, 0);
		_dynamic_tag($scope1_id, "b", _marko_template, {}, 0, 0, 0);
		_await($scope1_id, "c", rejectAfter(/* @__PURE__ */ new Error("x"), 1), (v) => {
			_scope_id();
			_html(_escape(v));
		}, 0);
	}, void 0, (err) => {
		const $scope2_reason = _scope_reason(), $wg__err_message = _write_guard($scope2_reason, 0);
		const $scope2_id = _scope_id();
		$Lazy_withLoadAssets({ value: "catch" });
		_html(` caught ${_text_resume($scope2_id, "c", err.message, $wg__err_message * 2)}`);
		_write_if($scope2_reason, 0) && _scope($scope2_id, {});
	}, void 0, "a0");
}, 1);
