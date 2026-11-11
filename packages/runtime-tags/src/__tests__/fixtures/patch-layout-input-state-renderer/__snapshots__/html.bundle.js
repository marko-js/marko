// layout.marko
const $template = "<html><body><main><!><!></main></body></html>";
const $walks = "F%b%n";
const $setup$1 = [[], []];
_shells({ a: "a;F%b%;<html><body><main><!><!></main></body></html>" });
var layout_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_nav__OR__input_label = _write_guard($scope0_reason, 0), $wg__input_content = _write_guard($scope0_reason, 4), $ui__input_nav__OR__input_label = _unfilled_if($scope0_reason, 0), $fg__input_nav = _filled_guard($scope0_reason, 2), $fg__input_label = _filled_guard($scope0_reason, 3);
	const $scope0_id = _scope_id();
	_html(`<html>${_flush_head()}<body><main>`);
	_dynamic_tag($scope0_id, "a", input.nav, { label: input.label }, 1, 0, 0, $wg__input_nav__OR__input_label, $scope0_reason, 0, 0, 2);
	_dynamic_tag($scope0_id, "b", input.content, {}, 10, 0, 0, $wg__input_content, $scope0_reason, 4);
	_html("</main>"), _trailers("</body></html>");
	_patch_render($scope0_id, "a0", (($fg__input_nav ? " e" : "") + ($fg__input_label ? " f" : "")).slice(1), $scope0_reason, 0);
	_scope($scope0_id, {
		e: $ui__input_nav__OR__input_label && input.nav,
		f: $ui__input_nav__OR__input_label && input.label
	}) || ($fg__input_nav && _unfilled_if($scope0_reason, 3) && _patch_write($scope0_id, "xe", input.nav, !_server_guard($scope0_reason, 2)), $fg__input_label && _unfilled_if($scope0_reason, 2) && _patch_write($scope0_id, "xf", input.label, !_server_guard($scope0_reason, 3)));
}, 1);

// nav-a.marko
_shells({ b: "b;Db%;<nav>A <!></nav>" });
var nav_a_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<nav>A ${_text_mark($scope0_id, "a", input.label, 2, $scope0_reason, 0)}</nav>`);
	_scope($scope0_id, {});
});

// nav-b.marko
_shells({ c: "c;Db%;<nav>B <!></nav>" });
var nav_b_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<nav>B ${_text_mark($scope0_id, "a", input.label, 2, $scope0_reason, 0)}</nav>`);
	_scope($scope0_id, {});
});

// template.marko
const $setup = _shell_setup([[], []], ["a>", $setup$1]);
_shells({ d: `d${_shell_marker($setup)};${((_w0) => `/${_w0}&`)($walks)};${$template}` });
var template_default = _template("d", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let alt = false;
	_set_scope_reason(62 | _updates_from($scope0_reason, 0) << 7);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	layout_default({
		nav: nav_a_default,
		label: input.label,
		content: _content("d1", () => {
			_scope_reason();
			const $scope1_id = _scope_id();
			_html(`<button>swap</button>${_el_mark($scope1_id, "a")}`);
			_script($scope1_id, "d0");
			_scope($scope1_id, { _: _scope_with_id($scope0_id) });
		}, $scope0_id)
	});
	_patch_child_end();
	_scope($scope0_id, {
		e: alt,
		a: _existing_scope($childScope)
	});
	_resume_branch($scope0_id);
}, 1);
