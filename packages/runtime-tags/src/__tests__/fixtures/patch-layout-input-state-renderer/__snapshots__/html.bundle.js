// layout.marko
const $template = "<html><body><main><!><!></main></body></html>";
const $walks = "F%b%n";
const $setup$1 = [[], []];
_shells({ a: "a !;F%b%;<html><body><main><!><!></main></body></html>" });
var layout_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_nav__OR__input_label = _write_guard($scope0_reason, 0), $wg__input_content = _write_guard($scope0_reason, 4), $cg__input_label = _client_guard($scope0_reason, 3), $cg__input_nav = _client_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	_html(`<html>${_flush_head()}<body><main>`);
	_dynamic_tag($scope0_id, "a", input.nav, { label: input.label }, 1, 0, 0, $wg__input_nav__OR__input_label, $scope0_reason, 0, 0, 2);
	_dynamic_tag($scope0_id, "b", input.content, {}, 10, 0, 0, $wg__input_content, $scope0_reason, 4);
	_html("</main>"), _trailers("</body></html>");
	_scope($scope0_id, {
		e: (_unfilled_if($scope0_reason, 3) || _unfilled_if($scope0_reason, 0)) && input.nav,
		f: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0)) && input.label
	}) || (_filled_guard($scope0_reason, 2) && $cg__input_label && _patch_fill($scope0_id, "va0", input.nav, !_server_guard($scope0_reason, 2)), $cg__input_label && _content_withhold(input.nav), _filled_guard($scope0_reason, 3) && $cg__input_nav && _patch_fill($scope0_id, "va1", input.label, !_server_guard($scope0_reason, 3)), $cg__input_nav && _content_withhold(input.label));
}, 1);

// nav-a.marko
_shells({ b: "b;Db%;<nav>A <!></nav>" });
var nav_a_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<nav>A ${_text_resume($scope0_id, "a", input.label, 2, $scope0_reason, 0)}</nav>`);
	_scope($scope0_id, {});
});

// nav-b.marko
_shells({ c: "c;Db%;<nav>B <!></nav>" });
var nav_b_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<nav>B ${_text_resume($scope0_id, "a", input.label, 2, $scope0_reason, 0)}</nav>`);
	_scope($scope0_id, {});
});

// template.marko
const $setup = _shell_setup([[], []], ["a>", $setup$1]);
_shells({ d: /*@__PURE__*/ ((_w0) => `d${_shell_marker($setup)};${((_w0) => `/${_w0}&`)($walks)};${_w0}`)($template) });
var template_default = _template("d", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let alt = false;
	_set_scope_reason(62 | _mask_group($scope0_reason, 0) << 7);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	layout_default({
		nav: nav_a_default,
		label: input.label,
		content: _content("d1", () => {
			_scope_reason();
			const $scope1_id = _scope_id();
			_html(`<button>swap</button>${_el_resume($scope1_id, "a")}`);
			_script($scope1_id, "d0");
			_scope($scope1_id, { _: _scope_with_id($scope0_id) });
		}, $scope0_id)
	});
	_patch_child_end();
	_scope($scope0_id, {
		e: alt,
		a: _existing_scope($childScope)
	});
}, 1);
