// layout.marko
const $template$3 = "<html><body><main><!><!></main></body></html>";
const $walks$3 = "F%b%n";
const $setup$3 = [[], []];
_shells({ "__tests__/layout.marko": "__tests__/layout.marko !;F%b%;<html><body><main><!><!></main></body></html>" });
var layout_default = _template("__tests__/layout.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_nav__OR__input_label = _write_guard($scope0_reason, 0), $wg__input_content = _write_guard($scope0_reason, 4), $cg__input_label = _client_guard($scope0_reason, 3), $cg__input_nav = _client_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	_html(`<html>${_flush_head()}<body><main>`);
	_dynamic_tag($scope0_id, "#text/0", input.nav, { label: input.label }, 1, 0, 0, $wg__input_nav__OR__input_label, $scope0_reason, 0, 0, 2);
	_dynamic_tag($scope0_id, "#text/1", input.content, {}, 10, 0, 0, $wg__input_content, $scope0_reason, 4);
	_html("</main>"), _trailers("</body></html>");
	_scope($scope0_id, {
		input_nav: (_unfilled_if($scope0_reason, 3) || _unfilled_if($scope0_reason, 0)) && input.nav,
		input_label: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0)) && input.label
	}, "__tests__/layout.marko", 0, {
		input_nav: ["input.nav"],
		input_label: ["input.label"]
	}) || (_filled_guard($scope0_reason, 2) && $cg__input_label && _patch_fill($scope0_id, "PatchFill:__tests__/layout.marko_fill0", input.nav, !_server_guard($scope0_reason, 2)), $cg__input_label && _content_withhold(input.nav), _filled_guard($scope0_reason, 3) && $cg__input_nav && _patch_fill($scope0_id, "PatchFill:__tests__/layout.marko_fill1", input.label, !_server_guard($scope0_reason, 3)), $cg__input_nav && _content_withhold(input.label));
}, 1);

// nav-a.marko
const $template$2 = "<nav>A <!></nav>";
const $walks$2 = "Db%l";
const $setup$2 = [[], []];
_shells({ "__tests__/nav-a.marko": "__tests__/nav-a.marko;Db%;<nav>A <!></nav>" });
var nav_a_default = _template("__tests__/nav-a.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<nav>A ${_text_resume($scope0_id, "#text/0", input.label, 2, $scope0_reason, 0)}</nav>`);
	_scope($scope0_id, {}, "__tests__/nav-a.marko", 0);
});

// nav-b.marko
const $template$1 = "<nav>B <!></nav>";
const $walks$1 = "Db%l";
const $setup$1 = [[], []];
_shells({ "__tests__/nav-b.marko": "__tests__/nav-b.marko;Db%;<nav>B <!></nav>" });
var nav_b_default = _template("__tests__/nav-b.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<nav>B ${_text_resume($scope0_id, "#text/0", input.label, 2, $scope0_reason, 0)}</nav>`);
	_scope($scope0_id, {}, "__tests__/nav-b.marko", 0);
});

// template.marko
const $template = $template$3;
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$3);
const $setup = _shell_setup([[], []], ["#childScope/0>", $setup$3]);
_shells({ "__tests__/template.marko": /*@__PURE__*/ ((_w0) => `__tests__/template.marko${_shell_marker($setup)};${((_w0) => `/${_w0}&`)($walks$3)};${_w0}`)($template$3) });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let alt = false;
	_set_scope_reason(62 | _mask_group($scope0_reason, 0) << 7);
	const $childScope = _patch_child($scope0_id, "#childScope/0", 0);
	layout_default({
		nav: alt ? nav_b_default : nav_a_default,
		label: input.label,
		content: _content("__tests__/template.marko_1*content", () => {
			const $scope1_reason = _scope_reason();
			const $scope1_id = _scope_id();
			_html(`<button>swap</button>${_el_resume($scope1_id, "#button/0")}`);
			_script($scope1_id, "__tests__/template.marko_1");
			_scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "5:2");
		}, $scope0_id)
	});
	_patch_child_end();
	_scope($scope0_id, {
		alt,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { alt: "4:6" });
}, 1);
