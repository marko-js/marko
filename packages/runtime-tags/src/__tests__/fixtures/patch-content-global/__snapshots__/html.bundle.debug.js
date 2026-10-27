// tags/widget/index.marko
const $template$1 = "<section><span> </span><!></section>";
const $walks$1 = "E l%l";
const $setup$1 = [[], []];
_shells({ "__tests__/tags/widget/index.marko": "__tests__/tags/widget/index.marko;E l%;<section><span> </span><!></section>" });
var widget_default = _template("__tests__/tags/widget/index.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<section><span>${_patch_text($scope0_id, "#text/0", input.value, void 0, $scope0_reason, 0)}</span>`);
	_dynamic_tag($scope0_id, "#text/1", input.content, {}, 2, 0, 0, _write_guard($scope0_reason, 1), $scope0_reason, 1);
	_html("</section>");
	_scope($scope0_id, {}, "__tests__/tags/widget/index.marko", 0);
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<main>${_w0}<button>+</button></main>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `D/${_w0}& l`)($walks$1);
const $setup = _shell_setup([[], ["__tests__/template.marko_0"]], ["#childScope/0>", $setup$1]);
_shells({ "__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko${_shell_marker($setup)};${((_w0) => `D/${_w0}& l`)($walks$1)};${((_w0) => `<main>${_w0}<button>+</button></main>`)($template$1)}`)() });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	let count = 0;
	_html("<main>");
	_set_scope_reason(2);
	const $childScope = _patch_child($scope0_id, "#childScope/0", 0);
	widget_default({
		value: count,
		content: _content("__tests__/template.marko_1*content", () => {
			const $scope1_reason = _scope_reason();
			const $scope1_id = _scope_id();
			_html(`<div>${_patch_text($scope1_id, "#text/0", $global$1.brand)}</div>`);
			_fill_global_subscribe("__tests__/template.marko_1_$global_brand#0:6", $scope1_id);
			_scope($scope1_id, {}, "__tests__/template.marko", "3:4");
		}, $scope0_id)
	});
	_patch_child_end();
	_html(`<button>+</button>${_el_resume($scope0_id, "#button/1")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		count,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { count: "1:6" });
}, 1);
